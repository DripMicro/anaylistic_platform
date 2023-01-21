import * as z from "zod"
import * as imports from "../zod-add-schema"

export const countriesModel = z.object({
  id: z.number().int(),
  title: z.string(),
  valid: z.boolean(),
  code: z.string(),
  spotCode: z.number().int(),
})
