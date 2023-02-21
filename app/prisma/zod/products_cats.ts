import * as z from "zod"
import * as imports from "../zod-add-schema"

export const products_catsModel = z.object({
  id: z.number().int(),
  rdate: z.date(),
  valid: z.number().int(),
  title: z.string(),
  parent_id: z.number().int(),
})
