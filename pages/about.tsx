import type { NextPage } from "next";
import tw, { styled } from "twin.macro";
import { animated, config, useTransition } from "@react-spring/web";

const About: NextPage = () => {
  const transition = useTransition(true, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 500,
    config: config.molasses,
  });

  return (
    <Container>
      <div tw="w-full mr-auto ml-auto pr-0 pl-0">
        <div tw="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <ImageContainer imgSrc="img/about.jpg">
              <img
                id="div-mobile"
                className="fa-chevron-down"
                src="icons/chevron-down-solid.svg"
                alt="arrow down"
              />
            </ImageContainer>
          </div>
          <div tw="flex items-center">
            {transition(
              (style, item) =>
                item && (
                  <animated.div style={style}>
                    <div tw="p-6 lg:pr-16" className="text">
                      <h2 tw="mb-4">
                        Hello! I&apos;m<span>&nbsp;Paulo Andrade</span>&nbsp;
                        currently working as a Freelancer
                      </h2>
                      <p tw="mb-4" className="text">
                        At the start of 2020 I decided to express my love for
                        video games and the digital arts, by becoming a
                        self-taught Blender and Substance 3D artist in my spare
                        time.
                      </p>
                      <p tw="mb-12" className="text">
                        More recently, I enrolled in a course where I studied
                        the fundamentals of drawing, character and scenery
                        design. I covered most of the basics of Maya and Zbrush,
                        organic and non-organic modeling, Re-topology, UV&apos;s
                        and texturing.
                      </p>
                      <p className="text">
                        Also had to struggle a bit with HTML and CSS to redo the
                        original template for this website!
                      </p>
                    </div>
                  </animated.div>
                )
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;

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
    font-family: "AbrilFatface";
    line-height: 1.2;
    color: #fff;
  }

  .text h2 span {
    font-weight: 900;
    color: #5271ff;
  }
`;

const ImageContainer = styled.div`
  background-image: ${(props: { imgSrc: string }) => `url(${props.imgSrc})`};
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  align-self: stretch;
  align-items: center;
  height: 100vh;

  @media screen and (min-width: 701px) {
    #div-mobile {
      display: none;
    }
    #div-desktop {
      display: block;
    }
  }

  img {
    display: block;
  }

  .fa-chevron-down {
    color: #5271ff;
    position: absolute;
    bottom: 2.5%;
    left: 50%;
    transform: translateX(-50%);
    width: 32px;
    height: 32px;
  }
`;
