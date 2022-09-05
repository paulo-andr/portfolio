import { GraphQLClient } from "graphql-request";
import "twin.macro";
import { animated, config, useTransition } from "@react-spring/web";
import { GetServerSideProps } from "next";

import CardImage from "../components/CardImage";

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
  images: [{ id: string; url: string }];
}

const Home = ({ arts }: { arts: IArt[] }) => {
  const transitions = useTransition(arts, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    trail: 100,
    config: config.molasses,
  });

  return (
    <div tw="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-8 px-8">
      {transitions((style, item) => (
        <animated.div key={item.id} style={style}>
          <div tw="grid w-full h-full">
            <CardImage
              key={item.id}
              title={item.title}
              type={item.type}
              tools={item.tools}
              imgUrl={item.cover.url}
              link={`/work/${item.slug}`}
            />
          </div>
        </animated.div>
      ))}
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_URL || "", {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`,
    },
  });

  const { arts } = await hygraph.request(
    `
      {
        arts(orderBy: createdAt_DESC){
          id
          slug
          title
          tools
          type
          cover {
            id
            url
          }
          description {
            text
          }
          images {
            id
            url
          }
        }
      }
    `
  );

  if (!arts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      arts,
    },
  };
};
