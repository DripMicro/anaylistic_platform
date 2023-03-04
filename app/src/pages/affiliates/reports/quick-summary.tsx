import {
  FormLabel,
  Grid,
  GridItem,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { api } from "../../../utils/api";
import styles from "./../../index.module.css";

const Page: NextPage = () => {
  const router = useRouter();
  const page = parseInt(router?.query?.page as string);
  const items_per_page = parseInt(router?.query?.size as string);
  const [displayType, setDisplayType] = useState("");
  const [from, setFrom] = useState(new Date());
  const [to, setTo] = useState(new Date());
  const { data } = api.affiliates.getQuickReportSummary.useQuery({
    from: from,
    to: to,
    display: displayType,
  });
  const { data: merchants } = api.affiliates.getAllMerchants.useQuery();

  console.log("data ----->", data);
  console.log("merchants ----->", merchants);

  return (
    <>
      <Head>
        <title>Quick Summary Report</title>
        <meta name="description" content="Affiliates Creative Materials" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Grid>
          <Grid
            templateColumns="repeat(4, 1fr)"
            gap={6}
            alignContent={"center"}
            margin="2%"
          >
            <GridItem>
              <FormLabel>From</FormLabel>
              <SingleDatepicker date={from} onDateChange={setFrom} />
            </GridItem>
            <GridItem>
              <FormLabel>to</FormLabel>
              <SingleDatepicker date={to} onDateChange={setTo} />
            </GridItem>
            <GridItem>
              <FormLabel>Search Type</FormLabel>
              <Select
                placeholder="Select option"
                onChange={(event) => setDisplayType(event.target.value)}
              >
                <option value="monthly">monthly</option>
                <option value="weekly">weekly</option>
                <option value="daily">daily</option>
              </Select>
            </GridItem>
            <GridItem>
              <FormLabel>Merchant</FormLabel>
              <Select
                placeholder="Select option"
                onChange={(event) => setDisplayType(event.target.value)}
              >
                {merchants?.map((merchant, i) => {
                  return (
                    <option key={i} value={merchant.name}>
                      {merchant.name}
                    </option>
                  );
                })}
              </Select>
            </GridItem>
          </Grid>
          <Grid gap={2} margin="2%">
            <h2>Quick Summary Report</h2>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Merchant</Th>
                    <Th>Impressions</Th>
                    <Th>Clicks</Th>
                    <Th>Installation</Th>
                    <Th>Click Through Ratio</Th>
                    <Th>Click to Account</Th>
                    <Th>Click to Sale</Th>
                    <Th>Lead</Th>
                    <Th>Demo</Th>
                    <Th>Accounts</Th>
                    <Th>FTD</Th>
                    <Th>Volume</Th>
                    <Th>Withdrawal Amount</Th>
                    <Th>ChargeBack Amount</Th>
                    <Th>Active Traders</Th>
                    <Th>Commission</Th>
                  </Tr>
                </Thead>
                <Tbody></Tbody>
                {data !== undefined &&
                data !== null &&
                data._sum.Clicks !== null &&
                Object.keys(data).length > 0 ? (
                  <Tbody>
                    {Object.keys(data).map((item, key) => {
                      const quick_summary = data?._sum;
                      return (
                        <Tr key={key}>
                          <Td>Fxoro</Td>
                          <Td>{quick_summary?.Impressions}</Td>
                          <Td>{quick_summary?.Clicks}</Td>
                          <Td>{quick_summary?.Install}</Td>
                          <Td>
                            {(
                              (quick_summary?.Clicks ??
                                0 / quick_summary.Impressions! ??
                                1) * 100
                            ).toFixed(2)}
                            %
                          </Td>
                          <Td>
                            {(quick_summary?.RealAccount ??
                              0 / quick_summary.Clicks! ??
                              1) * 100}
                            %
                          </Td>
                          <Td>
                            {(quick_summary?.FTD ??
                              0 / quick_summary.Clicks! ??
                              1) * 100}
                            %
                          </Td>
                          <Td>{quick_summary?.Leads}</Td>
                          <Td>{quick_summary?.Demo}</Td>
                          <Td>{quick_summary?.RealAccount}</Td>
                          <Td>{quick_summary?.FTD}</Td>
                          <Td>{quick_summary?.Volume?.toFixed(2)}</Td>
                          <Td>{quick_summary?.Withdrawal?.toFixed(2)}</Td>
                          <Td>{quick_summary?.ChargeBack}</Td>
                          <Td>{quick_summary?.ActiveTrader}</Td>
                          <Td>{quick_summary?.Commission?.toFixed(2)}</Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                ) : (
                  <Tbody>
                    <Tr>No Data</Tr>
                  </Tbody>
                )}
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </main>
    </>
  );
};

export default Page;
