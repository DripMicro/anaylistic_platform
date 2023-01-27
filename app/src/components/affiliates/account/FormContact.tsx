import type { AffiliateAccountType } from "../../../server/db-types";
import { Flex } from "@chakra-ui/react";
import { z } from "zod";
import { Form } from "../../common/forms/Form";

const Schema = z.object({
  company: z.string().optional().describe("Company Name"),
  gender: z
    .enum(["EMPTY_ENUM_VALUE", "male", "female"])
    .optional()
    .describe("Salutation"),
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
  onSubmit: (values: z.infer<typeof Schema>) => Promise<void>;
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
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={onSubmit}
      defaultValues={account}
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
