import { Destination as DestinationType } from "../../constants/types";
import { NavLink, useOutletContext, useParams } from "react-router";

import TextContent from "../TextContent";
import { PlanetModel } from "@/models/PlanetModel";
import { Canvas } from "@react-three/fiber";

function PlanetDetail() {
  const planetData: DestinationType[] = useOutletContext();
  const params = useParams();

  const planet = planetData.find(
    (planet: DestinationType) => planet.id === params.planetId,
  );

  return (
    <>
      {planet && (
        <div className="flex items-center pt-[9.75rem] max-2xl:gap-10 max-lg:flex-col max-lg:gap-[5.25rem] max-lg:pt-16 max-lg:text-center max-md:gap-14">
          <figure className="figure-3d fade | relative flex-1">
            <Canvas className="aspect-square max-w-[30rem] max-lg:max-w-[18.75rem] max-sm:max-w-[9.375rem]">
              <ambientLight intensity={1.5} />
              <PlanetModel modelPath={planet.modelPath} />
            </Canvas>
            <figcaption className="credit-text | bg-dark-drift/50 absolute bottom-0 max-w-[50ch] rounded-2xl p-2 text-white opacity-0 transition-opacity duration-500">
              {planet.credit}
            </figcaption>
          </figure>

          <div className="flex-1">
            <DestinationNav data={planetData} />
            <div className="fade">
              <TextContent
                title={planet.name}
                description={planet.description}
                headingClassName="destination-h1"
              />
              <hr className="border-grey/50 my-10" />
              <PlanetStats distance={planet.distance} travel={planet.travel} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PlanetDetail;

function DestinationNav({ data }: { data: DestinationType[] }) {
  return (
    <nav className="mb-[3.25rem]">
      <ul className="font-barlow-condensed text-lavender-blue flex gap-8 tracking-[2px] uppercase max-lg:justify-center">
        {data.map((planet: DestinationType) => (
          <li key={planet.id}>
            <NavLink
              to={`/destination/${planet.id}`}
              className="destination-nav-link | relative"
            >
              {planet.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function PlanetStats({
  distance,
  travel,
}: Pick<DestinationType, "distance" | "travel">) {
  return (
    <div className="flex gap-[5.75rem] max-lg:justify-center max-md:flex-col max-md:gap-6">
      <div>
        <h2 className="text-lavender-blue font-barlow-condensed text-sm tracking-[2px]">
          AVG. DISTANCE
        </h2>
        <p className="font-bellefair text-[1.75rem] text-white">{distance}</p>
      </div>
      <div>
        <h2 className="text-lavender-blue font-barlow-condensed text-sm tracking-[2px]">
          EST. TRAVEL TIME
        </h2>
        <p className="font-bellefair text-[1.75rem] text-white">{travel}</p>
      </div>
    </div>
  );
}
