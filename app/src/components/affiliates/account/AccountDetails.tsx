import { Flex } from "@chakra-ui/react";
import { api } from "../../../utils/api";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { FormAccount } from "./FormAccount";
import { FormContact } from "./FormContact";
import { FormInvoice } from "./FormInvoice";
import { FormWebSites } from "./FormWebSites";

export const AccountDetails = () => {
  const { data: account } = api.affiliates.getAccount.useQuery();
  const { data: countries } = api.misc.getCountries.useQuery();

  const {
    sales_pixel_params_replacing,
    accounts_pixel_params_replacing,
    ...rest
  } = account || {};

  console.log(`muly:AccountDetails`, { rest });

  if (!account) {
    return null;
  }

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
            <FormAccount
              account={account}
              onSubmit={(values) => {
                console.log(`muly:submit`, { values });
              }}
            />
          </TabPanel>
          <TabPanel>
            <FormContact
              account={account}
              onSubmit={(values) => {
                console.log(`muly:submit`, { values });
              }}
            />
          </TabPanel>
          <TabPanel>
            <FormInvoice
              account={account}
              onSubmit={(values) => {
                console.log(`muly:submit`, { values });
              }}
              countries={countries || []}
            />
          </TabPanel>
          <TabPanel>
            <FormWebSites
              account={account}
              onSubmit={(values) => {
                console.log(`muly:submit`, { values });
              }}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <pre>{JSON.stringify(rest, null, 2)}</pre>
    </Flex>
  );
};
