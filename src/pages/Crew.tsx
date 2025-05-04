import { Crew as CrewType } from "../constants/types";

import { NavLink, Outlet, useLoaderData, useLocation } from "react-router";

import SectionLayout from "@/components/SectionLayout";
import SectionLabel from "../components/content/SectionLabel";

function Crew() {
  const crewData = useLoaderData();
  const location = useLocation();

  const isCrewDetailPage = location.pathname.includes("/crew/");

  const label = "MEET YOUR CREW";

  return (
    <SectionLayout>
      <div className="fade">
        <SectionLabel numberText="02" label={label} />
      </div>
      {!isCrewDetailPage && (
        <section className="pt-10">
          <h1 className="crew-h1 fade | text-center">Crew Members</h1>
          <CrewList crewData={crewData} />
        </section>
      )}
      <Outlet context={crewData} />
    </SectionLayout>
  );
}

export default Crew;

function CrewList({ crewData }: { crewData: CrewType[] }) {
  const crews = crewData;

  return (
    <ul className="flex flex-wrap justify-evenly gap-2 pt-10">
      {crews.map((crew: CrewType) => (
        <li
          key={crew.id}
          className="crew-link | max-w-1/5 min-w-48 gap-5 p-1 transition-all duration-200 hover:scale-90 max-lg:max-w-1/4 max-sm:max-w-fit"
        >
          <NavLink to={`/crew/${crew.id}`}>
            <div className="border-lavender-blue relative rounded-3xl border-2 bg-white/5 backdrop-blur-sm">
              <div className="px-2 pt-2">
                <div className="border-lavender-blue rounded-2xl border-2 pt-2">
                  <h2 className="font-barlow-condensed mb-5 min-h-16 text-center text-2xl font-semibold text-white uppercase">
                    {crew.role}
                  </h2>
                  <picture className="before:from-dark-drift/10 before:to-dark-drift relative block before:absolute before:inset-x-0 before:bottom-0 before:h-[30%] before:w-full before:rounded-2xl before:bg-gradient-to-b">
                    <source srcSet={crew.images.webp} type="image/webp" />
                    <img
                      srcSet={crew.images.png}
                      alt={`Image of ${crew.name}`}
                      className="aspect-[3/4] w-full max-w-2xs object-contain"
                    />
                  </picture>
                </div>
              </div>
              <h3 className="bg-dark-drift/20 rounded-b-3xl py-1 text-center text-xl text-white backdrop-blur-sm">
                {crew.name}
              </h3>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
