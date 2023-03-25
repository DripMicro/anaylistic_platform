import { Form } from "@/components/common/forms/Form";
import { usePrepareSchema } from "@/components/common/forms/usePrepareSchema";
import { t } from "../../../../.storybook/stories-utils";
import { z } from "zod";
import { FormTest } from "./form-test";

const meta = {
  component: FormTest,
};

export default meta;

export const TextField = {
  ...FormTest,
  args: {
    schema: z.object({
      first_name: z.string().describe("First Name // place holder..."),
    }),
  },
};

export const NumberField = {
  ...FormTest,
  args: {
    schema: z.object({
      count: z.coerce
        .number()
        .min(0)
        .max(5)
        .describe("Count // Number from 0 to 5..."),
    }),
  },
};

export const Textarea = {
  ...FormTest,
  args: {
    schema: z.object({
      text: z
        .string()
        .describe("Label // Place holder...")
        .meta({ control: "Textarea" }),
    }),
  },
};

export const File = {
  ...FormTest,
  args: {
    schema: z.object({
      text: z
        .string()
        .describe("Label // Place holder...")
        .meta({ control: "File" }),
    }),
  },
};

export const CheckboxString = {
  ...FormTest,
  args: {
    schema: z.object({
      text: z
        .string()
        .describe("Checkbox as string")
        .meta({
          control: "Checkbox",
          choices: [
            { id: "male", title: "Male" },
            { id: "female", title: "Female" },
          ],
        }),
    }),
  },
};

export const SwitchString = {
  ...FormTest,
  args: {
    schema: z.object({
      text: z
        .string()
        .describe("Switch as string")
        .meta({
          control: "Switch",
          choices: [
            { id: "male", title: "Male" },
            { id: "female", title: "Female" },
          ],
        }),
    }),
  },
};

export const RadioGroupString = {
  ...FormTest,
  args: {
    schema: z.object({
      text: z
        .string()
        .describe("RadioGroup")
        .meta({
          control: "RadioGroup",
          choices: [
            { id: "male", title: "Male" },
            { id: "female", title: "Female" },
            { id: "na", title: "N/A" },
          ],
        }),
    }),
  },
};

export const Select = {
  ...FormTest,
  args: {
    schema: z.object({
      text: z
        .string()
        .describe("Select")
        .meta({
          choices: [
            { id: "male", title: "Male" },
            { id: "female", title: "Female" },
            { id: "na", title: "N/A" },
          ],
        }),
    }),
  },
};

export const CheckboxBoolean = {
  ...FormTest,
  args: {
    schema: z.object({
      bool: z.boolean().describe("Boolean"),
    }),
  },
};

export const SwitchBoolean = {
  ...FormTest,
  args: {
    schema: z.object({
      bool: z.boolean().describe("Boolean").meta({ control: "Switch" }),
    }),
  },
};

export const CheckboxDate = {
  ...FormTest,
  args: {
    schema: z.object({
      date: z.date().describe("Date").meta({ control: "Checkbox" }),
    }),
  },
};

export const Date = {
  ...FormTest,
  args: {
    schema: z.object({
      date: z.date().describe("Date"),
    }),
  },
};
