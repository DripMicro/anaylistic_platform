import { z } from "zod";

export const schema = z.object({
  company: z.string().optional().describe("Company Name"),
  gender: z
    .enum(["EMPTY_ENUM_VALUE", "male", "female"])
    .optional()
    .describe("Salutation"),
  first_name: z.string().optional().describe("First Name"),
  last_name: z.string().optional().describe("Last Name"),
  mail: z.string().email().optional().describe("Email"),
  phone: z.string().optional().describe("Phone Number"),
  IMUserType: z
    .string()
    .optional()
    .describe("Instant Message Type // Choose IM Type"),
  IMUser: z.string().optional().describe("Instant Message Account"),
});
