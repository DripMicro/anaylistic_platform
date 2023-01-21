import * as z from "zod"
import * as imports from "../zod-add-schema"
import { apicredentials_type } from "@prisma/client"
import { Completemerchants, RelatedmerchantsModel } from "./index"

export const apicredentialsModel = z.object({
  id: z.number().int(),
  merchant_id: z.number().int(),
  valid: z.boolean(),
  user: z.string(),
  password: z.string(),
  url: z.string(),
  type: z.nativeEnum(apicredentials_type),
})

export interface Completeapicredentials extends z.infer<typeof apicredentialsModel> {
  merchant: Completemerchants
}

/**
 * RelatedapicredentialsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedapicredentialsModel: z.ZodSchema<Completeapicredentials> = z.lazy(() => apicredentialsModel.extend({
  merchant: RelatedmerchantsModel,
}))
