import { type AppType, AppProps  } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { LayoutKeys } from "../layouts/Layouts";

import { NextComponentType, NextPage, NextPageContext } from "next";

import "../styles/globals.css";
import "@tremor/react/dist/esm/tremor.css";

import { api } from "../utils/api";
import { theme } from "../components/chakra-ui-theme";

import { Layouts } from "../layouts/Layouts";

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type Props = AppProps<{ session: Session | null }> & {
  Component: Page;
};

type MyAppProps = AppProps<{ session: Session | null }> & {
  Component: NextComponentType<NextPageContext, any, any> & {
    Layout: LayoutKeys;
  };
};




const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: MyAppProps) => {
  // const Layout = Layouts[Component.Layout] ?? ((page) => page);
  const Layout = Layouts[Component.Layout] ?? ((page) => page);
  
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);


// import "../styles/globals.css";
// import { MyAppProps } from "components/common/types";
// import { Layouts } from "components/common/Layouts";
// function MyApp({ Component, pageProps }: MyAppProps) {
//   const Layout = Layouts[Component.Layout] ?? ((page) => page);
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   );
// }
// export default MyApp;
