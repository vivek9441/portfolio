import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import {
  SESClient,
  SendEmailCommand,
  SendEmailCommandInput,
} from "@aws-sdk/client-ses";

const ses = new SESClient({ region: process.env.REGION });

// Constants
const RATE_LIMIT_DURATION = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3; // 3 requests per minute
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Types
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface RateLimitEntry {
  count: number;
  timestamp: number;
}

// Rate limiting using Lambda's execution context
const requestLog = new Map<string, RateLimitEntry>();

// CORS headers
const corsHeaders = {
  "Access-Control-Allow-Origin": "https://bjornmelin.io",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400",
};

function validateEmail(email: string): boolean {
  return EMAIL_REGEX.test(email);
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userLog = requestLog.get(ip);

  if (userLog) {
    if (now - userLog.timestamp < RATE_LIMIT_DURATION) {
      if (userLog.count >= MAX_REQUESTS) {
        return false;
      }
      requestLog.set(ip, {
        count: userLog.count + 1,
        timestamp: userLog.timestamp,
      });
    } else {
      requestLog.set(ip, { count: 1, timestamp: now });
    }
  } else {
    requestLog.set(ip, { count: 1, timestamp: now });
  }
  return true;
}

function validateInput(data: ContactFormData): string | null {
  if (!data.name || typeof data.name !== "string" || data.name.length < 2) {
    return "Name must be at least 2 characters long";
  }
  if (!data.email || !validateEmail(data.email)) {
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

async function sendEmail(data: ContactFormData): Promise<void> {
  const emailParams: SendEmailCommandInput = {
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
          `,
          Charset: "UTF-8",
        },
        Html: {
          Data: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${data.name}</p>
<p><strong>Email:</strong> ${data.email}</p>
<p><strong>Message:</strong></p>
<p>${data.message}</p>
          `,
          Charset: "UTF-8",
        },
      },
    },
  };

  await ses.send(new SendEmailCommand(emailParams));
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
    // Rate limiting
    const clientIp = event.requestContext.identity.sourceIp;
    if (!checkRateLimit(clientIp)) {
      return {
        statusCode: 429,
        headers: corsHeaders,
        body: JSON.stringify({
          error: "Too many requests. Please try again later.",
        }),
      };
    }

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
    await sendEmail(data);

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error("Error processing contact form:", error);

    // Handle different types of errors
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
