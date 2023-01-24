import { createTRPCRouter } from "../../trpc";
import { getCountries } from "./countries";

export const miscRouter = createTRPCRouter({
  getCountries,
});
