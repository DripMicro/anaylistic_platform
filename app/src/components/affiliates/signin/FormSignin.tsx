import { Flex } from "@chakra-ui/react";
import { api } from "../../../utils/api";
import { Form } from "../../common/forms/Form";
import { z } from "zod";
const Schema = z.object({
  username: z.string().optional().describe("User Name"),
  password: z.string().optional().describe("Password"),
  });

export const FormSignin = () => {
  const loginaccount = api.affiliates.loginaccount.useMutation();
  const handleSubmit = async (values: z.infer<typeof Schema>) => {
    await loginaccount.mutateAsync(values);
  };



  return (

    <Form
      schema={Schema}
      onSubmit={handleSubmit}
    ></Form>

  );
};