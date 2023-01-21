import * as z from "zod"
import * as imports from "../zod-add-schema"
import { admins_level, admins_userType } from "@prisma/client"

export const adminsModel = z.object({
  id: z.number().int(),
  notifyOnAffReg: z.number().int(),
  rdate: z.date(),
  ip: z.string(),
  chk_ip: z.string(),
  valid: z.number().int(),
  lang: z.string(),
  level: z.nativeEnum(admins_level),
  username: z.string(),
  password: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.string(),
  lastactive: z.date(),
  logged: z.number().int(),
  group_id: z.number().int(),
  phone: z.string(),
  IMUserType: z.string(),
  IMUser: z.string(),
  zopimChat: z.string(),
  bigPic: z.string(),
  relatedMerchantID: z.string(),
  preferedCurrency: z.string(),
  userType: z.nativeEnum(admins_userType),
  showAdditionalLink: z.boolean(),
  additionalLinkText: z.string(),
  additionalLinkUrl: z.string(),
})
