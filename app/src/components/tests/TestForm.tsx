import { Flex } from "@chakra-ui/react";
import { Form } from "../common/forms/Form";
import { z } from "zod";
import { GridColumnHeader } from "../common/forms/GridColumnHeader";
import { pause } from "../../utils/pause";

const schema = z.object({
  firstname: z.string().describe("First Name"),
});

export const TestForm = () => {
  const handleSubmit = async (values: z.infer<typeof schema>) => {
    console.log(`muly:handleSubmit`, { values });
    await pause(2000);
  };

  return (
    <Flex direction="column" gap={2} maxW="4xl" width="100%" m="auto">
      <Form
        schema={schema}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit}
      ></Form>
    </Flex>
  );
};
