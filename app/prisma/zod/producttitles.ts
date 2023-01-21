import * as z from "zod"
import * as imports from "../zod-add-schema"

export const producttitlesModel = z.object({
  id: z.number().int(),
  source: z.string(),
  Casino: z.string(),
  SportsBetting: z.string(),
  BinaryOption: z.string(),
  Forex: z.string(),
  Download: z.string(),
  Gaming: z.string(),
  Mobile: z.string(),
  Ecommerce: z.string(),
  Dating: z.string(),
  Rummy: z.string(),
  Bingo: z.string(),
})
