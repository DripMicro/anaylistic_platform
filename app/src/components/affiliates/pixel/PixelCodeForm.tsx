import React from "react";
import { Stack, Heading } from "@chakra-ui/react";
import { StepperForm } from "../../common/forms/StepperForm";
import { z } from "zod";

const schema = z.object({
  pixelCode: z.string().describe("Pixel Code"),
});

interface Props {
  stepCount: number;
  activeStep: number;
  values: object;
  onNext: (values: z.infer<typeof schema>) => void;
  onPrevious: () => void;
}

export const PixelCodeForm = ({
  stepCount,
  activeStep,
  values,
  onNext,
  onPrevious,
}: Props) => {
  return (
    <Stack m={12} gap={2}>
      <Heading as="h6" size="xs">
        Step 3: Create Pixel Code
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
          pixelCode: {
            controlName: "Textarea",
          },
        }}
        defaultValues={values}
      ></StepperForm>
    </Stack>
  );
};
