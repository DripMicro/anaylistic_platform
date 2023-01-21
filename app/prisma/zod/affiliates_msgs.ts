import * as z from "zod"
import * as imports from "../zod-add-schema"
import { Completeaffiliates, RelatedaffiliatesModel } from "./index"

export const affiliates_msgsModel = z.object({
  id: z.number().int(),
  rdate: z.date(),
  valid: z.number().int(),
  admin_id: z.number().int(),
  group_id: z.number().int(),
  affiliate_id: z.number().int(),
  advertiser_id: z.number().int(),
  title: z.string(),
  text: z.string(),
  status_id: z.number().int(),
  display_approval_popup: z.number().int(),
})

export interface Completeaffiliates_msgs extends z.infer<typeof affiliates_msgsModel> {
  affiliate: Completeaffiliates
}

/**
 * Relatedaffiliates_msgsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const Relatedaffiliates_msgsModel: z.ZodSchema<Completeaffiliates_msgs> = z.lazy(() => affiliates_msgsModel.extend({
  affiliate: RelatedaffiliatesModel,
}))
