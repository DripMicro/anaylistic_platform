import { z } from "zod";
import { TextField } from "./TextField";

const enum_like = {
  sample: "sample",
};

export const mapping = [
  [z.string(), TextField],
  [z.enum([""]), TextField],
  [z.number(), TextField],
  [z.nativeEnum(enum_like), TextField],
] as const;
