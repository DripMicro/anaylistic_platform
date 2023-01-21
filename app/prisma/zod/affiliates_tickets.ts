import * as z from "zod"
import * as imports from "../zod-add-schema"
import { affiliates_tickets_status } from "@prisma/client"
import { Completeaffiliates, RelatedaffiliatesModel } from "./index"

export const affiliates_ticketsModel = z.object({
  id: z.number().int(),
  rdate: z.date(),
  last_update: z.date(),
  ticket_id: z.number().int(),
  affiliate_id: z.number().int(),
  admin_id: z.number().int(),
  reply_email: z.string(),
  group_id: z.number().int(),
  status: z.nativeEnum(affiliates_tickets_status),
  subject: z.string(),
  text: z.string(),
  readed: z.number().int(),
  merchant_id: z.number().int(),
  aff_readed: z.boolean(),
})

export interface Completeaffiliates_tickets extends z.infer<typeof affiliates_ticketsModel> {
  affiliate: Completeaffiliates
}

/**
 * Relatedaffiliates_ticketsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const Relatedaffiliates_ticketsModel: z.ZodSchema<Completeaffiliates_tickets> = z.lazy(() => affiliates_ticketsModel.extend({
  affiliate: RelatedaffiliatesModel,
}))
