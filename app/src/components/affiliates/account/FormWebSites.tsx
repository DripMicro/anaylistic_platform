import type { AffiliateAccountType } from "../../../server/db-types";
import { Flex } from "@chakra-ui/react";
import { z } from "zod";
import { Form } from "../../common/forms/Form";

const Schema = z.object({
  website: z.string().url().optional().describe("WebSite 1"),
  website2: z.string().url().optional().describe("WebSite 2"),
  website3: z.string().url().optional().describe("WebSite 3"),
});

interface Props {
  onSubmit: (values: z.infer<typeof Schema>) => Promise<void>;
  account: AffiliateAccountType;
}

export const FormWebSites = ({ account, onSubmit }: Props) => {
  return (
    <Form
      schema={Schema}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={onSubmit}
      defaultValues={account}
    ></Form>
  );
};
