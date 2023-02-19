import type { z } from "zod";
import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "./api/root";
import type {
  affiliates_profilesModel,
  affiliates_ticketsModel,
  pixel_monitorModel,
} from "../../prisma/zod";
import { getPaymentsPaid } from "./api/routers/affiliates/billing";

type RouterInput = inferRouterInputs<AppRouter>;
type RouterOutput = inferRouterOutputs<AppRouter>;

export type MerchantCreativeType =
  RouterOutput["affiliates"]["getMerchantCreative"];

export type MerchantSubCreativeType =
  RouterOutput["affiliates"]["getMerchantSubCreative"];

export type AffiliateAccountType = RouterOutput["affiliates"]["getAccount"];
export type AffiliateAccountUpdateType =
  RouterInput["affiliates"]["updateAccount"];

export type AffiliateProfileType = RouterOutput["affiliates"]["getProfiles"][0];
export type AffiliateProfileUpsertType =
  RouterInput["affiliates"]["upsertProfile"];

export type affiliates_profilesModelType = z.infer<
  typeof affiliates_profilesModel
>;

export type PaymentsPaidType = RouterOutput["affiliates"]["getPaymentsPaid"][0];

export type AffiliateTicketType = RouterOutput["affiliates"]["getTickets"][0];
export type AffiliateTicketUpsertType =
  RouterInput["affiliates"]["upsertTicket"];

export type affiliates_ticketsModelType = z.infer<
  typeof affiliates_ticketsModel
>;

export type AffiliateDocumentType =
  RouterOutput["affiliates"]["getDocuments"][0];

export type PixelMonitorType =
  RouterOutput["affiliates"]["getPixelMonitor"][0];
export type PixelMonitorUpsertType =
  RouterInput["affiliates"]["upsertPixelMonitor"];

export type pixel_monitorModelType = z.infer<
  typeof pixel_monitorModel
>;
