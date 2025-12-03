provider "aws" {
  region = var.region
}

resource "aws_s3_bucket" "react_site" {
  bucket = "newpage-demo-react-${random_id.suffix.hex}"

  force_destroy = true

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}

resource "random_id" "suffix" {
  byte_length = 4
}

resource "null_resource" "upload_react_build" {
  provisioner "local-exec" {
    command = "aws s3 sync ../../newpage/dist s3://${aws_s3_bucket.react_site.bucket} --delete"
  }

  depends_on = [aws_s3_bucket.react_site]
}

resource "aws_s3_bucket_public_access_block" "react_site" {
  bucket = aws_s3_bucket.react_site.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}



resource "aws_s3_bucket_policy" "public_read" {
  bucket = aws_s3_bucket.react_site.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect    = "Allow",
        Principal = "*",
        Action    = "s3:GetObject",
        Resource  = "${aws_s3_bucket.react_site.arn}/*"
      }
    ]
  })
  depends_on = [aws_s3_bucket_public_access_block.react_site]
}

resource "aws_cloudfront_distribution" "react_site" {
  origin {
    domain_name = aws_s3_bucket.react_site.website_endpoint
    origin_id   = "reactSiteOrigin"

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "reactSiteOrigin"

    viewer_protocol_policy = "redirect-to-https"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}




# IAM role for Lambda
resource "aws_iam_role" "lambda_exec" {
  name = "contact-form-newpage-lambda-exec"
  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Effect = "Allow",
      Principal = { Service = "lambda.amazonaws.com" },
      Action = "sts:AssumeRole"
    }]
  })
}

resource "aws_iam_role_policy_attachment" "lambda_basic" {
  role       = aws_iam_role.lambda_exec.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_iam_policy" "lambda_ses" {
  name = "contact-form-newpage-lambda-ses"
  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Effect   = "Allow",
      Action   = "ses:SendEmail",
      Resource = "*"
    }]
  })
}

resource "aws_iam_role_policy_attachment" "lambda_ses_attach" {
  role       = aws_iam_role.lambda_exec.name
  policy_arn = aws_iam_policy.lambda_ses.arn
}

# Lambda function
data "archive_file" "lambda_zip" {
  type        = "zip"
  source_dir  = "${path.module}./lambda"
  output_path = "${path.module}./lambda.zip"
}

resource "aws_lambda_function" "contact_form" {
  filename         = data.archive_file.lambda_zip.output_path
  function_name    = "contactFormHandler-newpage"
  role             = aws_iam_role.lambda_exec.arn
  handler          = "handler.lambda_handler"
  runtime          = "nodejs16.x"
  source_code_hash = filebase64sha256(data.archive_file.lambda_zip.output_path)

  environment {
    variables = {
      RECIPIENT_EMAIL = var.recipient_email
      SENDER_EMAIL    = var.sender_email
      SECRET_TOKEN    = random_password.secret_token.result
    }
  }
}

# API Gateway HTTP API
resource "aws_apigatewayv2_api" "http_api" {
  name          = "contactFormAPI-Newpage"
  protocol_type = "HTTP"
  cors_configuration {
    allow_origins = ["http://localhost:5173", "https://www.newpage.com","https://de87qkskppj6q.cloudfront.net"]
    allow_methods = ["POST", "OPTIONS"]
    allow_headers = ["content-type", "x-api-key"]
  }
}

resource "aws_apigatewayv2_integration" "lambda_integration" {
  api_id                = aws_apigatewayv2_api.http_api.id
  integration_type      = "AWS_PROXY"
  integration_uri       = aws_lambda_function.contact_form.invoke_arn
  integration_method    = "POST"
  payload_format_version = "2.0"
}

resource "aws_apigatewayv2_route" "post_contact" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "POST /contact"
  target    = "integrations/${aws_apigatewayv2_integration.lambda_integration.id}"
}

resource "aws_apigatewayv2_stage" "default" {
  api_id      = aws_apigatewayv2_api.http_api.id
  name        = "$default"
  auto_deploy = true
}

resource "random_password" "secret_token" {
  length  = 32
  special = false
}

resource "aws_lambda_permission" "allow_api_gateway" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.contact_form.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.http_api.execution_arn}/*/*"
}





