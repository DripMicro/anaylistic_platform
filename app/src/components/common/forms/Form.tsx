import { createTsForm } from "@ts-react/form";
import { mapping } from "./mapping";
import type { FormEventHandler } from "react";
import React from "react";
import { Button, Stack } from "@chakra-ui/react";

interface Props {
  onSubmit: FormEventHandler;
  children: React.ReactNode;
}

const CommonForm = ({ onSubmit, children }: Props) => {
  return (
    <form onSubmit={onSubmit} noValidate>
      <Stack gap={4} my={8} maxW="md">
        {children}
        <Button type="submit" variant="solid">
          SAVE
        </Button>
      </Stack>
    </form>
  );
};

// don't need this
const propsMap = [["enumValues", "enumValuesXXX"] as const] as const;

export const Form = createTsForm(mapping, {
  FormComponent: CommonForm,
  // propsMap,
});
