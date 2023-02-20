import { z } from "zod";

export const schema = z.object({
  merchant_id: z.any().describe("Merchant // Select Merchant"),
  type: z.string().describe("Trigger // Select Trigger"),
  pixelCode: z.string().describe("Pixel Code"),
  method: z.string().describe("Method // Select Method"),
});
