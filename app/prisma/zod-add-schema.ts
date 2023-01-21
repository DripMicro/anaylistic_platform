import * as z from "zod";

// Place to define custom zod types
// for now empty/not used

export const optionalUuidSchema = z
  .string()
  .uuid()
  .or(z.literal(""))
  .nullish()
  .optional()
  .transform((e) => (e === "" ? undefined : e));
