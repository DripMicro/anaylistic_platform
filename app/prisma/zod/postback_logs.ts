import * as z from "zod"
import * as imports from "../zod-add-schema"
import { postback_logs_flag } from "@prisma/client"

export const postback_logsModel = z.object({
  id: z.number().int(),
  rdate: z.date(),
  flag: z.nativeEnum(postback_logs_flag),
  merchant_id: z.number().int(),
  text: z.string(),
  ip: z.string(),
  url: z.string(),
})
