import React, { useContext, useState } from "react";
import type { ReactNode } from "react";
import { createContext } from "react";
import type {
  Control,
  DeepPartial,
  UseControllerReturn,
} from "react-hook-form";
import { useController } from "react-hook-form";
import { printUseEnumWarning } from "./logging";
import { errorFromRhfErrorObject } from "./zodObjectErrors";
import { MetaInfo, ZodMetaDataItem } from "../../../utils/zod-meta";
import { TranslationFn } from "../../../utils/i18n-utils";
import { WizardControlProps } from "@/components/common/wizard/useWizardFlow";

export interface FormContext {
  t: TranslationFn;

  formMeta: MetaInfo;

  flowContext?: WizardControlProps;
}

export const FieldContext = createContext<null | {
  control: Control<any>;
  name: string;
  // label?: string;
  // placeholder?: string;
  formContext: FormContext;
  meta: ZodMetaDataItem;
  enumValues?: string[];
  addToCoerceUndefined: (v: string) => void;
  removeFromCoerceUndefined: (v: string) => void;
}>(null);

export function FieldContextProvider({
  name,
  control,
  children,
  formContext,
  meta,
  // label,
  // placeholder,
  enumValues,
  addToCoerceUndefined,
  removeFromCoerceUndefined,
}: {
  name: string;
  control: Control<any>;
  formContext: FormContext;
  meta: ZodMetaDataItem;
  // label?: string;
  // placeholder?: string;
  enumValues?: string[];
  children: ReactNode;
  addToCoerceUndefined: (v: string) => void;
  removeFromCoerceUndefined: (v: string) => void;
}) {
  return (
    <FieldContext.Provider
      value={{
        control,
        name,
        // label,
        // placeholder,
        formContext,
        meta,
        enumValues,
        addToCoerceUndefined,
        removeFromCoerceUndefined,
      }}
    >
      {children}
    </FieldContext.Provider>
  );
}

function useContextProt(name: string) {
  const context = useContext(FieldContext);
  if (!context)
    throw Error(
      `${name} must be called from within a FieldContextProvider... if you use this hook, the component must be rendered by @ts-react/form.`
    );
  return context;
}

/**
 * Allows working accessing and updating the form state for a field. Returns everything that a vanilla `react-hook-form` returns
 * `useController` call returns but with additional typesafety. Additionally, returns an `errors` object that provides a typesafe way
 * of dealing with nested react hook form errors.
 * @example
 * const {field: {onChange, value}, errors} = useTsController<string>()
 *
 * return (
 *  <>
 *    <input
 *      value={value}
 *      onChange={(e)=>onChange(e.target.value)}
 *    />
 *    {errors?.errorMessage && <span>{errors.errorMessage}</span>}
 *  </>
 * )
 */
export function useTsController<FieldType extends any>() {
  const context = useContextProt("useTsController");
  type IsObj = FieldType extends Object ? true : false;
  type OnChangeValue = IsObj extends true
    ? DeepPartial<FieldType> | undefined
    : FieldType | undefined;
  // Just gives better types to useController
  const controller = useController(context) as any as Omit<
    UseControllerReturn,
    "field"
  > & {
    field: Omit<UseControllerReturn["field"], "value" | "onChange"> & {
      value: FieldType | undefined;
      onChange: (value: OnChangeValue) => void;
    };
  };

  // console.log(`muly:useTsController`, { controller });

  const {
    fieldState,
    field: { onChange },
  } = controller;
  const [isUndefined, setIsUndefined] = useState(false);

  function _onChange(value: OnChangeValue) {
    if (value === undefined) {
      setIsUndefined(true);
      context.addToCoerceUndefined(context.name);
    } else {
      setIsUndefined(false);
      context.removeFromCoerceUndefined(context.name);
      onChange(value);
    }
  }
  return {
    formContext: context.formContext,
    ...controller,
    error: errorFromRhfErrorObject<FieldType>(fieldState.error),
    field: {
      ...controller.field,
      value: isUndefined ? undefined : controller.field.value,
      onChange: _onChange,
    },
  };
}

export function requiredDescriptionDataNotPassedError(
  name: string,
  hookName: string
) {
  return `No ${name} found when calling ${hookName}. Either pass it as a prop or pass it using the zod .describe() syntax.`;
}

/**
 * Gets the description `{label: string, placeholder: string}` for the field. Will return the description created via the zod .describe syntax.
 * description properties are optional, if you want to them to be required and throw an error when not passed, you may enjoy `useReqDescription()`;
 * @example
 * ```tsx
 * const {label, placeholder} = useDescription();
 *
 * return (
 *  <>
 *    <label>{label?label:'No label'}</label>}
 *    <input
 *      //...
 *
 *      placeholder={placeholder?placeholder:'No placeholder passed'}
 *    />
 *  </>
 * )
 * ```
 * @returns `{label: string, placeholder: string}`
 */
export function useMeta(): ZodMetaDataItem {
  const { meta } = useContextProt("useReqDescription");
  return meta;
}

/**
 * Gets the description `{label: string, placeholder: string}` for the field. Throws an error if no label or placeholder is found.
 * If you don't want the error to throw, you may enjoy the `useDescription()` hook.
 * @example
 * ```tsx
 * const {label, placeholder} = useReqDescription();
 *
 * return (
 *  <>
 *    <label>{label}</label>}
 *    <input
 *      //...
 *
 *      placeholder={placeholder?placeholder:'No placeholder passed'}
 *    />
 *  </>
 * )
 * ```
 * @returns `{label: string, placeholder: string}`
 */
export function useReqDescription() {
  const { meta } = useContextProt("useReqDescription");
  if (!meta) {
    throw new Error(
      requiredDescriptionDataNotPassedError("label", "useReqDescription")
    );
  }
  // if (!placeholder) {
  //   throw new Error(
  //     requiredDescriptionDataNotPassedError("placeholder", "useReqDescription")
  //   );
  // }
  return meta;
}

export function enumValuesNotPassedError() {
  return `Enum values not passed. Any component that calls useEnumValues should be rendered from an '.enum()' zod field.`;
}

/**
 * Gets an enum fields values. Throws an error if there are no enum values found (IE you mapped a z.string() to a component
 * that calls this hook).
 *
 * @example
 * ```tsx
 * const options = useEnumValues();
 *
 * return (
 *  <select>
 *    {options.map(e=>(
 *      <option
 *        value={e}
 *      >
 *        {titleCase(e)}
 *      </option>
 *    ))}
 *  </select>
 * )
 * ```
 */
export function useEnumValues() {
  const { enumValues } = useContextProt("useEnumValues");
  printUseEnumWarning();
  if (!enumValues) throw new Error(enumValuesNotPassedError());
  return enumValues;
}
