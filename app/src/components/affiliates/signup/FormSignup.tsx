import type { AffiliateAccountCreate } from "../../../server/db-types";
import { Flex } from "@chakra-ui/react";
import { z } from "zod";
import { Form } from "../../common/forms/Form";

const Schema = z.object({
  username: z.string().optional().describe("User Name"),
  first_name: z.string().optional().describe("First Name"),
  last_name: z.string().optional().describe("Last Name"),
  email: z.string().email().optional().describe("Email"),
  password: z.string().optional().describe("Password"),
  phone: z.string().optional().describe("Phone Number"),
  IMUserType: z
    .string()
    .optional()
    .describe("Instant Message Type // Choose IM Type"),
    IMUser: z.string().optional().describe("IM Account"),
    lang: z.string().optional().describe("Language"),
    company: z.string().optional().describe("Company"),
    website: z.string().optional().describe("Website"),
  });

interface Props {
  onSubmit: (values: z.infer<typeof Schema>) => Promise<void>;
  Register: AffiliateAccountCreate;
}

const imUserTypes = [
  "Skype",
  "MSN",
  "Google Talk",
  "QQ",
  "ICQ",
  "Yahoo",
  "AIM",
];

export const FormSignup = ({ Register, onSubmit }: Props) => {
  return (
    <Form
      schema={Schema}
      onSubmit={onSubmit}
      props={{
        email: {
          type: "email",
        },
        IMUserType: {
          choices: imUserTypes,
        }
      }}
      defaultValues={Register}

    ></Form>
  );
};
