import type { AffiliateAccountType } from "../../../server/db-types";
import { Flex } from "@chakra-ui/react";
import { z } from "zod";
import { Form } from "../../common/forms/Form";

const Schema = z.object({
  marketInfo: z.string().optional().describe("Markets"),
});

interface Props {
  onSubmit: (values: z.infer<typeof Schema>) => Promise<void>;
  account: AffiliateAccountType;
}

export const FormMarketInfo = ({ account, onSubmit }: Props) => {
  return (
    <Form
      schema={Schema}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={onSubmit}
      defaultValues={account}
      props={{
        marketInfo: {
          controlName: "CheckboxGroup",
          choices: [
            { id: 1, title: "Africa" },
            { id: 2, title: "Afro Eurasia" },
            { id: 3, title: "Americas" },
            { id: 4, title: "Asia" },
            { id: 5, title: "Australia" },
            { id: 6, title: "Eurasia" },
            { id: 7, title: "Europe" },
            { id: 8, title: "North America" },
            { id: 9, title: "South America" },
            { id: 10, title: "United Kingdom" },
            { id: 11, title: "World Wide" },
          ],
        },
      }}
    ></Form>
  );
};
