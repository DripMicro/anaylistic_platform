import { createTRPCRouter } from "../../trpc";
import { getCountries } from "./countries";
import { getLanguages } from "./languages";
import { getSystemInfo } from "./system";

export const miscRouter = createTRPCRouter({
  getCountries,
  getLanguages,
  getSystemInfo,
});
