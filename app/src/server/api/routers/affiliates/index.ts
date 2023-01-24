import { createTRPCRouter } from "../../trpc";
import { getMerchantCreative, getMerchantCreativeMeta } from "./creative";
import { getProfiles, upsertProfile } from "./profile";
import { getMerchantSubCreative, getMerchantSubCreativeMeta } from "./sub";
import { getAccount, updateAccount } from "./account";

export const affiliatesRouter = createTRPCRouter({
  getMerchantCreativeMeta,
  getMerchantCreative,

  getMerchantSubCreativeMeta,
  getMerchantSubCreative,

  getProfiles,
  upsertProfile,

  getAccount,
  updateAccount,
});
