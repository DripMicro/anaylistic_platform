import { Flex } from "@chakra-ui/react";
import { api } from "../../../utils/api";
import type { AffiliateAccountUpdateType } from "../../../server/db-types";
import { Form } from "../../common/forms/Form";
import type { z } from "zod";
import { affiliates_paymentMethod } from "@prisma/client";
import { GridColumnHeader } from "../../common/forms/GridColumnHeader";
import { schema } from "../../../shared-types/forms/payment-details";

export const AccountPaymentDetails = () => {
  const { data: account, refetch } = api.affiliates.getAccount.useQuery();
  const { data: countries } = api.misc.getCountries.useQuery();
  const updateAccount = api.affiliates.updateAccount.useMutation();

  if (!account) {
    return null;
  }

  const handleSubmit = async (values: z.infer<typeof schema>) => {
    await updateAccount.mutateAsync(values);
    await refetch();
  };

  return (
    <Flex direction="column" gap={2} maxW="4xl" width="100%" m="auto">
      <Form
        schema={schema}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit}
        defaultValues={account}
        formProps={{
          grid: {
            templateAreas: [
              `"a" "b" "c"`,
              `"a a"
               "b c"`,
            ],
            gridTemplateColumns: ["1fr", "1fr 1fr"],
          },
        }}
        props={{
          pay_firstname: {
            beforeElement: <GridColumnHeader title="Basic Information" />,
          },
          paymentMethod: {
            choices: [
              { id: "bank", title: "Wire Transfer" },
              { id: "skrill", title: "Skrill" },
              { id: "paypal", title: "Paypal" },
              { id: "neteller", title: "Neteller" },
              { id: "webmoney", title: "WebMoney" },
              { id: "chinaunionpay", title: "China Union Pay" },
            ].filter(({ id }) => true /* set.availablePayments */),
          },
          preferredCurrency: {
            beforeElement: <GridColumnHeader title="Transfer Details" />,
            choices: ["TBD"],
          },
          pay_info: {
            controlName: "Textarea",
          },
          pay_account: {
            choices: countries,
          },
        }}
      ></Form>
    </Flex>
  );
};
