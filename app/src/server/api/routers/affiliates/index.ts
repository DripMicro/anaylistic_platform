import { createTRPCRouter } from "../../trpc";
import {
  getDashboard,
  getTopMerchantCreative,
  getPerformanceChart,
  getConversionChart,
  getCountryReport,
} from "./dashboard";
import {
  getAccount,
  recoverPassword,
  registerAccount,
  updateAccount,
} from "./account";
import { getPaymentDetails, getPaymentsPaid } from "./billing";
import { getMerchantCreative, getMerchantCreativeMeta } from "./creative";
import { deleteProfile, getProfiles, upsertProfile } from "./profile";
import { getMerchantSubCreative, getMerchantSubCreativeMeta } from "./sub";
import { deleteTicket, getTickets, upsertTicket } from "./ticket";

import { getCommissions } from "./commission";
import { getDocuments } from "./document";
import {
  getAllMerchants,
  getClicksReport,
  getCommissionReport,
  getInstallReport,
  getQuickReportSummary,
} from "./reports";

export const affiliatesRouter = createTRPCRouter({
  getDashboard,
  getTopMerchantCreative,
  getPerformanceChart,
  getConversionChart,
  getCountryReport,

  getMerchantCreativeMeta,
  getMerchantCreative,

  getMerchantSubCreativeMeta,
  getMerchantSubCreative,

  getProfiles,
  upsertProfile,
  deleteProfile,

  getAccount,
  updateAccount,
  registerAccount,
  recoverPassword,

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
