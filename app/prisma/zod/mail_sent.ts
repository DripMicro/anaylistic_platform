import * as z from "zod"
import * as imports from "../zod-add-schema"

export const mail_sentModel = z.object({
  id: z.number().int(),
  valid: z.number().int(),
  rdate: z.date(),
  trackingCode: z.string(),
  affiliate_id: z.number().int(),
  admin_id: z.number().int(),
  mail_id: z.number().int(),
  mailCode: z.string(),
  opened: z.number().int(),
  opened_time: z.date(),
})
