output "api_endpoint" {
  value = "${aws_apigatewayv2_api.http_api.api_endpoint}/contact"
}

output "secret_token" {
  value     = random_password.secret_token.result
  sensitive = true
}

output "demo_url" {
  value = aws_cloudfront_distribution.react_site.domain_name
}


# output "api_key" {
#   value     = aws_apigatewayv2_api_key.contact_form_key.value
#   sensitive = true
# }
