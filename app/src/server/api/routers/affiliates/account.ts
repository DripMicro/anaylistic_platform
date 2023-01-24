// affiliates

import { publicProcedure } from "../../trpc";
import { affiliate_id } from "./const";
import { affiliatesModel } from "../../../../../prisma/zod";

export const getAccount = publicProcedure.query(async ({ ctx }) => {
  const data = await ctx.prisma.affiliates.findUnique({
    where: { id: affiliate_id },
  });

  return data;
});

export const updateAccount = publicProcedure
  .input(affiliatesModel)
  .mutation(async ({ ctx, input }) => {
    const data = await ctx.prisma.affiliates.update({
      where: { id: affiliate_id },
      data: input,
    });

    return data;
  });
