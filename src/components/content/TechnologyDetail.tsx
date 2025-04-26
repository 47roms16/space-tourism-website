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
          <Pagination data={techData} />
          <div className="max-lg:order-1 max-lg:px-10 max-sm:px-6">
            <span className="font-bellefair text-[2rem] text-white/50">
              THE TERMINOLOGY…
            </span>
            <TextContent
              title={tech.name}
              description={tech.description}
              headingClassName="technology-h1"
            />
          </div>
          <Image images={tech.images} name={tech.name} />
        </div>
      )}
    </>
  );
}

export default TechnologyDetail;

function Pagination({ data }: { data: TechnologyType[] }) {
  const techData = data;
  return (
    <ul className="flex flex-col gap-8 max-lg:order-1 max-lg:flex-row max-lg:gap-4">
      {techData.map((tech: TechnologyType, index) => (
        <li key={tech.id}>
          <NavLink
            to={`/technology/${tech.id}`}
            className="technology-pagination | flex size-20 items-center justify-center rounded-full max-lg:size-14 max-sm:size-10"
          >
            <span className="font-bellefair text-[2rem] max-lg:text-2xl max-sm:text-lg">
              {index + 1}
            </span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

type ImageProps = Pick<TechnologyType, "images" | "name">;

function Image({ images, name }: ImageProps) {
  const { portrait, landscape } = images;

  return (
    <div>
      <picture>
        <source srcSet={landscape} media="(max-width:1024px)" />
        <img srcSet={portrait} alt={`Image of ${name}`} className="" />
      </picture>
    </div>
  );
}
