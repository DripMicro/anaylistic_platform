import { publicProcedure } from "../../trpc";
import { affiliate_id } from "../affiliates/const";
import { SelectSchema } from "../../../db-schema-utils";
import { z } from "zod";

export const getCountries = publicProcedure
  .output(SelectSchema(z.number()))
  .query(async ({ ctx }) => {
    const data = await ctx.prisma.countries.findMany({
      where: { id: { gt: 1 } },
      select: { id: true, title: true },
    });

    return data;
  });
