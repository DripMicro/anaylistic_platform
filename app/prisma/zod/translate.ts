import * as z from "zod"
import * as imports from "../zod-add-schema"

export const translateModel = z.object({
  id: z.number().int(),
  rdate: z.date(),
  source: z.string(),
  langENG: z.string(),
  langRUS: z.string(),
  langGER: z.string(),
  langFRA: z.string(),
  langITA: z.string(),
  langESP: z.string(),
  langHEB: z.string(),
  langARA: z.string(),
  langCHI: z.string(),
  langPOR: z.string(),
  langJAP: z.string(),
})
