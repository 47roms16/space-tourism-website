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
        <div className="flex items-center justify-between gap-16 pt-20 max-lg:flex-col max-lg:gap-8 max-lg:pt-16 max-lg:text-center max-md:gap-9">
          <div>
            <span className="font-bellefair text-[2rem] text-white/50 uppercase">
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
      )}
    </>
  );
}

export default CrewDetail;

function Pagination({ data }: { data: CrewType[] }) {
  const crewData = data;
  return (
    <ul className="flex justify-center gap-10">
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
