import {
  Container,
  Box,
  Grid,
  GridItem,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
import { AreaChart, LineChart } from "@tremor/react";
import type {
  TopMerchantCreativeType,
  CountryReportType,
} from "../../../server/db-types";
import { DataTable } from "../../common/data-table/DataTable";
import { createColumnHelper } from "@tanstack/react-table";
import React, { useState, useEffect } from "react";
import { api } from "../../../utils/api";
import {
  performanceFormatter,
  conversionFormatter,
} from "../../../utils/format";
import { serverStoragePath } from "../../utils";

import {
  ClicksIcon,
  SignupIcon,
  AcauisitionIcon,
  ComissionIcon,
} from "../../icons";

const columnHelper = createColumnHelper<TopMerchantCreativeType>();
const reportColumnHelper = createColumnHelper<CountryReportType>();

export const Dashboard = () => {
  const { data } = api.affiliates.getDashboard.useQuery();

  const { data: performanceChart } =
    api.affiliates.getPerformanceChart.useQuery();

  const { data: conversionChart } =
    api.affiliates.getConversionChart.useQuery();

  const { data: creative } = api.affiliates.getTopMerchantCreative.useQuery();

  const { data: report } = api.affiliates.getCountryReport.useQuery();
  
  if (!data || !creative || !report || !performanceChart || !conversionChart) {
    return null;
  }
  
  const columns = [
    columnHelper.accessor("merchant.name", {
      cell: (info) => info.getValue(),
      header: "Merchant",
    }),
    columnHelper.accessor("language.title", {
      cell: (info) => info.getValue(),
      header: "Language",
    }),
    columnHelper.accessor("title", {
      cell: (info) => info.getValue(),
      header: "Creative Name",
    }),
    columnHelper.accessor("file", {
      cell: ({ row }) => {
        return (
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "173px" }}
            src={serverStoragePath(row.original.file)}
            alt={row.original.alt}
          />
        );
      },
      header: "Preview",
    }),
    columnHelper.accessor("width", {
      cell: ({ row }) => {
        return (
          <span>
            {row.original.width}x{row.original.height}
          </span>
        );
      },
      header: "LP Preview",
    }),
  ];

  const reportColumns = [
    reportColumnHelper.accessor("merchant_id", {
      cell: (info) => info.getValue(),
      header: "#",
    }),
    reportColumnHelper.accessor("country", {
      cell: (info) => info.getValue(),
      header: "Country",
    }),
    reportColumnHelper.accessor("_sum.Commission", {
      cell: (info) => info.getValue(),
      header: "Report",
    }),
  ];

  return (
    <Container maxW="container.lg" py="4">
      <Heading as="h5" size="sm">
        Affiliate Program Dashboard
      </Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap={6} mt="3">
        <GridItem w="100%">
          <Box
            border="1px solid gray"
            borderRadius="5"
            bg="white"
            p="4"
            display="flex"
            alignItems="center"
            columnGap="5"
            color="#0E132B"
            _hover={{ borderColor: "#069731", cursor: "pointer" }}
          >
            <ClicksIcon width="40" height="40" fill="#0E132B" />
            <Box>
              <Text fontSize="md" fontWeight="normal" color="#0E132B">
                Clicks
              </Text>
              <Text fontSize="lg" fontWeight="bold">
                {data[0]?._sum.Clicks}
              </Text>
            </Box>
          </Box>
        </GridItem>
        <GridItem w="100%">
          <Box
            border="1px solid gray"
            borderRadius="5"
            bg="white"
            p="4"
            display="flex"
            alignItems="center"
            columnGap="5"
            color="#0E132B"
            _hover={{ borderColor: "#069731", cursor: "pointer" }}
          >
            <SignupIcon width="39.755" height="40" fill="#0E132B" />
            <Box>
              <Text fontSize="md" fontWeight="normal" color="#0E132B">
                Signups
              </Text>
              <Text fontSize="lg" fontWeight="bold">
                {data[0]?._sum.RealAccount}
              </Text>
            </Box>
          </Box>
        </GridItem>
        <GridItem w="100%">
          <Box
            border="1px solid gray"
            borderRadius="5"
            bg="white"
            p="4"
            display="flex"
            alignItems="center"
            columnGap="5"
            color="#0E132B"
            _hover={{ borderColor: "#069731", cursor: "pointer" }}
          >
            <AcauisitionIcon width="36" height="40" fill="#0E132B" />
            <Box>
              <Text fontSize="md" fontWeight="normal" color="#0E132B">
                Acauisition
              </Text>
              <Text fontSize="lg" fontWeight="bold">
                86
              </Text>
            </Box>
          </Box>
        </GridItem>
        <GridItem w="100%">
          <Box
            border="1px solid gray"
            borderRadius="5"
            bg="white"
            p="4"
            display="flex"
            alignItems="center"
            columnGap="5"
            color="#0E132B"
            _hover={{ borderColor: "#069731", cursor: "pointer" }}
          >
            <ComissionIcon width="20" height="40" fill="#0E132B" />
            <Box>
              <Text fontSize="md" fontWeight="normal" color="#0E132B">
                Comission
              </Text>
              <Text fontSize="lg" fontWeight="bold">
                $13,857.00
              </Text>
            </Box>
          </Box>
        </GridItem>
      </Grid>
      <Stack mt="5">
        <Tabs>
          <TabList>
            <Tab>Performace Chart</Tab>
            <Tab>Conversion Chart</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <AreaChart
                data={performanceChart}
                categories={["Accounts", "Active Traders"]}
                dataKey="date"
                height="h-72"
                colors={["indigo", "cyan"]}
                valueFormatter={performanceFormatter}
                marginTop="mt-4"
              />
            </TabPanel>
            <TabPanel>
              <LineChart
                data={conversionChart}
                dataKey="date"
                categories={["Conversions"]}
                colors={["blue"]}
                valueFormatter={conversionFormatter}
                marginTop="mt-6"
                yAxisWidth="w-10"
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
      <Stack mt="5">
        <Heading as="h6" size="xs" mb="2">
          Country Report
        </Heading>
        <DataTable data={report} columns={reportColumns} />
      </Stack>
      <Stack mt="5">
        <Heading as="h6" size="xs" mb="2">
          Top Performing Creative
        </Heading>
        <DataTable data={creative} columns={columns} />
      </Stack>
    </Container>
  );
};
