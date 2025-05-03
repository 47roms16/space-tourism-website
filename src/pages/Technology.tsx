import { Technology as TechnologyType } from "../constants/types";

import { NavLink, Outlet, useLoaderData, useLocation } from "react-router";

import SectionLabel from "../components/content/SectionLabel";

function Technology() {
  const techData: TechnologyType[] = useLoaderData();
  const location = useLocation();

  const isTechnologyDetailPage = location.pathname.includes("/technology/");

  const label = "SPACE LAUNCH 101";

  return (
    <>
      <div className="px-40 max-xl:px-16 max-md:px-6">
        <SectionLabel numberText="03" label={label} />
      </div>
      {!isTechnologyDetailPage && (
        <ul>
          {techData.map((crew: TechnologyType) => (
            <li key={crew.id}>
              <NavLink to={`/technology/${crew.id}`}>{crew.name}</NavLink>
            </li>
          ))}
        </ul>
      )}
      <Outlet context={techData} />
    </>
  );
}

export default Technology;
