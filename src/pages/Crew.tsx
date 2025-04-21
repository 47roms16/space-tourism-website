import { Crew as CrewType } from "../constants/types";

import { NavLink, Outlet, useLoaderData, useLocation } from "react-router";

import SectionLabel from "../components/content/SectionLabel";

function Crew() {
  const crewData = useLoaderData();
  const location = useLocation();

  const isCrewDetailPage = location.pathname.includes("/crew/");

  const label = "MEET YOUR CREW";

  return (
    <>
      <SectionLabel numberText="02" label={label} />
      {!isCrewDetailPage && (
        <ul>
          {crewData.map((crew: CrewType) => (
            <li key={crew.id}>
              <NavLink to={`/crew/${crew.id}`}>{crew.name}</NavLink>
            </li>
          ))}
        </ul>
      )}
      <Outlet context={crewData} />
    </>
  );
}

export default Crew;
