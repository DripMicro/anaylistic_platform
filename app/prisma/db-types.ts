import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import { AppRouter } from "../src/server/api/root";

type RouterInput = inferRouterInputs<AppRouter>;
type RouterOutput = inferRouterOutputs<AppRouter>;

export type MerchantCreativeType =
  RouterOutput["affiliates"]["getMerchantCreative"];

export type MerchantSubCreativeType =
  RouterOutput["affiliates"]["getMerchantSubCreative"];
