import { z } from "zod";

import { publicProcedure } from "../../trpc";
import { affiliate_id } from "./const";
import { affiliates_profilesModel } from "../../../../../prisma/zod";
import { upsertSchema } from "../../../../../prisma/zod-add-schema";

export const getProfiles = publicProcedure.query(async ({ ctx }) => {
  const data = await ctx.prisma.affiliates_profiles.findMany({
    where: {
      affiliate_id,
      // valid: 1,
    },
  });

  return data;
});

export const upsertProfile = publicProcedure
  .input(upsertSchema(affiliates_profilesModel))
  .mutation(async ({ ctx, input: { id, ...data } }) => {
    return await (id
      ? ctx.prisma.affiliates_profiles.update({
          where: { id },
          data,
        })
      : ctx.prisma.affiliates_profiles.create({
          data: { id, ...data },
        }));
  });
