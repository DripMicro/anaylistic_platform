import { createTRPCRouter } from "../../trpc";
import { getCountries } from "./countries";
import { getLanguages } from "./languages";

export const miscRouter = createTRPCRouter({
  getCountries,
  getLanguages,
});
