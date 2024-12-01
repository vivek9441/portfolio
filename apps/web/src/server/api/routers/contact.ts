import { TRPCError } from '@trpc/server';
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas/contact";

const RATE_LIMIT_DURATION = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3; // Maximum 3 requests per minute

const requestLog = new Map<string, { count: number; timestamp: number }>();

export const contactRouter = createTRPCRouter({
    submit: publicProcedure
        .input(contactFormSchema)
        .mutation(async ({ input, ctx }: { input: ContactFormData, ctx: any }) => {
            // Rate limiting
            const clientIp = ctx.req?.socket?.remoteAddress || 'unknown';
            const now = Date.now();
            const userLog = requestLog.get(clientIp);

            if (userLog) {
                if (now - userLog.timestamp < RATE_LIMIT_DURATION) {
                    if (userLog.count >= MAX_REQUESTS) {
                        throw new TRPCError({
                            code: 'TOO_MANY_REQUESTS',
                            message: 'Please wait before sending another message',
                        });
                    }
                    userLog.count++;
                } else {
                    requestLog.set(clientIp, { count: 1, timestamp: now });
                }
            } else {
                requestLog.set(clientIp, { count: 1, timestamp: now });
            }

            try {
                // TODO: Implement email sending logic. Use AWS SES
                console.log("Contact form submission:", input);
                await new Promise(resolve => setTimeout(resolve, 1000));

                return {
                    success: true,
                    message: "Message sent successfully",
                };
            } catch (error) {
                throw new TRPCError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: 'Failed to send message. Please try again later.',
                });
            }
        }),
});
