import type { NextPage } from "next";
import tw, { styled } from "twin.macro";
import { animated, config, useTransition } from "@react-spring/web";

const Contacts: NextPage = () => {
  const transition1 = useTransition(true, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 500,
    config: config.molasses,
  });

  const transition2 = useTransition(true, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 1000,
    config: config.molasses,
  });

  return (
    <Container>
      <div tw="w-full mr-auto ml-auto pr-0 pl-0">
        <div tw="flex flex-col items-center justify-center">
          <div tw="flex w-full lg:max-w-[70%]">
            {transition1(
              (style, item) =>
                item && (
                  <animated.div style={style}>
                    <div tw="p-6" className="text">
                      <h2 tw="mb-4 text-center font-kanitBold">
                        Follow my<span>&nbsp;Work</span>&nbsp;, or
                        <span>&nbsp;Contact</span>&nbsp;me through the links
                        available down below
                      </h2>
                    </div>
                  </animated.div>
                )
            )}
          </div>
          <div tw="flex justify-center mt-20">
            {transition1(
              (style, item) =>
                item && (
                  <animated.div style={style}>
                    <ContactsContainer>
                      <div tw="flex justify-start w-full font-poppins">
                        <div>
                          <img
                            className="contacts-icon"
                            src="icons/envelope-solid.svg"
                            alt="envelope"
                          />
                        </div>
                        <div className="contacts-text">
                          <a href="mailto: p96andrade@gmail.com">
                            p96andrade@gmail.com
                          </a>
                        </div>
                      </div>
                      <div tw="flex justify-start w-full font-poppins">
                        <div>
                          <img
                            className="contacts-icon"
                            src="icons/artstation.svg"
                            alt="artstation"
                          />
                        </div>
                        <div className="contacts-text">
                          <a
                            href="https://www.artstation.com/paulo_andrade_art"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            /paulo_andrade_art
                          </a>
                        </div>
                      </div>
                      <div tw="flex justify-start w-full font-poppins">
                        <div>
                          <img
                            className="contacts-icon"
                            src="icons/behance.svg"
                            alt="behance"
                          />
                        </div>
                        <div className="contacts-text">
                          <a
                            href="https://www.behance.net/paulo_andrade_art"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            /paulo_andrade_art
                          </a>
                        </div>
                      </div>
                      <div tw="flex justify-start w-full font-poppins">
                        <div>
                          <img
                            className="contacts-icon"
                            src="icons/fa-ig.svg"
                            alt="ig"
                          />
                        </div>
                        <div className="contacts-text">
                          <a
                            href="https://www.instagram.com/paulo_andrade_art"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            /paulo_andrade_art
                          </a>
                        </div>
                      </div>
                    </ContactsContainer>
                  </animated.div>
                )
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contacts;

const Container = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  padding: 5em 0;
  position: relative;
  padding-top: 0;
  padding-bottom: 0;

  @media (max-width: 991.98px) {
    margin-bottom: 24px;
  }

  .img {
    width: 100%;
    display: block;
  }

  .text h2 {
    font-size: 40px;
    line-height: 1.2;
    color: #fff;
  }

  .text h2 span {
    font-weight: 900;
    color: #5271ff;
  }
`;

const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  height: 10rem;

  .contacts-text {
    padding-left: 2.5rem;
    z-index: 2;
  }

  .contacts-icon {
    width: 32px;
    height: 32px;
    z-index: 1;
  }

  a {
    color: #5271ff;
    text-decoration: underline;

    &:hover {
      cursor: pointer;
    }
  }
`;
