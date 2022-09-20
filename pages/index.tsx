import "twin.macro";
import tw, { styled } from "twin.macro";

const Home = () => {
  return (
    <section tw="flex flex-col justify-center items-center h-screen">
      <h1 tw="text-center mb-10 font-exoBold text-5xl lg:text-7xl opacity-70">
        Coming <br /> Soon
      </h1>
      <p tw="text-center mb-4 font-exoBold text-2xl lg:text-4xl opacity-70">
        Paulo Andrade
      </p>
      <p tw="text-center mb-4 font-exo text-xl lg:text-2xl opacity-70">
        3D Artist
      </p>
      <LinksContainer>
        <a tw="mx-2" href="mailto: p96andrade@gmail.com">
          <img
            style={{ color: "white" }}
            src="icons/envelope-solid.svg"
            alt="envelope"
            width={32}
            height={32}
          />
        </a>
        <a
          tw="mx-2"
          href="https://www.artstation.com/paulo_andrade_art"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            style={{ color: "white" }}
            src="icons/artstation.svg"
            alt="artstation"
            width={32}
            height={32}
          />
        </a>
      </LinksContainer>
    </section>
  );
};

export default Home;

const LinksContainer = styled.div`
  ${tw`flex justify-center opacity-70`}

  img {
    filter: invert(100%) sepia(7%) saturate(0%) hue-rotate(267deg)
      brightness(110%) contrast(100%);
  }
`;
