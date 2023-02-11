import * as z from "zod"
import * as imports from "../zod-add-schema"
import { Completeaffiliates, RelatedaffiliatesModel, Completepayments_details, Relatedpayments_detailsModel } from "./index"

export const payments_paidModel = z.object({
  id: z.number().int(),
  rdate: z.date(),
  month: z.string(),
  year: z.string(),
  affiliate_id: z.number().int(),
  paid: z.number().int(),
  paymentID: z.string(),
  transaction_id: z.string(),
  notes: z.string(),
  extras: z.string(),
  total: z.number(),
  sentMail: z.number().int(),
  usedCredit: z.number(),
  creditLeft: z.number(),
  amount_gap_from_previous_month: z.number(),
  credit_gap_from_previous_month: z.number(),
})

export interface Completepayments_paid extends z.infer<typeof payments_paidModel> {
  affiliate: Completeaffiliates
  payments_details: Completepayments_details[]
}

/**
 * Relatedpayments_paidModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const Relatedpayments_paidModel: z.ZodSchema<Completepayments_paid> = z.lazy(() => payments_paidModel.extend({
  affiliate: RelatedaffiliatesModel,
  payments_details: Relatedpayments_detailsModel.array(),
}))
