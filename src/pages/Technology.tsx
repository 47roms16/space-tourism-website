import { Technology as TechnologyType } from "../constants/types";

import { Navigate, Outlet, useLoaderData, useLocation } from "react-router";

import SectionLabel from "../components/content/SectionLabel";

function Technology() {
  const techData: TechnologyType[] = useLoaderData();
  const location = useLocation();

  const label = "SPACE LAUNCH 101";

  const isBaseTechnologyRoute =
    location.pathname === "/technology" || location.pathname === "/technology/";

  if (isBaseTechnologyRoute && techData.length > 0) {
    const firstDataId = techData[0].id;
    return <Navigate to={`/technology/${firstDataId}`} />;
  }

  return (
    <>
      <div className="tech-fade | px-40 max-xl:px-16 max-md:px-6">
        <SectionLabel numberText="03" label={label} />
      </div>
      <Outlet context={techData} />
    </>
  );
}

export default Technology;
