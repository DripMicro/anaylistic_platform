import { z } from "zod";

import { publicProcedure } from "../../trpc";
import { countBy, indexBy, map, sortBy, uniq, uniqBy, uniqWith } from "rambda";
import type {
  merchants_creative_type,
  Prisma,
  sub_banners_type,
} from "@prisma/client";
import type { ZodType } from "zod/lib/types";
import { affiliate_id, merchant_id } from "./const";
import { SelectSchema } from "../../../db-schema-utils";
import {
  addFreeTextSearchJSFilter,
  addFreeTextSearchWhere,
} from "../../../../../prisma/prisma-utils";

export const getMerchantSubCreativeMeta = publicProcedure
  .output(
    z.object({
      type: SelectSchema(z.string()),
    })
  )
  .query(async ({ ctx }) => {
    const data = await ctx.prisma.sub_banners.findMany({
      where: { valid: 1 },
      select: {
        id: true,
        // to distinct
        type: true,
      },
    });

    if (!data) {
      throw new Error("Failed to get");
    }

    return {
      type: map(
        (i) => ({ id: i, title: i }),
        uniq(data.map(({ type }) => type))
      ),
    };
  });

export const getMerchantSubCreative = publicProcedure
  .input(
    z.object({
      type: z.string().optional(), //merchants_creativeModel.shape.type.nullish(),
      search: z.string().optional(),
    })
  )
  .query(async ({ ctx, input: { type, search } }) => {
    const where: Prisma.sub_bannersWhereInput = {
      // merchant_id,
      valid: 1,
      type: type ? (type as sub_banners_type) : undefined,
      ...addFreeTextSearchWhere("title", search),
    };

    const [stats, sub] = await Promise.all([
      ctx.prisma.sub_stats.groupBy({
        by: ["banner_id"],
        where: { affiliate_id },
        _sum: {
          clicks: true,
          views: true,
        },
      }),
      addFreeTextSearchJSFilter(
        await ctx.prisma.sub_banners.findMany({
          where,
        }),
        "title",
        search
      ),
    ]);

    const statDict = indexBy("banner_id", stats);

    return map(
      ({ id, ...data }) => ({
        id,
        ...data,
        clicks: statDict[id]?._sum.clicks,
        views: statDict[id]?._sum.views,
      }),
      sub
    );
  });
//
