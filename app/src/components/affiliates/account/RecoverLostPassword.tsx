import { Box, Flex, Link, Stack, Text } from "@chakra-ui/react";
import { api } from "../../../utils/api";
import { FormLostPassword } from "../../common/forms/FormLostPassword";
import type { z } from "zod";
import { schema } from "../../../shared-types/forms/lost-password";

export const RecoverLostPassword = () => {
  const mutation = api.affiliates.recoverPassword.useMutation();
  const handleSubmit = async (values: z.infer<typeof schema>) => {
    await mutation.mutateAsync(values);
  };

  return (
    <FormLostPassword
      schema={schema}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit}
      formProps={{
        submitButtonText: "Reset Password",
        submitNotification: false,
      }}
    />
  );
};
