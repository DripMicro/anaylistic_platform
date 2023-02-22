import * as z from "zod"
import * as imports from "../zod-add-schema"
import { payments_details_status } from "@prisma/client"
import { Completeaffiliates, RelatedaffiliatesModel, Completepayments_paid, Relatedpayments_paidModel } from "./index"

export const payments_detailsModel = z.object({
  id: z.number().int(),
  rdate: z.date(),
  status: z.nativeEnum(payments_details_status),
  reportType: z.string(),
  month: z.string(),
  year: z.string(),
  paymentID: z.string(),
  merchant_id: z.number().int(),
  affiliate_id: z.number().int(),
  trader_id: z.string(),
  amount: z.number(),
  deposit: z.number(),
  withdrawal: z.number(),
  reason: z.string(),
})

export interface Completepayments_details extends z.infer<typeof payments_detailsModel> {
  affiliate: Completeaffiliates
  paid: Completepayments_paid
}

/**
 * Relatedpayments_detailsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const Relatedpayments_detailsModel: z.ZodSchema<Completepayments_details> = z.lazy(() => payments_detailsModel.extend({
  affiliate: RelatedaffiliatesModel,
  paid: Relatedpayments_paidModel,
}))
