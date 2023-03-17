import { type NextPage } from "next";
import Head from "next/head";
import { QuickSummaryReport } from "../../../components/affiliates/reports/QuickSummaryReport";
import styles from "./../../index.module.css";

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Quick Summary Report</title>
        <meta name="description" content="Affiliates Creative Materials" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <QuickSummaryReport />
      </main>
    </>
  );
};

export default Page;
