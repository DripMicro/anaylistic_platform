import { Flex } from "@chakra-ui/react";
import { api } from "../../../utils/api";
import type { AffiliateAccountUpdateType } from "../../../server/db-types";
import { Form } from "../../common/forms/Form";
import { z } from "zod";
import { affiliates_paymentMethod } from "@prisma/client";
import { GridColumnHeader } from "../../common/forms/GridColumnHeader";

const schema = z.object({
  paymentMethod: z
    .nativeEnum(affiliates_paymentMethod)
    .describe("Payment Method"),

  // Basic Information
  pay_firstname: z.string().optional().describe("First Name"),
  pay_lastname: z.string().optional().describe("Last Name"),
  pay_address1: z.string().optional().describe("Address 1"),
  pay_address2: z.string().optional().describe("Address 2"),
  pay_city: z.string().optional().describe("City"),
  pay_zip: z.string().optional().describe("Zip Code"),
  pay_country: z.coerce.number().optional().describe("Country"),

  // Transfer Details

  // availableCurrencies
  preferredCurrency: z.string().optional().describe("Preferred Currency"),
  pay_info: z.string().optional().describe("More Information"),
  pay_email: z.string().email().optional().describe("Payment Email"),
  pay_account: z.string().optional().describe("Account"),
});

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
