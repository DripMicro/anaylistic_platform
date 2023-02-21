import * as z from "zod"
import * as imports from "../zod-add-schema"

export const exchange_ratesModel = z.object({
  id: z.number().int(),
  currKey: z.string(),
  fromCurr: z.string(),
  toCurr: z.string(),
  val: z.number(),
  rate: z.number(),
  lastUpdate: z.date(),
  lastCheck: z.date(),
  valid: z.boolean(),
})
