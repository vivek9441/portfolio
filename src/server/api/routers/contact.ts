import { TRPCError } from "@trpc/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { contactFormSchema } from "@/lib/schemas/contact";
import { env } from "@/env.mjs";

// Initialize SES client
const ses = new SESClient({
  region: env.AWS_REGION,
  credentials: {
    accessKeyId: env.AWS_ACCESS_KEY_ID,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
  },
});

export const contactRouter = createTRPCRouter({
  submit: publicProcedure
    .input(contactFormSchema)
    .mutation(async ({ input }) => {
      try {
        // Send email via SES
        await ses.send(
          new SendEmailCommand({
            Source: `no-reply@${env.NEXT_PUBLIC_APP_URL}`,
            Destination: {
              ToAddresses: [env.CONTACT_EMAIL],
            },
            Message: {
              Subject: {
                Data: `New Contact Form Submission from ${input.name}`,
                Charset: "UTF-8",
              },
              Body: {
                Text: {
                  Data: `
Name: ${input.name}
Email: ${input.email}
Message: ${input.message}
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
  <p><strong>Name:</strong> ${input.name}</p>
  <p><strong>Email:</strong> ${input.email}</p>
  <p><strong>Message:</strong></p>
  <p>${input.message}</p>
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

        return { success: true };
      } catch (error) {
        console.error("Failed to send email:", error);

        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to send message. Please try again later.",
        });
      }
    }),
});
