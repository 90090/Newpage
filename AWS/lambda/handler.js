const AWS = require("aws-sdk");
const ses = new AWS.SES({ region: "us-east-1" });

const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL;
const SENDER_EMAIL = process.env.SENDER_EMAIL;
const SECRET_TOKEN = process.env.SECRET_TOKEN;

exports.lambda_handler = async (event) => {
  try {
    // // Validate secret token header
    // const token = event.headers["x-api-key"];
    // if (!token || token !== SECRET_TOKEN) {
    //   return {
    //     statusCode: 403,
    //     body: JSON.stringify({ message: "Forbidden" }),
    //   };
    // }

    const body = JSON.parse(event.body);

    const { name, email, phone, company, details, services } = body;

    // Basic validation
    if (!name || !email || !details) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing required fields" }),
      };
    }

    if (details.length > 2000) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Message too long" }),
      };
    }

    // Construct the message
    const emailText = `
You received a new contact form submission:

Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Company: ${company || "N/A"}

Services Interested In:
${Array.isArray(services) && services.length > 0 ? services.join(", ") : "None selected"}

Project Details:
${details}
    `.trim();

    const params = {
      Destination: {
        ToAddresses: [RECIPIENT_EMAIL],
      },
      Message: {
        Body: {
          Text: {
            Data: emailText,
          },
        },
        Subject: {
          Data: "New Contact Form Submission",
        },
      },
      Source: SENDER_EMAIL,
      ReplyToAddresses: [email],
    };

    await ses.sendEmail(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Submission successful" }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error" }),
    };
  }
};
