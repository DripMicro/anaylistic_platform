import * as z from "zod"
import * as imports from "../zod-add-schema"

export const admins_notesModel = z.object({
  id: z.number().int(),
  rdate: z.date(),
  valid: z.number().int(),
  admin_id: z.number().int(),
  edited_by: z.number().int(),
  admins_id: z.number().int(),
  notes: z.string(),
})
