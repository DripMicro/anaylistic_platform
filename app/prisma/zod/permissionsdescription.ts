import * as z from "zod"
import * as imports from "../zod-add-schema"
import { permissionsdescription_type } from "@prisma/client"

export const permissionsdescriptionModel = z.object({
  id: z.number().int(),
  key: z.string(),
  description: z.string(),
  type: z.nativeEnum(permissionsdescription_type),
  valid: z.boolean(),
})
