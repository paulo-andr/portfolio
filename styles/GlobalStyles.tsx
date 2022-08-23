import { Global, css } from "@emotion/react";
import tw, { GlobalStyles as BaseStyles } from "twin.macro";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const customStyles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    overflow: hidden;
    font-family: Flaticon, sans-serif;
  }

  :root {
    font-size: 16px;
    line-height: 24px;
  }

  @font-face {
    font-family: Flaticon;
    src: url(${publicRuntimeConfig.basePath}fonts/Flaticon.ttf);
    font-display: swap;
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
