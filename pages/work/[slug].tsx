import { GraphQLClient } from "graphql-request";
import { useEffect, useState } from "react";
import "twin.macro";
import { animated, config, useTransition } from "@react-spring/web";

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
  const transition = useTransition(true, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 1000,
    config: config.molasses,
    reset: true,
  });

  useEffect(() => {
    const sliderEl = document.querySelector(".triple-slider");

    createTripleSlider(sliderEl);
  }, [art.images]);

  return (
    <div tw="my-8 px-8">
      <h1 tw="text-5xl font-abril text-white mb-6">{art.title}</h1>
      <p tw="mb-6">{art.description.text}</p>
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
                </div>
              </div>
            </animated.div>
          )
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
