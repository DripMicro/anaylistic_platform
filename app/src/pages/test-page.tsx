import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
import { TestForm } from "../components/tests/TestForm";

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Affiliates Profiles</title>
        <meta name="description" content="Affiliates Profiles" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <TestForm />
      </main>
    </>
  );
};

export default Page;
