import { Technology as TechnologyType } from "../../constants/types";

import { useOutletContext, useParams } from "react-router";

import TextContent from "../TextContent";

function TechnologyDetail() {
  const techData: TechnologyType[] = useOutletContext();
  const params = useParams();

  const tech = techData.find(
    (tech: TechnologyType) => tech.id === params.technologyId,
  );

  return (
    <>
      {tech && (
        <div className="flex items-center justify-between gap-8 pt-[5.75rem] max-lg:flex-col max-lg:gap-10 max-lg:pt-[5.5rem] max-lg:text-center max-md:gap-8">
          <div className="max-lg:order-1">
            <span className="font-bellefair text-[2rem] text-white/50">
              THE TERMINOLOGY…
            </span>
            <TextContent
              title={tech.name}
              description={tech.description}
              headingClassName="technology-h1"
            />
          </div>
          <Image src={tech.images.portrait} altText="img" />
        </div>
      )}
    </>
  );
}

export default TechnologyDetail;

function Image({ src, altText }: { src: string; altText: string }) {
  return (
    <div>
      <img src={src} alt={altText} width={513} height={700} className="" />
    </div>
  );
}
