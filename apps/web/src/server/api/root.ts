import { createTRPCRouter } from '@/server/api/trpc';
import { portfolioRouter } from '@/server/api/routers/portfolio';

export const appRouter = createTRPCRouter({
  portfolio: portfolioRouter,
});

export type AppRouter = typeof appRouter; 