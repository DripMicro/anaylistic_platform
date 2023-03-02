import { Heading, Stack } from "@chakra-ui/react";
import { z } from "zod";
import { StepperForm } from "../../common/forms/StepperForm";

const schema = z.object({
  merchant_id: z.any().describe("Select Merchants // Select Merchants"),
  creative: z
    .string()
    .optional()
    .describe(
      "What creative you would like to relate this pixel to // All Creatives"
    ),
});

interface Props {
  stepCount: number;
  activeStep: number;
  values: object;
  merchants: any;
  merchant_creative: any;
  onNext: (values: z.infer<typeof schema>) => void;
  onPrevious: () => void;
}

export const PixelTypeForm = ({
  stepCount,
  activeStep,
  values,
  merchants,
  merchant_creative,
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
          creative: {
            choices: merchant_creative,
          },
        }}
        defaultValues={values}
      ></StepperForm>
    </Stack>
  );
};
