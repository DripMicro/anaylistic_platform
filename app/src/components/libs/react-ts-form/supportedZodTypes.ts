import type {
  ZodArray,
  ZodAny,
  ZodBoolean,
  ZodBranded,
  ZodDate,
  ZodDiscriminatedUnion,
  ZodEnum,
  ZodMap,
  ZodNullable,
  ZodNumber,
  ZodObject,
  ZodOptional,
  ZodRecord,
  ZodSet,
  ZodString,
  ZodTuple,
  ZodEffects,
} from "zod";
import { ZodNativeEnum } from "zod";

/**
 * Reducing this helps with TS performance
 */
export type RTFBaseZodType =
  | ZodString
  | ZodNumber
  | ZodBoolean
  | ZodAny
  | ZodDate
  | ZodArray<any, any>
  | ZodObject<any, any, any, any, any>
  | ZodDiscriminatedUnion<any, any>
  | ZodTuple<any, any>
  | ZodRecord<any, any>
  | ZodMap<any>
  | ZodSet<any>
  | ZodEnum<any>
  | ZodNativeEnum<any>
  | ZodBranded<any, any>
  | ZodEffects<any, any>;

export type RTFSupportedZodTypes =
  | RTFBaseZodType
  | ZodOptional<any>
  | ZodNullable<any>;
