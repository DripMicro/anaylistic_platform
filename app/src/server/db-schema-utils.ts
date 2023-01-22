import type { ZodType } from "zod/lib/types";
import { z } from "zod";

export const SelectSchema = (zt: ZodType) =>
  z.array(z.object({ id: zt, title: z.string() }));
