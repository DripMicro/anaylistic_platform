import { createTRPCRouter } from "../../trpc";
import { getAccount, updateAccount } from "./account";
import { getPaymentDetails, getPaymentsPaid } from "./billing";
import { getCommissions } from "./commission";
import { getMerchantCreative, getMerchantCreativeMeta } from "./creative";
import { getDocuments } from "./document";
import { deleteProfile, getProfiles, upsertProfile } from "./profile";
import { getAllMerchants, getClicksReport, getCommissionReport, getInstallReport, getQuickReportSummary } from "./reports";
import { getMerchantSubCreative, getMerchantSubCreativeMeta } from "./sub";
import { deleteTicket, getTickets, upsertTicket } from "./ticket";

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

  getQuickReportSummary,
  getInstallReport,
  getAllMerchants,
  getCommissionReport,
  getClicksReport,
  getDocuments,
  getCommissions,
});
