import { GraphQLClient } from "graphql-request";
import getConfig from "next/config";
import "twin.macro";

import CardImage from "../components/CardImage";

const { publicRuntimeConfig } = getConfig();

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
  return (
    <div tw="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-8">
      {arts.map((art) => (
        <CardImage
          key={art.id}
          title={art.title}
          type={art.type}
          tools={art.tools}
          imgUrl={art.cover.url}
          link={`${publicRuntimeConfig.basePath}work/${art.slug}`}
        />
      ))}
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_URL || "", {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`,
    },
  });

  const { arts } = await hygraph.request(
    `
      {
        arts {
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

  return {
    props: {
      arts,
    },
  };
}
