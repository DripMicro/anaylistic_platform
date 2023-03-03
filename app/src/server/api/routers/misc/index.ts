import { createTRPCRouter } from "../../trpc";
import { getCountries } from "./countries";
import { getLanguages } from "./languages";
import { runAdminCommand, simulateServerError } from "./system";

export const miscRouter = createTRPCRouter({
  getCountries,
  getLanguages,
  runAdminCommand,
  simulateServerError,
});
