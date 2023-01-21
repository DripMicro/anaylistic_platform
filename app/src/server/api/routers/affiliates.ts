import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";
import { countBy, map, sortBy, uniq, uniqBy, uniqWith } from "rambda";
import type { merchants_creative_type, Prisma } from "@prisma/client";
import type { ZodType } from "zod/lib/types";

const affiliate_id = 500;
const merchant_id = 1;

const SelectSchema = (zt: ZodType) =>
  z.array(z.object({ id: zt, title: z.string() }));

export const affiliatesRouter = createTRPCRouter({
  getMerchantCreativeMeta: publicProcedure
    .output(
      z.object({
        merchants_creative_categories: SelectSchema(z.number()),
        merchants_promotions: SelectSchema(z.number()),
        language: SelectSchema(z.number()),
        type: SelectSchema(z.string()),
        size: SelectSchema(z.string()),
      })
    )
    .query(async ({ ctx }) => {
      // SELECT * FROM affiliates WHERE id='500' AND valid='1'

      const data = await ctx.prisma.merchants.findUnique({
        where: { id: merchant_id },
        select: {
          id: true,
          merchants_creative_categories: {
            where: { valid: true },
            select: { id: true, categoryname: true },
          },

          merchants_promotions: {
            where: { valid: 1, affiliate_id },
            select: {
              id: true,
              title: true,
            },
          },

          merchants_creative: {
            where: { valid: 1 },
            select: {
              id: true,
              // to distinct
              language: { select: { id: true, title: true } },

              // to distinct
              type: true,

              // to distinct
              width: true,
              height: true,
            },
          },
        },
      });

      if (!data) {
        throw new Error("Failed to get");
      }

      return {
        merchants_creative_categories: map(
          ({ id, categoryname }) => ({ id, title: categoryname }),
          data.merchants_creative_categories
        ),
        merchants_promotions: data.merchants_promotions,
        language: sortBy(
          ({ id, title }: { id: number; title: string }) => id,
          uniqBy(
            ({ id }): number => id,
            data.merchants_creative.map(({ language: { id, title } }) => ({
              id,
              title,
            }))
          )
        ),
        type: map(
          (i) => ({ id: i, title: i }),
          uniq(data.merchants_creative.map(({ type }) => type))
        ),
        size: sortBy(
          ({ id, title }) => {
            const [width, height] = id.split("x").map(Number);
            return (width || 0) * (height || 0);
          },
          Object.values(
            map(
              (count: number, value) => ({
                id: value,
                title: `${value} (${count})`,
              }),
              countBy(
                (text) => text,
                data.merchants_creative.map(
                  ({ width, height }) => `${width}x${height}`
                )
              )
            )
          )
        ),
      };
    }),
  getMerchantCreative: publicProcedure
    .input(
      z.object({
        category: z.number().optional(),
        promotion: z.number().optional(),
        language: z.number().optional(),
        type: z.string().optional(), //merchants_creativeModel.shape.type.nullish(),
        size: z.string().optional(),
        search: z.string().optional(),
      })
    )
    .query(
      async ({
        ctx,
        input: { category, promotion, language, type, size, search },
      }) => {
        const [width, height] = size
          ? size.split("x").map(Number)
          : [undefined, undefined];

        const whereOr = [];
        if (search) {
          whereOr.push({ title: { contains: search } });
        }
        if (Number(search)) {
          whereOr.push({ id: Number(search) });
        }

        const where: Prisma.merchants_creativeWhereInput = {
          merchant_id,
          product_id: 0,
          valid: 1,
          category_id: category,
          promotion_id: promotion,
          language_id: language,
          type: type ? (type as merchants_creative_type) : undefined,
          width,
          height,
          OR: whereOr.length ? whereOr : undefined,
        };

        console.log(`muly:merchants_creative:findMany`, {
          where,
        });

        return ctx.prisma.merchants_creative.findMany({ where });
      }
    ),
});
