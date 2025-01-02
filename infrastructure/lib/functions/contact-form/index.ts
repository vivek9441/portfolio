import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({ region: process.env.REGION });

// Types
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// CORS headers with default fallback for ALLOWED_ORIGIN
const corsHeaders = {
  "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGIN || "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "3600",
} as const;

function validateInput(data: ContactFormData): string | null {
  if (!data.name || typeof data.name !== "string" || data.name.length < 2) {
    return "Name must be at least 2 characters long";
  }
  if (!data.email || !data.email.includes("@")) {
    return "Invalid email address";
  }
  if (
    !data.message ||
    typeof data.message !== "string" ||
    data.message.length < 10
  ) {
    return "Message must be at least 10 characters long";
  }
  return null;
}

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  // Handle CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: "",
    };
  }

  try {
    // Parse and validate input
    if (!event.body) {
      throw new Error("Missing request body");
    }

    const data: ContactFormData = JSON.parse(event.body);
    const validationError = validateInput(data);

    if (validationError) {
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ error: validationError }),
      };
    }

    // Send email
    await ses.send(
      new SendEmailCommand({
        Source: process.env.SENDER_EMAIL,
        Destination: {
          ToAddresses: [process.env.RECIPIENT_EMAIL!],
        },
        Message: {
          Subject: {
            Data: `New Contact Form Submission from ${data.name}`,
            Charset: "UTF-8",
          },
          Body: {
            Text: {
              Data: `
Name: ${data.name}
Email: ${data.email}
Message: ${data.message}
Time: ${new Date().toISOString()}
              `,
              Charset: "UTF-8",
            },
            Html: {
              Data: `
<!DOCTYPE html>
<html>
<body>
  <h2>New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${data.name}</p>
  <p><strong>Email:</strong> ${data.email}</p>
  <p><strong>Message:</strong></p>
  <p>${data.message}</p>
  <hr>
  <p><small>Time: ${new Date().toISOString()}</small></p>
</body>
</html>
              `,
              Charset: "UTF-8",
            },
          },
        },
      })
    );

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error("Error processing contact form:", error);

    if (error instanceof SyntaxError) {
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({
          error: "Invalid request format",
          message: "The request body must be valid JSON",
        }),
      };
    }

    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({
        error: "Failed to send email",
        message: error instanceof Error ? error.message : "Unknown error",
      }),
    };
  }
};
