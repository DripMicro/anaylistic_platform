import { Flex } from "@chakra-ui/react";
import { RangeDatepicker } from "chakra-dayzed-datepicker";
import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { api } from "../../../utils/api";
import styles from "./../../index.module.css";

const Page: NextPage = () => {
  const [selectedDates, setSelectedDates] = useState<Date[]>([
    new Date(),
    new Date(),
  ]);
  const { data } = api.affiliates.getSubAffiliateReport.useQuery({
    from: selectedDates[0],
    to: selectedDates[1],
  });
  const { data: merchants } = api.affiliates.getAllMerchants.useQuery();

  console.log("sub affiliate data ----->", data);
  console.log("merchants ----->", merchants);

  return (
    <>
      <Head>
        <title>Creative Report</title>
        <meta name="description" content="Creative Report" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} style={{ marginTop: "20px" }}>
        <Flex direction="column" gap={2}>
          <Flex direction="row" gap={2}>
            <RangeDatepicker
              selectedDates={selectedDates}
              onDateChange={setSelectedDates}
            />
          </Flex>
        </Flex>
      </main>
    </>
  );
};

export default Page;
