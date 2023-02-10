import { publicProcedure } from "../../trpc";
import { affiliatesModel } from "../../../../../prisma/zod";
import { TRPCError } from "@trpc/server";


  export const createaccount = publicProcedure
  .input(affiliatesModel.partial())
  .mutation(async ({ ctx, input }) => {
    const data = await ctx.prisma.affiliates.create({
      data: input,
    });

    return data;
  });
  
