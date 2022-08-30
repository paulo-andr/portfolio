import tw, { styled } from "twin.macro";
import Link from "next/link";
import { useHover } from "usehooks-ts";
import { useRef } from "react";

interface IProps {
  title: string;
  type: string;
  tools: string;
  imgUrl: string;
  link?: string;
}

const CardImage = ({ title, type, tools, imgUrl, link }: IProps) => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);

  return (
    <CardContainer>
      <div tw="h-[70%] w-full overflow-hidden">
        <BackgroundImage src={imgUrl} contain={false} zoom={isHover} />
      </div>
      <div tw="h-[30%] flex flex-col items-center justify-between text-center m-4">
        <div>
          <p tw="text-xl font-abril text-white">{title}</p>
          <p tw="uppercase text-xs my-2 font-bold">{type}</p>
          <p tw="text-gray-50 mb-6 text-xs">{tools}</p>
        </div>
        <div>
          {link && (
            <Link href={link}>
              <a
                ref={hoverRef}
                tw="bg-black hover:bg-black/30 hover:cursor-pointer focus:ring-black mb-2 px-8 py-2.5 text-white focus:outline-none focus:ring-4 transition duration-500"
              >
                View
              </a>
            </Link>
          )}
        </div>
      </div>
    </CardContainer>
  );
};

export default CardImage;

const BackgroundImage = styled.div`
  background: ${(props: { src: string }) => `url(${props.src});`}
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: ${(props: { contain: boolean }) =>
    props.contain ? "contain" : "cover"};
  background-position: center;
  transition: all .5s;
  transform: ${(props: { zoom: boolean }) =>
    props.zoom ? "scale(1.2);" : "scale(1);"}
`;

const CardContainer = styled.div`
  ${tw`min-h-[35rem] border-black border relative flex flex-col items-center`}
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
