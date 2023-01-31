import type { z } from "zod";
import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "./api/root";
import type { affiliates_profilesModel } from "../../prisma/zod";
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
