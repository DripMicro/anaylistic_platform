import type { AffiliateAccountType } from "../../../server/db-types";
import { Flex } from "@chakra-ui/react";
import { z } from "zod";
import { Form } from "../../common/forms/Form";

const Schema = z
  .object({
    username: z.string().describe("Username"),
    password: z.string().optional().describe("Password"),
    passwordRepeat: z.string().optional().describe("Repeat Password"),
    newsletter: z.coerce
      .number()
      .min(0)
      .max(1)
      .describe("Yes, I would like to receive the Affiliate newsletter"),
  })
  .refine(
    ({ passwordRepeat, password }) => {
      return (password || "") === (passwordRepeat || "");
    },
    {
      message: "Passwords do not match. Please re-enter your passwords.",
      path: ["passwordRepeat"],
    }
  );

interface Props {
  onSubmit: (values: z.infer<typeof Schema>) => Promise<void>;
  account: AffiliateAccountType;
}

export const FormAccount = ({ account, onSubmit }: Props) => {
  return (
    <Form
      schema={Schema}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={onSubmit}
      props={{
        newsletter: {
          choices: ["0", "1"],
          controlName: "Checkbox",
        },
      }}
      defaultValues={account}
    ></Form>
  );
};
