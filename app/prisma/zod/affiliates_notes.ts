import * as z from "zod"
import * as imports from "../zod-add-schema"
import { affiliates_notes_status } from "@prisma/client"
import { Completeaffiliates, RelatedaffiliatesModel } from "./index"

export const affiliates_notesModel = z.object({
  id: z.number().int(),
  rdate: z.date(),
  valid: z.number().int(),
  admin_id: z.number().int(),
  edited_by: z.number().int(),
  affiliate_id: z.number().int(),
  group_id: z.number().int(),
  notes: z.string(),
  issue_date: z.date(),
  closed_date: z.date(),
  status: z.nativeEnum(affiliates_notes_status),
})

export interface Completeaffiliates_notes extends z.infer<typeof affiliates_notesModel> {
  affiliate: Completeaffiliates
}

/**
 * Relatedaffiliates_notesModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const Relatedaffiliates_notesModel: z.ZodSchema<Completeaffiliates_notes> = z.lazy(() => affiliates_notesModel.extend({
  affiliate: RelatedaffiliatesModel,
}))
