import { Global, css } from "@emotion/react";
import tw, { GlobalStyles as BaseStyles } from "twin.macro";

const customStyles = css`
  html {
    background: url(img/stars-bg.png) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  body {
    background: transparent;
    font-size: 15px;
    line-height: 1.8;
    font-weight: 400;
    color: white;
    font-family: "Poppins", Arial, sans-serif;
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
    src: url(/fonts/Flaticon.ttf);
    font-display: swap;
  }

  @font-face {
    font-family: AbrilFatface;
    src: url(/fonts/AbrilFatface.ttf);
    font-display: swap;
  }

  @font-face {
    font-family: LobsterRegular;
    src: url(/fonts/Lobster-Regular.ttf);
    font-display: swap;
  }

  @font-face {
    font-family: Poppins;
    src: url(/fonts/Poppins-Regular.ttf);
    font-display: swap;
  }

  @font-face {
    font-family: PoppinsBold;
    src: url(/fonts/Poppins-Bold.ttf);
    font-display: swap;
  }

  @font-face {
    font-family: KanitRegular;
    src: url(/fonts/Kanit-Regular.ttf);
    font-display: swap;
  }

  @font-face {
    font-family: KanitBold;
    src: url(/fonts/Kanit-Bold.ttf);
    font-display: swap;
  }

  @font-face {
    font-family: ExoBold;
    src: url(/fonts/Exo-Bold.ttf);
    font-display: swap;
  }

  @font-face {
    font-family: ExoRegular;
    src: url(/fonts/Exo-Regular.ttf);
    font-display: swap;
  }

  body::-webkit-scrollbar {
    width: 12px;
  }
  body::-webkit-scrollbar-track {
    background: transparent;
  }
  body::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 20px;
    border: 3px solid black;
  }

  .triple-slider {
    padding: 32px 0;
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
    perspective: 1200px;
  }

  .triple-slider-main {
    position: relative;
    z-index: 10;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
  }

  .triple-slider-prev,
  .triple-slider-next {
    opacity: 0.25;
    position: absolute;
    top: 50%;
    user-select: none;
    cursor: pointer;
  }

  .triple-slider-prev {
    right: 50%;
    transform: translateY(-50%) scale(0.75) rotateY(10deg);
  }

  .triple-slider-next {
    left: 50%;
    transform: translateY(-50%) scale(0.75) rotateY(-10deg);
  }

  .triple-slider .swiper {
    width: 100%;
    max-width: 640px;
    height: 100%;
    border-radius: 8px;
  }

  .triple-slider .bg-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #5271ff;
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
