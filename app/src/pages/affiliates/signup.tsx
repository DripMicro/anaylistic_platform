import styles from "./../index.module.css";
import { type NextPage } from "next";
import Head from "next/head";

import { FormSignup } from "../../components/affiliates/account/FormSignup";
const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Affiliates create account</title>
        <meta name="description" content="Affiliates Creative Materials" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <FormSignup />
      </main>
    </>
  );
};

export default Page;
