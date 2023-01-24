import type { AffiliateAccountType } from "../../../server/db-types";
import { Flex } from "@chakra-ui/react";
import { z } from "zod";
import { createUniqueFieldSchema } from "@ts-react/form";
import { Form } from "../../common/forms/Form";
import { FormEventHandler } from "react";
import type { ChoiceType } from "../../common/forms/TextField";

const Schema = z.object({
  street: z.string().optional().describe("Street"),
  postalCode: z.string().optional().describe("Postal / Zip Code"),
  city: z.string().optional().describe("City"),
  country: z.string().optional().describe("Country"),
});

interface Props {
  onSubmit: (values: z.infer<typeof Schema>) => void;
  account: AffiliateAccountType;
  countries: ChoiceType[];
}

export const FormInvoice = ({ account, onSubmit, countries }: Props) => {
  return (
    <Form
      schema={Schema}
      onSubmit={onSubmit}
      props={{
        country: {
          choices: countries,
        },
      }}
    ></Form>
  );
};
