import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import { contactRouter } from "./routers/contact";

export const appRouter = createTRPCRouter({
  example: exampleRouter,
  contact: contactRouter,
});

export type AppRouter = typeof appRouter;
