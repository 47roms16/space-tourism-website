import { Crew as CrewType } from "../../constants/types";

import { NavLink, useOutletContext, useParams } from "react-router";

import TextContent from "../TextContent";

function CrewDetail() {
  const crewData: CrewType[] = useOutletContext();
  const params = useParams();

  const crew = crewData.find((crew: CrewType) => crew.id === params.crewId);

  return (
    <>
      {crew && (
        <div className="flex min-h-[43.75rem] justify-between gap-8 max-lg:flex-col max-lg:gap-8 max-lg:pt-16 max-lg:text-center max-md:gap-9">
          <div className="flex flex-col justify-between max-lg:items-center max-lg:gap-14 lg:pt-32 lg:pb-12">
            <div className="fade">
              <span className="fade | font-bellefair mb-4 inline-block text-[2rem] text-white/50 uppercase">
                {crew.role}
              </span>
              <TextContent
                title={crew.name}
                description={crew.bio}
                headingClassName="crew-h1"
              />
            </div>
            <Pagination data={crewData} />
          </div>
          <picture className="fade | before:from-dark-drift/10 before:to-dark-drift relative self-end before:absolute before:inset-x-0 before:bottom-0 before:h-[10%] before:w-full before:bg-gradient-to-b">
            <source srcSet={crew.images.webp} />
            <img src={crew.images.png} alt={`Image of ${crew.name}`} />
          </picture>
        </div>
      )}
    </>
  );
}

export default CrewDetail;

function Pagination({ data }: { data: CrewType[] }) {
  const crewData = data;
  return (
    <ul className="flex gap-10">
      {crewData.map((crew: CrewType) => (
        <li key={crew.id}>
          <NavLink
            to={`/crew/${crew.id}`}
            className="crew-pagination-link | block size-[15px] rounded-full"
          ></NavLink>
        </li>
      ))}
    </ul>
  );
}
