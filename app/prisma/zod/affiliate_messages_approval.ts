import * as z from "zod"
import * as imports from "../zod-add-schema"

export const affiliate_messages_approvalModel = z.object({
  id: z.number().int(),
  affiliate_id: z.number().int(),
  message_id: z.number().int(),
  approval_date: z.date(),
})
