import * as z from "zod"
import * as imports from "../zod-add-schema"

export const short_urlsModel = z.object({
  id: z.number().int(),
  long_url: z.string(),
  short_code: z.unknown(),
  short_urls: z.date(),
  counter: z.number().int(),
})
