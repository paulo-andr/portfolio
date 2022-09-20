import type { AppProps } from "next/app";
import NProgress from "nprogress";
import Router from "next/router";
import App from "next/app";

import GlobalStyles from "./../styles/GlobalStyles";
import "nprogress/nprogress.css";
import "react-image-lightbox/style.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());

  return (
    <>
      <GlobalStyles />
      <main>
        <Head>
          <title>Paulo Andrade - 3D Artist</title>
          <meta name="description" content="Paulo Andrade portfolio" />
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Hi! Welcome to my Portfolio, I'm Paulo Andrade a Digital & 3D Artist, currently working as a Freelancer"
          />
          <meta
            name="keywords"
            content="3D Artist, Artist, Digital Art, Game Assets, Assets, Concept Art, Game Art, Game Artist, 3D Models, 3D Envoirments"
          />
          <meta name="author" content="Paulo Andrade" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </main>
    </>
  );
}

MyApp.getInitialProps = async (ctx: any) => {
  const appProps = await App.getInitialProps(ctx);

  return { ...appProps };
};

export default MyApp;
