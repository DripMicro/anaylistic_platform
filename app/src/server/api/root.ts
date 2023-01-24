import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import { affiliatesRouter } from "./routers/affiliates";
import { miscRouter } from "./routers/misc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  affiliates: affiliatesRouter,
  misc: miscRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
