import React from "react";
import { Stack, Heading } from "@chakra-ui/react";
import { StepperForm } from "../../common/forms/StepperForm";
import { z } from "zod";
import { callAsync } from "../../../utils/call-async";

const schema = z.object({
  method: z.string().describe("Select Method // Select Method"),
});

interface Props {
  stepCount: number;
  activeStep: number;
  values: object;
  method: any;
  onNext: (values: z.infer<typeof schema>) => void;
  onPrevious: () => void;
}

export const MethodForm = ({
  stepCount,
  activeStep,
  values,
  method,
  onNext,
  onPrevious,
}: Props) => {
  return (
    <Stack m={12} gap={2}>
      <Heading as="h6" size="xs">
        Step 4: Select Method
      </Heading>
      <StepperForm
        schema={schema}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={onNext}
        formProps={{
          stepCount,
          activeStep,
          onPrevious,
          submitNotification: false,
        }}
        props={{
          method: {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            choices: method,
          },
        }}
        defaultValues={values}
      ></StepperForm>
    </Stack>
  );
};
