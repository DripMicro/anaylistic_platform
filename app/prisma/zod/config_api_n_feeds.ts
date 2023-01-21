import * as z from "zod"
import * as imports from "../zod-add-schema"

export const config_api_n_feedsModel = z.object({
  id: z.number().int(),
  apiStaticIP: z.string(),
  apiAccessType: z.string(),
  apiToken: z.string(),
  status: z.number().int(),
  createdByUserID: z.number().int(),
  rdate: z.date(),
  outputType: z.string(),
})
