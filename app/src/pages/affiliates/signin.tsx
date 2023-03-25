import { type NextPage } from "next";
import Head from "next/head";
import AuthenticationFooter from "../../components/common/footer/AuthenticationFooter";
import { FormSignin } from "../../components/affiliates/account/FormSignin";
import type { MyPage } from "../../components/common/types";

const Page: MyPage = () => {
  return (
    <>
      <Head>
        <title>Affiliates create account</title>
        <meta name="description" content="Affiliates Creative Materials" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center px-5">
        <FormSignin />
        <AuthenticationFooter />
      </main>
    </>
  );
};

export default Page;
Page.Layout = "NoLayout";
