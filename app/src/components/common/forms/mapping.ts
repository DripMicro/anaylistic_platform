import { z } from "zod";
import { TextField } from "./TextField";

export const mapping = [
  [z.string(), TextField],
  [z.enum([""]), TextField],
  [z.number(), TextField],
] as const;
