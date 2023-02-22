import * as z from "zod"
import * as imports from "../zod-add-schema"
import { loginhistory_type } from "@prisma/client"

export const loginhistoryModel = z.object({
  id: z.number().int(),
  type: z.nativeEnum(loginhistory_type),
  error: z.number().int(),
  username: z.string(),
  password: z.number().int(),
  affiliate_id: z.number().int(),
  login_as_affiliate_by_user_id: z.number().int(),
  affiliate_valid: z.boolean(),
  admin_id_force_allow: z.number().int(),
  failureLogin: z.boolean(),
  ip: z.string(),
  refe: z.string(),
  HTTP_USER_AGENT: z.string(),
  REMOTE_ADDR: z.string(),
  rdate: z.date(),
  attempt: z.string(),
})
