import styles from "./../index.module.css";
import { type NextPage } from "next";
import Head from "next/head";

import { FormSignin } from "../../components/affiliates/signin/FormSignin";
const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Affiliates create account</title>
        <meta name="description" content="Affiliates Creative Materials" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <FormSignin />
      </main>
    </>
  );
};

export default Page;