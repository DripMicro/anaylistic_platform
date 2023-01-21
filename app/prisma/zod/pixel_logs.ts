import * as z from "zod"
import * as imports from "../zod-add-schema"

export const pixel_logsModel = z.object({
  id: z.number().int(),
  dateTime: z.date(),
  firedUrl: z.string(),
  pixelCode: z.number().int(),
  pixelResponse: z.string(),
  product_id: z.number().int(),
})
