import React from "react";
import { Stack, Heading } from "@chakra-ui/react";
import { StepperForm } from "../../common/forms/StepperForm";
import { z } from "zod";

const schema = z.object({
  merchant_id: z.any().describe("Select Merchants // Select Merchants"),
});

interface Props {
  stepCount: number;
  activeStep: number;
  values: object;
  merchants: any;
  onNext: (values: z.infer<typeof schema>) => void;
  onPrevious: () => void;
}

export const PixelTypeForm = ({
  stepCount,
  activeStep,
  values,
  merchants,
  onNext,
  onPrevious,
}: Props) => {
  return (
    <Stack m={12} gap={2}>
      <Heading as="h6" size="xs">
        Step 1: Select Pixel Type
      </Heading>
      <StepperForm
        schema={schema}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={onNext}
        formProps={{
          stepCount: stepCount,
          activeStep: activeStep,
          onPrevious: onPrevious,
          submitNotification: false,
        }}
        props={{
          merchant_id: {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            choices: merchants,
          },
        }}
        defaultValues={values}
      ></StepperForm>
    </Stack>
  );
};
