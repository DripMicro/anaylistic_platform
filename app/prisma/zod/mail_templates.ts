import * as z from "zod"
import * as imports from "../zod-add-schema"

export const mail_templatesModel = z.object({
  id: z.number().int(),
  ip: z.string(),
  rdate: z.date(),
  admin_id: z.number().int(),
  language_id: z.number().int(),
  is_advertiser_related: z.boolean(),
  valid: z.number().int(),
  title: z.string(),
  mailCode: z.string(),
  text: z.string(),
  trigger_name: z.string(),
})
