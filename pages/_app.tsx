import type { AppProps } from "next/app";
import NProgress from "nprogress";
import Router from "next/router";

import Layout from "../components/Layout";

import GlobalStyles from "./../styles/GlobalStyles";
import "nprogress/nprogress.css";

function MyApp({ Component, pageProps }: AppProps) {
  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());

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
