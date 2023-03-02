import { publicProcedure } from "../../trpc";
import { affiliate_id, merchant_id } from "../affiliates/const";

export const getSystemInfo = publicProcedure.query(({ ctx }) => {
  console.log(`getSystemInfo`, {
    affiliate_id,
    merchant_id,
    env: process.env,
  });

  return {
    affiliate_id,
    merchant_id,
    env: process.env,
  };
});
