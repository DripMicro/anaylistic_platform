import type { AffiliateAccountType } from "../../../server/db-types";
import { Flex } from "@chakra-ui/react";
import type { z } from "zod";
import { Form } from "../../common/forms/Form";
import type { ChoiceType } from "../../common/forms/TextField";
import { schema } from "../../../shared-types/forms/invoice";

interface Props {
  onSubmit: (values: z.infer<typeof schema>) => Promise<void>;
  account: AffiliateAccountType;
  countries: ChoiceType[];
}

export const FormInvoice = ({ account, onSubmit, countries }: Props) => {
  return (
    <Form
      schema={schema}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={onSubmit}
      props={{
        country: {
          choices: countries,
        },
      }}
      defaultValues={account}
    ></Form>
  );
};
