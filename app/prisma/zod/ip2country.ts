import * as z from "zod"
import * as imports from "../zod-add-schema"

export const ip2countryModel = z.object({
  ipFROM: z.number().int(),
  ipTO: z.number().int(),
  countrySHORT: z.string(),
  countryLONG: z.string(),
})
