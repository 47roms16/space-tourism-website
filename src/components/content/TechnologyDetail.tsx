import { Technology as TechnologyType } from "../../constants/types";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import {
  NavLink,
  useLocation,
  useOutletContext,
  useParams,
} from "react-router";

import TextContent from "../TextContent";
import Errorpage from "@/pages/Errorpage";

function TechnologyDetail() {
  const techData: TechnologyType[] = useOutletContext();
  const params = useParams();
  const location = useLocation();

  const tech = techData.find(
    (tech: TechnologyType) => tech.id === params.technologyId,
  );

  useGSAP(() => {
    gsap.from(".tech-fade", { opacity: 0.3, duration: 0.6 });
  }, [location]);

  return (
    <section className="tech-fade | pt-[5.75rem] pb-16 pl-40 max-lg:px-0 max-lg:pt-[5.5rem]">
      {tech ? (
        <div className="flex items-center justify-between gap-8 max-lg:flex-col max-lg:gap-10 max-lg:text-center max-md:gap-8">
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
      ) : (
        <Errorpage />
      )}
    </section>
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
