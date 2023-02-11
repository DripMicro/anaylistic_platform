import { publicProcedure } from "../../trpc";
import { affiliatesModel } from "../../../../../prisma/zod";
import { upsertSchema } from "../../../../../prisma/zod-add-schema";
export const createaccount = publicProcedure.input(
    upsertSchema(
      affiliatesModel
        .pick({
          username: true,
          first_name: true,
          last_name: true,
          mail: true,
          password: true,
          phone: true,
          IMUserType: true,
          IMUser: true,
          lang: true,
          company: true,
          website: true,
        })
        .extend({ id: affiliatesModel.shape.id.optional() })
    )
  ).mutation(async ({ ctx, input }) => {
    console.log(input)
    const newentry = await ctx.prisma.affiliates.create({ data: input, })
    return newentry;
  });
  
