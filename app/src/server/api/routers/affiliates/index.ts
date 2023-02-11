import { createTRPCRouter } from "../../trpc";
import { getMerchantCreative, getMerchantCreativeMeta } from "./creative";
import { deleteProfile, getProfiles, upsertProfile } from "./profile";
import { getMerchantSubCreative, getMerchantSubCreativeMeta } from "./sub";
import { getAccount, updateAccount } from "./account";
import { getPaymentDetails, getPaymentsPaid } from "./billing";
import { getTickets, upsertTicket, deleteTicket } from "./ticket";
import {
  getQuickReportSummary,
  getDataInstall,
  getAllMerchants,
  getCommissionReport,
} from "./reports";
import { getDocuments } from "./document";
import { getCommissions } from "./commission";

import { createaccount } from "./signup";


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

  getTickets,
  upsertTicket,
  deleteTicket,


  createaccount,
  getQuickReportSummary,
  getDataInstall,
  getAllMerchants,
  getCommissionReport,

  getDocuments,
  getCommissions,

});
