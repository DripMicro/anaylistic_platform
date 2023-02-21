import * as z from "zod"
import * as imports from "../zod-add-schema"
import { chart_data_level } from "@prisma/client"

export const chart_dataModel = z.object({
  id: z.number().int(),
  lastUpdate: z.date(),
  fulldate: z.date(),
  level: z.nativeEnum(chart_data_level),
  member_id: z.number().int(),
  month: z.string(),
  year: z.number().int(),
  accounts: z.number().int(),
  ftds: z.number().int(),
  val1: z.number().int(),
  val2: z.number().int(),
})
