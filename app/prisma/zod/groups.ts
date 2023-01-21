import * as z from "zod"
import * as imports from "../zod-add-schema"

export const groupsModel = z.object({
  id: z.number().int(),
  rdate: z.date(),
  valid: z.number().int(),
  title: z.string(),
  language_id: z.string(),
  makedefault: z.boolean(),
})
