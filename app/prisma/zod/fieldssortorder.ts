import * as z from "zod"
import * as imports from "../zod-add-schema"

export const fieldssortorderModel = z.object({
  id: z.number().int(),
  name: z.string(),
  fieldName: z.string(),
  productType: z.string(),
  defaultPos: z.number().int(),
  newPos: z.number().int(),
})
