import styles from "./../index.module.css";
import { type NextPage } from "next";
import Head from "next/head";

import { Dashboard } from "../../components/affiliates/dashboard/Dashboard";
const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Affiliates Dashboard</title>
        <meta name="description" content="Affiliates Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Dashboard />
      </main>
    </>
  );
};

export default Page;
