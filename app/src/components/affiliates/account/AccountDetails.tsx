import { Flex } from "@chakra-ui/react";
import { api } from "../../../utils/api";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { FormAccount } from "./FormAccount";
import { FormContact } from "./FormContact";
import { FormInvoice } from "./FormInvoice";
import { FormWebSites } from "./FormWebSites";
import {
  AffiliateAccountType,
  AffiliateAccountUpdateType,
} from "../../../server/db-types";

export const AccountDetails = () => {
  const { data: account, refetch } = api.affiliates.getAccount.useQuery();
  const { data: countries } = api.misc.getCountries.useQuery();
  const updateAccount = api.affiliates.updateAccount.useMutation();

  const {
    sales_pixel_params_replacing,
    accounts_pixel_params_replacing,
    ...rest
  } = account || {};

  if (!account) {
    return null;
  }

  const handleSubmit = async (values: AffiliateAccountUpdateType) => {
    await updateAccount.mutateAsync(values);
    await refetch();
  };

  return (
    <Flex direction="column" gap={2} maxW="4xl" width="100%">
      <Tabs>
        <TabList>
          <Tab>Account</Tab>
          <Tab>Contact</Tab>
          <Tab>Invoice</Tab>
          <Tab>Website</Tab>
          <Tab>Market</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <FormAccount account={account} onSubmit={handleSubmit} />
          </TabPanel>
          <TabPanel>
            <FormContact account={account} onSubmit={handleSubmit} />
          </TabPanel>
          <TabPanel>
            <FormInvoice
              account={account}
              onSubmit={handleSubmit}
              countries={countries || []}
            />
          </TabPanel>
          <TabPanel>
            <FormWebSites account={account} onSubmit={handleSubmit} />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <pre>{JSON.stringify(rest, null, 2)}</pre>
    </Flex>
  );
};
