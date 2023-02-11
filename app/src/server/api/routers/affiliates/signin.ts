import { publicProcedure } from "../../trpc";
import { affiliatesModel } from "../../../../../prisma/zod";
import { upsertSchema } from "../../../../../prisma/zod-add-schema";
import { TRPCError } from "@trpc/server";
const bcrypt = require("bcryptjs");

  export const loginaccount = publicProcedure
  .input(affiliatesModel.partial())
  .mutation(async ({ ctx, input }) => {
    console.log(input.username);
    const data = await ctx.prisma.affiliates.findOne({
        where: { username: input.username },
    });

    if (!data) {
           throw new TRPCError({
        code: "NOT_FOUND",
        message: `Affiliate account ${input.username} not found.`,
      });
      }
      if (data) {
        const valid = await bcrypt.compare(input.password, data.password);
            if (!valid) {
                throw new TRPCError({
                    code: "NOT_FOUND",
                    message: `Affiliate invaled password.`,
                  });
            }
        }
  });

  