import styles from "./../index.module.css";
import { type NextPage } from "next";
import Head from "next/head";

import { SubCreativeMaterial } from "../../components/affiliates/sub/SubCreativeMaterial";
import { Profiles } from "../../components/affiliates/profiles/Profiles";
const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Affiliates Profiles</title>
        <meta name="description" content="Affiliates Profiles" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Profiles />
      </main>
    </>
  );
};

export default Page;
