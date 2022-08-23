import type { AppProps } from "next/app";
import Layout from "../components/Layout";

import GlobalStyles from "./../styles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
