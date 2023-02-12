import styles from "../index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
import { RecoverLostPassword } from "../../components/affiliates/account/RecoverLostPassword";

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Affiliates Tickets</title>
        <meta name="description" content="Affiliates Tickets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <RecoverLostPassword />
      </main>
    </>
  );
};

export default Page;
