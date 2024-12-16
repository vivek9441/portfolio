import { initTRPC } from "@trpc/server";
import superjson from "superjson";
import { type NextRequest } from "next/server";

export const createTRPCContext = async (opts: { req: NextRequest }) => {
  return {
    req: opts.req,
  };
};

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;
