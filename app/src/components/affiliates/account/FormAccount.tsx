import type { AffiliateAccountType } from "../../../server/db-types";
import { Flex } from "@chakra-ui/react";
import { z } from "zod";
import { createUniqueFieldSchema } from "@ts-react/form";
import { Form } from "../../common/forms/Form";
import { FormEventHandler } from "react";
import { ChoiceType } from "../../common/forms/TextField";

const Schema = z
  .object({
    username: z.string().describe("Username"),
    password: z.string().optional().describe("Password"),
    passwordRepeat: z.string().optional().describe("Repeat Password"),
    newsletter: z.coerce
      .number()
      .describe("Yes, I would like to receive the Affiliate newsletter"),
  })
  .refine(
    ({ passwordRepeat, password }) => {
      return password === passwordRepeat;
    },
    {
      message: "Passwords do not match. Please re-enter your passwords.",
      path: ["passwordRepeat"],
    }
  );

interface Props {
  onSubmit: (values: z.infer<typeof Schema>) => void;
  account: AffiliateAccountType;
}

export const FormAccount = ({ account, onSubmit }: Props) => {
  return (
    <Form
      schema={Schema}
      onSubmit={onSubmit}
      props={{
        newsletter: {
          choices: ["0", "1"],
          controlName: "Checkbox",
        },
      }}
    ></Form>
  );
};
