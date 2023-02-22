import styles from "./../index.module.css";
import { type NextPage } from "next";
import Head from "next/head";

import { PixelMonitor } from "../../components/affiliates/pixel/PixelMonitor";
const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Affiliates Pixel Monitor</title>
        <meta name="description" content="Affiliates Pixel Monitor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <PixelMonitor />
      </main>
    </>
  );
};

export default Page;
