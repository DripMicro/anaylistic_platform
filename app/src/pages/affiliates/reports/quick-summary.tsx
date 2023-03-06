import { type NextPage } from "next";
import Head from "next/head";
import { Quicks } from "../../../components/affiliates/reports/Quick";
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
        <Quicks />
      </main>
    </>
  );
};

export default Page;
