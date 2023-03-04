import * as z from "zod";
import { publicProcedure } from "../../trpc";
import { affiliate_id, merchant_id } from "../affiliates/const";
import { TRPCError } from "@trpc/server";
import { castError } from "../../../../utils/errors";
import * as Sentry from "@sentry/nextjs";
import { Extra } from "@sentry/types";
import { Hub } from "@sentry/core/types/hub";
import { captureException } from "@sentry/core/types/exports";

export interface AdminCommandAnswer {
  message: string;
  results?: any;
}

export const executeAdminCommand = async (
  cmd: string,
  data: any
): Promise<AdminCommandAnswer> => {
  if (cmd === "system-info") {
    return Promise.resolve({
      message: "system-info",
      results: {
        affiliate_id,
        merchant_id,
        env: process.env,
      },
    });
  } else if (cmd === "simulateErrorEvent") {
    throw new Error("simulateErrorEvent");
  } else if (cmd === "ping") {
    return Promise.resolve({ message: "pong" });
  } else {
    return Promise.resolve({ message: "Command not found" });
  }
};

export const runAdminCommand = publicProcedure
  .input(
    z.object({
      cmd: z.string(),
      secret: z.string().optional(),
      data: z.any().optional(),
    })
  )
  .output(z.object({ message: z.string(), results: z.any() }))
  .mutation(async ({ ctx, input: { cmd, secret, data } }) => {
    if (
      secret !== process.env.LEGACY_PHP_ACCESS_TOKEN // &&
      // !ctx?.user?.email?.endsWith("@orderio.me")
    ) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }
    try {
      const start = Date.now();
      const answer = await executeAdminCommand(cmd, data);
      const message = `admin-command [${cmd}]: ${answer?.message} ${
        (Date.now() - start) / 1000
      }sec`;

      Sentry.setExtra("data", data);
      Sentry.captureMessage(message);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      console.log(message, { data, answer });
      return {
        message,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        results: answer.results,
      };
    } catch (_err) {
      const err = castError(_err);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      Sentry.setExtras({ cmd, data });
      Sentry.captureException(_err);
      console.error(`executeAdminCommand`, { err: err.stack });
      return {
        message: `Error executeAdminCommand ${err.message}`,
        results: err.stack,
      };
    }
  });

export const simulateServerError = publicProcedure.mutation(
  ({ ctx, input }) => {
    throw new Error("simualateServerError");
  }
);
