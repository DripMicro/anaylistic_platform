import * as z from "zod"
import * as imports from "../zod-add-schema"

export const network_bonusModel = z.object({
  id: z.number().int(),
  valid: z.number().int(),
  title: z.string(),
  group_id: z.number().int(),
  min_ftd: z.number().int(),
  bonus_amount: z.number(),
  merchant_id: z.number().int(),
  rdate: z.date(),
})
