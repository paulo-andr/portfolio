import { GraphQLClient } from "graphql-request";

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
  images: [{ id: string; url: string }];
}

const SingleArt = ({ art }: { art: IArt }) => {
  return (
    <div tw="">
      <h1>{art.title}</h1>
      <p>{art.description.text}</p>
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
        }
      }
    }
  `,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      art,
    },
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
    fallback: false,
  };
}
