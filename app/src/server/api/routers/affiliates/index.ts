import { createTRPCRouter } from "../../trpc";
import { getMerchantCreative, getMerchantCreativeMeta } from "./creative";
import { deleteProfile, getProfiles, upsertProfile } from "./profile";
import { getMerchantSubCreative, getMerchantSubCreativeMeta } from "./sub";
import { getAccount, updateAccount } from "./account";
import { getPaymentDetails, getPaymentsPaid } from "./billing";

export const affiliatesRouter = createTRPCRouter({
  getMerchantCreativeMeta,
  getMerchantCreative,

  getMerchantSubCreativeMeta,
  getMerchantSubCreative,

  getProfiles,
  upsertProfile,
  deleteProfile,

  getAccount,
  updateAccount,

  getPaymentsPaid,
  getPaymentDetails,
});
