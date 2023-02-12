import { Box, Flex, Link, Stack, Text } from "@chakra-ui/react";
import { Form } from "../../common/forms/Form";
import type { z } from "zod";
import { schema } from "../../../shared-types/forms/login";
import { signIn, useSession } from "next-auth/react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useState } from "react";
import NextLink from "next/link";

// Sample user
// user001
// password user1

export const FormSignin = () => {
  const [loginError, setLoginError] = useState<string | null>(null);
  const { data: session } = useSession();

  const handleSubmit = async (values: z.infer<typeof schema>) => {
    const callbackUrl = "/";
    setLoginError(null);

    const answer = await signIn("credentials", {
      username: values.username,
      password: values.password,
      redirect: false,
      callbackUrl,
    });

    console.log(`muly:handleSubmit`, { answer });

    if (answer && !answer.ok && answer.error) {
      console.error(`authorize ERROR: ${answer.error}`);
      setLoginError(answer.error);
    }
  };

  console.log(`muly:FormSignin`, { session });

  return (
    <Stack gap={8} maxW="md">
      <Form
        schema={schema}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit}
        formProps={{ submitButtonText: "LOGIN", submitNotification: false }}
      ></Form>

      <Link as={NextLink} href="/affiliates/lost-password">
        <Text>Forgot your Username or Password?</Text>
      </Link>

      {!!loginError && (
        <Alert status="error">
          <AlertIcon />
          {loginError}
        </Alert>
      )}
    </Stack>
  );
};
