import { Global, css } from "@emotion/react";
import tw, { GlobalStyles as BaseStyles } from "twin.macro";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const customStyles = css`
  body {
    background: #1e1e1e;
    font-size: 15px;
    line-height: 1.8;
    font-weight: 400;
    color: #666666;
  }
  body.offcanvas {
    overflow-x: hidden;
  }
  body.offcanvas #sidernav {
    -moz-transform: translateX(0);
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
    width: 270px;
    background: #1e1e1e;
    z-index: 999;
    position: fixed;
  }
  body.offcanvas #maincontent,
  body.offcanvas #hamburger {
    top: 0;
    -moz-transform: translateX(220px);
    -webkit-transform: translateX(220px);
    -ms-transform: translateX(220px);
    -o-transform: translateX(220px);
    transform: translateX(220px);
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

  @font-face {
    font-family: AbrilFatface;
    src: url(${publicRuntimeConfig.basePath}fonts/AbrilFatface.ttf);
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
