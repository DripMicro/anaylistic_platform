import type { AffiliateAccountType } from "../../../server/db-types";
import { Flex } from "@chakra-ui/react";
import { z } from "zod";
import { createUniqueFieldSchema } from "@ts-react/form";
import { Form } from "../../common/forms/Form";
import { FormEventHandler } from "react";

const Schema = z.object({
  company: z.string().optional().describe("Company Name"),
  gender: z.enum(["", "male", "female"]).optional().describe("Salutation"),
  first_name: z.string().optional().describe("First Name"),
  last_name: z.string().optional().describe("Last Name"),
  mail: z.string().email().optional().describe("Email"),
  phone: z.string().optional().describe("Phone Number"),
  IMUserType: z
    .string()
    .optional()
    .describe("Instant Message Type // Choose IM Type"),
  IMUser: z.string().optional().describe("Instant Message Account"),
});

interface Props {
  onSubmit: (values: z.infer<typeof Schema>) => void;
  account: AffiliateAccountType;
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

export const FormContact = ({ account, onSubmit }: Props) => {
  return (
    <Form
      schema={Schema}
      onSubmit={onSubmit}
      props={{
        mail: {
          type: "email",
        },
        gender: {
          controlName: "RadioGroup",
          choices: [
            // { id: "", title: "" },
            { id: "male", title: "Mr." },
            { id: "female", title: "Ms." },
          ],
        },
        IMUserType: {
          choices: imUserTypes,
          // also work
          // enumValues: imUserTypes.map((item: string) => ({
          //   id: item,
          //   title: item,
          // })),
        },
      }}
    ></Form>
  );
};
