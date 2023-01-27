import { useDescription, useTsController } from "../../libs/react-ts-form";
import {
  Input,
  Select,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Switch,
  Checkbox,
  Textarea,
} from "@chakra-ui/react";
import { RadioButtonGroup } from "./RadioButtonGroup";
import { CheckboxGroup } from "./CheckboxGroup";

export type ChoiceType = string | { id: number | string; title: string };

interface Props {
  choices?: ChoiceType[];
  type?: string;

  controlName?:
    | "Textarea"
    | "RadioGroup"
    | "Checkbox"
    | "Switch"
    | "CheckboxGroup";
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

  console.log(`muly:TextField ${field.name} value:${field.value || ""}`, {
    field,
  });

  let control;
  if (!choices) {
    if (controlName === "Textarea") {
      control = (
        <Textarea
          maxW="sm"
          minH={32}
          name={field.name}
          placeholder={placeholder}
          value={field.value ? field.value + "" : ""}
          onChange={(e) => {
            field.onChange(e.target.value);
          }}
        />
      );
    } else {
      control = (
        <Input
          maxW="sm"
          name={field.name}
          type={type || undefined}
          placeholder={placeholder}
          value={field.value ? field.value + "" : ""}
          onChange={(e) => {
            field.onChange(e.target.value);
          }}
        />
      );
    }
  } else if (controlName === "Checkbox") {
    const [valueFalse, valueTrue] =
      typeof choices[0] === "string" ? choices : [false, true];

    control = (
      <Checkbox
        name={field.name}
        isChecked={field.value == valueTrue}
        onChange={(e) => {
          field.onChange(
            e.target.checked ? String(valueTrue) : String(valueFalse)
          );
        }}
      >
        {label}
      </Checkbox>
    );
  } else if (controlName === "Switch") {
    const [valueFalse, valueTrue] =
      typeof choices[0] === "string" ? choices : [false, true];

    control = (
      <Switch
        name={field.name}
        isChecked={field.value == valueTrue}
        onChange={(e) => {
          field.onChange(
            e.target.checked ? String(valueTrue) : String(valueFalse)
          );
        }}
      >
        {label}
      </Switch>
    );
  } else if (controlName === "CheckboxGroup") {
    control = (
      <CheckboxGroup
        value={(field.value || "").split(",")}
        choices={choices}
        onChange={(value) => {
          console.log(`muly:onCjange`, { value });
          field.onChange(value.join(","));
        }}
      />
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
        maxW="sm"
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
    <FormControl isInvalid={!!error} my={5}>
      {controlName !== "Checkbox" && controlName !== "Switch" && (
        <FormLabel mb={1}>{label}</FormLabel>
      )}
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
