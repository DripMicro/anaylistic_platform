import * as z from "zod"
import * as imports from "../zod-add-schema"
import { Completeaffiliates_profiles, Relatedaffiliates_profilesModel } from "./index"

export const affiliates_campaigns_relationsModel = z.object({
  id: z.number().int(),
  name: z.string(),
  campID: z.string(),
  affiliate_id: z.number().int(),
  advertiserID: z.number().int(),
  profile_id: z.number().int(),
  isDefaultCamp: z.boolean(),
  merchant_id: z.number().int(),
  affiliates_profilesId: z.number().int().nullish(),
})

export interface Completeaffiliates_campaigns_relations extends z.infer<typeof affiliates_campaigns_relationsModel> {
  affiliates_profiles?: Completeaffiliates_profiles | null
}

/**
 * Relatedaffiliates_campaigns_relationsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const Relatedaffiliates_campaigns_relationsModel: z.ZodSchema<Completeaffiliates_campaigns_relations> = z.lazy(() => affiliates_campaigns_relationsModel.extend({
  affiliates_profiles: Relatedaffiliates_profilesModel.nullish(),
}))
