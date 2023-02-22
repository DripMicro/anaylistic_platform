import * as z from "zod"
import * as imports from "../zod-add-schema"
import { users_firewall_type } from "@prisma/client"

export const users_firewallModel = z.object({
  id: z.number().int(),
  rdate: z.date().nullish(),
  set_by_user_id: z.number().int(),
  IPs: z.string(),
  valid: z.number().int(),
  type: z.nativeEnum(users_firewall_type),
  comment: z.string(),
})
