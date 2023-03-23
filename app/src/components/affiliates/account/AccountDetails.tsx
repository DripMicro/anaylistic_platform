import { Box, Flex } from "@chakra-ui/react";
import { api } from "../../../utils/api";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { FormAccount } from "./FormAccount";
import { FormContact } from "./FormContact";
import { FormInvoice } from "./FormInvoice";
import { FormWebSites } from "./FormWebSites";
import type { AffiliateAccountUpdateType } from "../../../server/db-types";
import { AffiliateAccountType } from "../../../server/db-types";
import { FormMarketInfo } from "./FormMarketInfo";

export const AccountDetails = () => {
  const { data: account, refetch } = api.affiliates.getAccount.useQuery();
  const { data: countries } = api.misc.getCountries.useQuery();
  const updateAccount = api.affiliates.updateAccount.useMutation();

  if (!account) {
    return null;
  }

  const handleSubmit = async (values: AffiliateAccountUpdateType) => {
    await updateAccount.mutateAsync(values);
    await refetch();
  };

  return (
    <div className="pt-5 pb-4 w-full -ml-5">
      <div className="px-6 mb-5 block font-medium text-base">
        <span className="text-[#2262C6]">Dashboard</span> - My Account - Account
        Details
      </div>
      <div className="pt-4 mt-6 px-4 h-auto rounded-2xl bg-white shadow-[4px_3px_33px_0_rgba(0,0,0,0.05)] pb-20 md:mb-10">
        <Flex
          direction="column"
          className=" flex flex-col justify-between"
          gap={2}
        >
          <Tabs>
            <TabList className="font-medium text-sm">
              <Tab>Account</Tab>
              <Tab>Contact</Tab>
              <Tab>Invoice</Tab>
              <Tab>Website</Tab>
              {/*<Tab>Market</Tab>*/}
            </TabList>

            <TabPanels>
              <TabPanel>
                <FormAccount onSubmit={handleSubmit} />
              </TabPanel>
              <TabPanel>
                <FormContact onSubmit={handleSubmit} />
              </TabPanel>
              <TabPanel>
                <FormInvoice onSubmit={handleSubmit} />
              </TabPanel>
              <TabPanel>
                <FormWebSites onSubmit={handleSubmit} />
              </TabPanel>
              {/* <TabPanel>
                <FormContact account={account} onSubmit={handleSubmit} />
              </TabPanel> */}
              {/* <TabPanel>
                <FormInvoice
                  account={account}
                  onSubmit={handleSubmit}
                  countries={countries || []}
                />
              </TabPanel> */}
              {/* <TabPanel>
                <FormWebSites account={account} onSubmit={handleSubmit} />
              </TabPanel> */}
              {/*<TabPanel>*/}
              {/*  <FormMarketInfo account={account} onSubmit={handleSubmit} />*/}
              {/*</TabPanel>*/}
            </TabPanels>
          </Tabs>
          {/* <Box maxW="100%">
            <pre>{JSON.stringify(account, null, 2)}</pre>
          </Box> */}
        </Flex>
      </div>
    </div>
  );
};
