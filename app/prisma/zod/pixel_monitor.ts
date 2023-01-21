import * as z from "zod"
import * as imports from "../zod-add-schema"
import { pixel_monitor_type, pixel_monitor_method } from "@prisma/client"

export const pixel_monitorModel = z.object({
  id: z.number().int(),
  type: z.nativeEnum(pixel_monitor_type),
  method: z.nativeEnum(pixel_monitor_method),
  rdate: z.date(),
  valid: z.number().int(),
  affiliate_id: z.number().int(),
  merchant_id: z.number().int(),
  pixelCode: z.string(),
  totalFired: z.number().int(),
  product_id: z.number().int(),
  banner_id: z.number().int(),
})
