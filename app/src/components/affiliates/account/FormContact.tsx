import type { AffiliateAccountType } from "../../../server/db-types";
import { Flex } from "@chakra-ui/react";
import type { z } from "zod";
import { Form } from "../../common/forms/Form";
import { schema } from "../../../shared-types/forms/contact";
import { imUserTypes } from "../../../shared-types/forms/common";

interface Props {
  onSubmit: (values: z.infer<typeof schema>) => Promise<void>;
  account: AffiliateAccountType;
}

export const FormContact = ({ account, onSubmit }: Props) => {
  return (
    <Form
      schema={schema}
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
