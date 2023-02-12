import { Flex } from "@chakra-ui/react";
import { api } from "../../../utils/api";
import { Form } from "../../common/forms/Form";
import type { z } from "zod";
import { loginAccount } from "../../../server/api/routers/affiliates/account";
import { schema } from "../../../shared-types/forms/login";
import { getCsrfToken, signIn, useSession } from "next-auth/react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useState } from "react";
import { castError } from "../../../utils/errors";
// Sample user
// user001
// password user1

export const FormSignin = () => {
  const [loginError, setLoginError] = useState<string | null>(null);
  const { data: session } = useSession();

  const handleSubmit = async (values: z.infer<typeof schema>) => {
    const callbackUrl = "/";

    await signIn("credentials", {
      username: values.username,
      password: values.password,
      redirect: false,
      callbackUrl,
    });
  };

  console.log(`muly:FormSignin`, { session });

  return (
    <>
      <Form
        schema={schema}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit}
        formProps={{ submitButtonText: "LOGIN", submitNotification: false }}
      ></Form>

      {!!loginError && (
        <Alert status="error" mt={8} maxW="md">
          <AlertIcon />
          {loginError}
        </Alert>
      )}
    </>
  );
};
