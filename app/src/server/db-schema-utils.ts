import type { ZodType } from "zod/lib/types";
import { z } from "zod";
import type { ZodNumber, ZodString } from "zod/lib/types";

export const SelectSchema = (zt: ZodNumber | ZodString) =>
  z.array(z.object({ id: zt, title: z.string() }));
