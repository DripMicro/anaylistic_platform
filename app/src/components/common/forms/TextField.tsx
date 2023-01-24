import { useDescription, useTsController } from "@ts-react/form";
import {
  Input,
  Select,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Checkbox,
} from "@chakra-ui/react";
import { RadioButtonGroup } from "./RadioButtonGroup";

export type ChoiceType = string | { id: number | string; title: string };

interface Props {
  choices?: ChoiceType[];
  type?: string;

  controlName?: "RadioGroup" | "Checkbox";
}

export const TextField = (
  // props: Omit<InputHTMLAttributes<HTMLInputElement>, "name" | "value"> & {
  //   // label?: string;
  //   enumValues?: string[];
  // }
  { type, choices, controlName }: Props
) => {
  const { field, error } = useTsController<string>();
  const { label, placeholder } = useDescription();

  console.log(`muly:TextField ${field.name}`, { choices: choices });

  let control;
  if (!choices) {
    control = (
      <Input
        name={field.name}
        type={type || undefined}
        placeholder={placeholder}
        value={field.value ? field.value + "" : ""}
        onChange={(e) => {
          field.onChange(e.target.value);
        }}
      />
    );
  } else if (controlName === "Checkbox") {
    const [valueFalse, valueTrue] =
      typeof choices[0] === "string" ? choices : [false, true];

    control = (
      <Checkbox
        name={field.name}
        value={field.value}
        onChange={(e) => {
          field.onChange(
            e.target.checked ? String(valueTrue) : String(valueFalse)
          );
        }}
      >
        {label}
      </Checkbox>
    );
  } else if (controlName === "RadioGroup") {
    control = (
      <RadioButtonGroup
        name={field.name}
        value={field.value ? field.value + "" : ""}
        choices={choices}
        onChange={(value) => {
          field.onChange(value);
        }}
      />
    );
  } else {
    control = (
      <Select
        name={field.name}
        placeholder={placeholder}
        value={field.value ? field.value + "" : ""}
        onChange={(e) => {
          field.onChange(e.target.value);
        }}
      >
        {choices.map((choice, idx) => {
          const { id, title } =
            typeof choice === "string" ? { id: choice, title: choice } : choice;
          return (
            <option key={idx} value={id}>
              {title}
            </option>
          );
        })}
      </Select>
    );
  }

  return (
    <FormControl isInvalid={!!error}>
      {controlName !== "Checkbox" && <FormLabel>{label}</FormLabel>}
      {control}
      {!error ? null : (
        // <FormHelperText>
        //   Enter the email you'd like to receive the newsletter on.
        // </FormHelperText>
        <FormErrorMessage>{error?.errorMessage}</FormErrorMessage>
      )}
    </FormControl>
  );
};
