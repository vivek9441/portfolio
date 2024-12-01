import { createTRPCRouter } from '@/server/api/trpc';
import { portfolioRouter } from '@/server/api/routers/portfolio';
import { contactRouter } from '@/server/api/routers/contact';

export const appRouter = createTRPCRouter({
    portfolio: portfolioRouter,
    contact: contactRouter,
});

export type AppRouter = typeof appRouter; 