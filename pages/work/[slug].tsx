import { GraphQLClient } from "graphql-request";
import { useEffect, useRef, useState } from "react";
import "twin.macro";
import { animated, config, useTransition } from "@react-spring/web";
import { useMediaQuery } from "usehooks-ts";
import Lightbox from "react-image-lightbox";

import createTripleSlider from "../../components/Slider";

const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_URL || "", {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`,
  },
});

interface IArt {
  id: string;
  slug: string;
  title: string;
  tools: string;
  type: string;
  cover: {
    id: string;
    url: string;
  };
  description: {
    text: string;
  };
  images: [{ id: string; url: string; mimeType: string }];
}

const SingleArt = ({ art }: { art: IArt }) => {
  const [fullImage, setFullImage] = useState({ index: 0, open: false });
  const isMobile = useMediaQuery("(max-width: 991px)");

  const transition = useTransition(true, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 1000,
    config: config.molasses,
  });

  useEffect(() => {
    const sliderEl = document.querySelector(".triple-slider");
    const slider = createTripleSlider(sliderEl);

    slider.on("click", function (e: any) {
      setFullImage({ index: e.realIndex, open: true });
    });
  }, [art.images]);

  return (
    <div tw="my-8 px-8">
      <h1 tw="text-5xl font-kanit text-white mb-6 font-kanitBold">
        {art.title}
      </h1>
      <p tw="mb-6 font-poppins">{art.description.text}</p>
      {transition(
        (style, item) =>
          item && (
            <animated.div style={style}>
              <div tw="mb-10" className="triple-slider">
                <div className="swiper">
                  <div className="swiper-wrapper">
                    {art.images.map((d) => (
                      <div key={d.id} className="swiper-slide">
                        {d.mimeType === "image/jpeg" ? (
                          <img className="bg-image" src={d.url} alt="" />
                        ) : (
                          <video tw="w-full h-full" loop muted autoPlay>
                            <source src={d.url} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        )}
                      </div>
                    ))}
                  </div>
                  {isMobile && (
                    <>
                      <div className="swiper-button-next"></div>
                      <div className="swiper-button-prev"></div>
                    </>
                  )}
                </div>
              </div>
            </animated.div>
          )
      )}
      {fullImage.open && (
        <Lightbox
          mainSrc={art.images[fullImage.index].url}
          nextSrc={art.images[(fullImage.index + 1) % art.images.length].url}
          prevSrc={
            art.images[
              (fullImage.index + art.images.length - 1) % art.images.length
            ].url
          }
          onCloseRequest={() => setFullImage({ index: 0, open: false })}
          onMovePrevRequest={() =>
            setFullImage((prevState) => ({
              ...prevState,
              index:
                (prevState.index + art.images.length - 1) % art.images.length,
            }))
          }
          onMoveNextRequest={() =>
            setFullImage((prevState) => ({
              ...prevState,
              index: (prevState.index + 1) % art.images.length,
            }))
          }
        />
      )}
    </div>
  );
};

export default SingleArt;

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { art } = await hygraph.request(
    `
    query ArtQuery($slug: String!) {
      art(where: { slug: $slug }) {
        title
        description {
          text
        }
        images {
          id
          url
          mimeType
        }
      }
    }
  `,
    {
      slug: params.slug,
    }
  );

  if (!art) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      art,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const { arts } = await hygraph.request(`
    {
      arts {
        slug
        title
      }
    }
  `);

  return {
    paths: arts.map(({ slug }: { slug: string }) => ({
      params: { slug },
    })),
    fallback: "blocking",
  };
}
