import * as z from "zod";
import { affiliates_profilesModel, affiliates_ticketsModel } from "./zod";
import { ZodObject, ZodRawShape, ZodType } from "zod/lib/types";

// Place to define custom zod types
// for now empty/not used

export const upsertSchema = <T extends ZodRawShape>(schema: ZodObject<T>) =>
  schema.extend({
    id: z.number().optional(),
  });
