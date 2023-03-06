import { Heading, Stack } from "@chakra-ui/react";
import { z } from "zod";
import { StepperForm } from "../../common/forms/StepperForm";

const schema = z.object({
  type: z
    .enum(["lead", "account", "sale", "qftd"])
    .describe("Select Trigger // Select Trigger"),
});

interface Props {
  stepCount: number;
  activeStep: number;
  values: object;
  type: any;
  onNext: (values: z.infer<typeof schema>) => void;
  onPrevious: () => void;
}

export const TriggerForm = ({
  stepCount,
  activeStep,
  values,
  type,
  onNext,
  onPrevious,
}: Props) => {
  return (
    <Stack m={12} gap={2}>
      <Heading as="h6" size="xs">
        Step 2: Trigger
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
          type: {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            choices: type,
          },
        }}
        defaultValues={values}
      ></StepperForm>
    </Stack>
  );
};
