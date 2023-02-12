import { Flex } from "@chakra-ui/react";
import { api } from "../../../utils/api";
import { Form } from "../../common/forms/Form";
import type { z } from "zod";
import { loginAccount } from "../../../server/api/routers/affiliates/account";
import { schema } from "../../../shared-types/forms/login";

export const FormSignin = () => {
  const loginAccount = api.affiliates.loginAccount.useMutation();
  const handleSubmit = async (values: z.infer<typeof schema>) => {
    await loginAccount.mutateAsync(values);
  };

  return (
    <Form
      schema={schema}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit}
    ></Form>
  );
};
