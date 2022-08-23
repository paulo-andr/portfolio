import React, { ReactElement } from "react";
import Head from "next/head";
import "twin.macro";

interface Props {
  children: ReactElement;
}

export default function Layout({ children }: Props): JSX.Element {
  return (
    <>
      {/* @ts-ignore */}
      <main tw="container overflow-hidden lg:overflow-auto mx-auto mt-[80px] font-flaticon z-10 relative px-5 min-h-[calc(100vh - 80px)] lg:px-0 h-full grid">
        <Head>
          <title>Paulo Andrade portfolio</title>
          <meta name="description" content="Paulo Andrade portfolio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div tw="h-full flex justify-center flex-col mb-20 overflow-hidden">
          {children}
        </div>
      </main>
    </>
  );
}
