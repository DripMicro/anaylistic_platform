import * as z from "zod"
import * as imports from "../zod-add-schema"
import { permissionprofile_defaultViewForDealType } from "@prisma/client"

export const permissionprofileModel = z.object({
  id: z.number().int(),
  defaultViewForDealType: z.nativeEnum(permissionprofile_defaultViewForDealType),
  name: z.string(),
  rdate: z.date(),
  affiliate_id: z.number().int(),
  reportsPermissions: z.string(),
  fieldsPermissions: z.string(),
  valid: z.boolean(),
  created_by_admin_id: z.number().int(),
})
