import React, { ReactElement, useEffect, useState } from "react";
import Head from "next/head";
import tw, { styled } from "twin.macro";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMediaQuery } from "usehooks-ts";

interface Props {
  children: ReactElement;
}

export default function Layout({ children }: Props): JSX.Element {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const data = new Date().getFullYear();
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 991px)");

  const handleOpenMobileMenu = () => {
    document.body.classList.add("offcanvas");
    setHamburgerActive(true);
  };

  const handleCloseMobileMenu = () => {
    document.body.classList.remove("offcanvas");
    setHamburgerActive(false);
  };

  const handleMobileMenu = () => {
    if (document.body.classList.contains("offcanvas")) {
      handleCloseMobileMenu();
    } else {
      handleOpenMobileMenu();
    }
  };

  useEffect(() => {
    if (!isMobile) {
      handleCloseMobileMenu();
    }
  }, [isMobile]);

  return (
    <>
      {/* @ts-ignore */}
      <main tw="w-full overflow-hidden relative">
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
        <Hamburger
          id="hamburger"
          onClick={handleMobileMenu}
          active={hamburgerActive}
        >
          <i></i>
        </Hamburger>
        <AsideContainer id="sidernav">
          <Logo>
            <Link href="/" passHref>
              <a
                style={{
                  backgroundImage: `url(img/bg.jpg)`,
                }}
                onClick={() => isMobile && handleCloseMobileMenu()}
              >
                Paulo Andrade
              </a>
            </Link>
          </Logo>
          <NavContainer>
            <ul>
              <li>
                <Link href="/" passHref>
                  <Tag
                    active={
                      router.pathname === "/" ||
                      router.pathname.includes("/work")
                    }
                    onClick={() => isMobile && handleCloseMobileMenu()}
                  >
                    Work
                  </Tag>
                </Link>
              </li>
              <li>
                <Link href="/about" passHref>
                  <Tag
                    active={router.pathname === "/about"}
                    onClick={() => isMobile && handleCloseMobileMenu()}
                  >
                    About
                  </Tag>
                </Link>
              </li>
              <li>
                <Link href="/contacts" passHref>
                  <Tag
                    active={router.pathname === "/contacts"}
                    onClick={() => isMobile && handleCloseMobileMenu()}
                  >
                    Contacts
                  </Tag>
                </Link>
              </li>
            </ul>
          </NavContainer>
          <NavFooter>
            <p>
              {`Copyright ${data} All rights reserved | The Original Template is made by `}
              <a href="https://colorlib.com" target="_blank" rel="noreferrer">
                Colorlib.com
              </a>
            </p>
          </NavFooter>
        </AsideContainer>
        <MainContainer>{children}</MainContainer>
      </main>
    </>
  );
}

const AsideContainer = styled.aside`
  padding-top: 2rem;
  padding-bottom: 40px;
  padding-left: 2rem;
  padding-right: 2rem;
  width: 25%;
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  overflow-y: hidden;
  z-index: 1001;
  background: url(/img/aside.png) no-repeat right top #000;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  transition: all 0.5s ease;

  @media (min-width: 992px) {
    width: 25%;
  }

  @media (max-width: 991.98px) {
    width: 270px;
    background: url(/img/aside.png) no-repeat right top #000 !important;
    -moz-transform: translateX(-270px);
    -webkit-transform: translateX(-270px);
    -ms-transform: translateX(-270px);
    -o-transform: translateX(-270px);
    transform: translateX(-270px);
    padding-top: 2rem;
  }
`;

const Logo = styled.h1`
  ${tw`font-abril`}

  display: block;
  width: 100%;
  font-weight: normal;
  font-size: 60px;
  line-height: 0.8;
  margin-bottom: 1.5rem;

  a {
    display: inline-block;
    text-align: left;
    color: #111111;
    overflow: hidden;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 767.98px) {
    font-size: 50px;
  }

  @media (max-width: 991.98px) {
    margin-bottom: 20px;
  }

  @media (max-width: 1199.98px) {
    font-size: 40px;

    & > span {
      display: block;
    }
  }
`;

const NavContainer = styled.nav`
  ul {
    margin: 0;
    padding: 0;
  }

  ul li {
    margin: 0 0 10px 0;
    padding: 0;
    list-style: none;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  ul li a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    position: relative;
    padding: 10px 0;
    font-family: "Poppins", Arial, sans-serif;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  ul li a:after {
    content: "";
    position: absolute;
    height: 2px;
    bottom: 7px;
    left: 0;
    right: 0;
    background-color: #5271ff;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    -moz-transform: scaleX(0);
    -ms-transform: scaleX(0);
    -o-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -moz-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -ms-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -o-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  ul li a:hover {
    text-decoration: none;
    color: #5271ff;
  }

  ul li a:hover:after {
    visibility: visible;
    -webkit-transform: scaleX(1);
    -moz-transform: scaleX(1);
    -ms-transform: scaleX(1);
    -o-transform: scaleX(1);
    transform: scaleX(1);
  }
`;

const Tag = styled.a`
  ${(props: { active: boolean }) =>
    props.active
      ? `color: #5271ff !important; &:after {
      visibility: visible !important;
      -webkit-transform: scaleX(1) !important;
      -moz-transform: scaleX(1) !important;
      -ms-transform: scaleX(1) !important;
      -o-transform: scaleX(1) !important;
      transform: scaleX(1) !important; }`
      : ""}
`;

const NavFooter = styled.div`
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  padding: 0 2em;
  font-size: 17px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.2);
  width: 100%;

  a {
    color: rgba(255, 255, 255, 0.7);
  }

  p {
    font-size: 10px;
  }
`;

const Hamburger = styled.div`
  cursor: pointer;
  text-decoration: none;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 9999;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  padding: 10px;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  transition: all 0.5s ease;

  @media (max-width: 991.98px) {
    opacity: 1;
    visibility: visible;
  }

  i {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 2px;
    color: #fff;
    font: bold 14px/0.4 Helvetica;
    text-transform: uppercase;
    text-indent: -55px;
    background: #fff;
    -webkit-transition: all 0.2s ease-out;
    -o-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
  }

  i::before,
  i::after {
    content: "";
    width: 20px;
    height: 2px;
    background: #fff;
    position: absolute;
    left: 0;
    -moz-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
    -ms-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  i::before {
    top: -7px;
  }

  i::after {
    bottom: -7px;
  }

  &:focus,
  &:hover,
  &:active {
    outline: none;
    border-bottom: none !important;
  }

  ${(props: { active: boolean }) =>
    props.active
      ? ` 
      i::before {
        background: #fff;
      }
  
      i::after {
        background: #fff;
      }
      
      i {
        background: transparent; 
      }

      i::before {
        top: 0;
        -webkit-transform: rotateZ(45deg);
        -moz-transform: rotateZ(45deg);
        -ms-transform: rotateZ(45deg);
        -o-transform: rotateZ(45deg);
        transform: rotateZ(45deg); 
      }

      i::after {
        bottom: 0;
        -webkit-transform: rotateZ(-45deg);
        -moz-transform: rotateZ(-45deg);
        -ms-transform: rotateZ(-45deg);
        -o-transform: rotateZ(-45deg);
        transform: rotateZ(-45deg); 
      }
      `
      : ""}
`;

const MainContainer = styled.div`
  width: 100%;
  float: right;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  transition: all 0.5s ease;

  @media (min-width: 992px) {
    width: 75%;
  }
`;
