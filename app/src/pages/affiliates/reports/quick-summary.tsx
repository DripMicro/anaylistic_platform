import styles from "./../../index.module.css";
import { api } from "../../../utils/api";
import { Flex } from "@chakra-ui/react";
import {QuerySelect} from '../../../components/common/QuerySelect'
import { type NextPage } from "next";
import Head from "next/head";
import {useState} from 'react'
import { RangeDatepicker } from "chakra-dayzed-datepicker";

const Page: NextPage = () => {
  const [selectedDates, setSelectedDates] = useState<Date[]>([new Date(), new Date()]);
  const { data } = api.affiliates.getQuickReportSummary.useQuery({from:selectedDates[0],to:selectedDates[1]})

  
  console.log("data ----->", data)
  console.log("selected dates ------>",selectedDates)
  

  return (
    <>
      <Head>
        <title>Quick Summary Report</title>
        <meta name="description" content="Affiliates Creative Materials" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
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
