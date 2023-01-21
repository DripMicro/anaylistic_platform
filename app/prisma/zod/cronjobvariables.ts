import * as z from "zod"
import * as imports from "../zod-add-schema"

export const cronjobvariablesModel = z.object({
  Name: z.string(),
  Date: z.date(),
  Value: z.string(),
})
