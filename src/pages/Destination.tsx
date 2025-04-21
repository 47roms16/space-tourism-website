import { Destination as DestinationType } from "../constants/types";
import { NavLink, Outlet, useLoaderData, useLocation } from "react-router";

import SectionLabel from "../components/content/SectionLabel";

function Destination() {
  const planetData = useLoaderData();
  const location = useLocation();

  const isPlanetDetailPage = location.pathname.includes("/destination/");

  const label = "PICK YOUR DESTINATION";

  return (
    <>
      <SectionLabel numberText="01" label={label} />
      {!isPlanetDetailPage && (
        <ul>
          {planetData.map((planet: DestinationType) => (
            <li key={planet.id}>
              <NavLink to={`/destination/${planet.id}`}>{planet.name}</NavLink>
            </li>
          ))}
        </ul>
      )}
      <Outlet context={planetData} />
    </>
  );
}

export default Destination;
