import { createTsForm } from "../../libs/react-ts-form";
import { mapping } from "./mapping";
import type { FormEvent } from "react";
import React from "react";
import { Button, Stack } from "@chakra-ui/react";
import type { GridProps } from "@chakra-ui/react";
import { FormLayout } from "./FormLayout";
import { useSubmitAction } from "./useSubmitAction";

export interface CommonFormProps {
  onSubmit: (values: unknown) => Promise<void>;
  children: React.ReactNode;

  grid?: GridProps;

  submitButtonText?: string;
  submitNotification?: boolean;
}

const CommonForm = ({
  onSubmit,
  children,
  grid,
  submitButtonText,
  submitNotification = true,
}: CommonFormProps) => {
  const { handleSubmit, isLoading } = useSubmitAction({
    onSubmit,
    submitNotification,
  });

  return (
    <form
      onSubmit={(e: FormEvent) => {
        e.preventDefault();
        void handleSubmit(e);
      }}
      noValidate
    >
      <Stack>
        <FormLayout grid={grid}>{children}</FormLayout>
        <Button
          minW={36}
          type="submit"
          variant="solid"
          isLoading={isLoading}
          alignSelf="start"
        >
          {submitButtonText ? submitButtonText : "SAVE"}
        </Button>
      </Stack>
    </form>
  );
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const Form = createTsForm(mapping, {
  FormComponent: CommonForm,
});
