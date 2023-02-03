import styles from "./../index.module.css";
import { type NextPage } from "next";
import Head from "next/head";

import { Tickets } from "../../components/affiliates/tickets/Tickets";
const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Affiliates Tickets</title>
        <meta name="description" content="Affiliates Profiles" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Tickets />
      </main>
    </>
  );
};

export default Page;
