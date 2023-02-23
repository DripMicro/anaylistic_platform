import { createTsForm } from "../../libs/react-ts-form";
import { mapping } from "./mapping";
import type { FormEvent } from "react";
import React from "react";
import { Button, Stack, Flex } from "@chakra-ui/react";
import type { GridProps } from "@chakra-ui/layout/dist/grid";
import { FormLayout } from "./FormLayout";
import { useSubmitAction } from "./useSubmitAction";

export interface CommonFormProps {
  onSubmit: (values: unknown) => Promise<void>;
  children: React.ReactNode;

  onPrevious?: () => void;
  grid?: GridProps;
  stepCount?: number;
  activeStep?: number;
  submitButtonText?: string;
  submitNotification?: boolean;
}

const CommonForm = ({
  onSubmit,
  children,
  onPrevious,
  grid,
  stepCount,
  activeStep,
  submitButtonText,
  submitNotification = true,
}: CommonFormProps) => {
  const { handleSubmit, isLoading } = useSubmitAction({
    onSubmit,
    submitNotification,
  });
  console.log("stepCount:", stepCount);
  console.log("activeStep:", activeStep);
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
        {activeStep === stepCount ? (
          <Flex p={4}>
            <Button mx="auto" size="sm">
              Reset
            </Button>
          </Flex>
        ) : (
          <Flex width="100%" justify="flex-start">
            <Button
              minW={36}
              isDisabled={activeStep === 0}
              onClick={onPrevious}
              mr={4}
              size="md"
              variant="ghost"
            >
              Prev
            </Button>
            <Button
              size="md"
              minW={36}
              type="submit"
              variant="solid"
              isLoading={isLoading}
            >
              {stepCount && activeStep
                ? activeStep === stepCount - 1
                  ? "Finish"
                  : "Next"
                : "Next"}
            </Button>
          </Flex>
        )}
        {/* <Button
          minW={36}
          type="submit"
          variant="solid"
          isLoading={isLoading}
          alignSelf="start"
        >
          {submitButtonText ? submitButtonText : "SAVE"}
        </Button> */}
      </Stack>
    </form>
  );
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const StepperForm = createTsForm(mapping, {
  FormComponent: CommonForm,
});
