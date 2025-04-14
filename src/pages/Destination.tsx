import { NavLinkType } from "../constants/types";
import { Link } from "react-router";

import { destinationLinks } from "../constants";

import SectionLabel from "../components/content/SectionLabel";
import TextContent from "../components/TextContent";

function Destination() {
  const label = "PICK YOUR DESTINATION";
  const title = "moon";
  const description =
    " See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";

  return (
    <>
      <SectionLabel numberText="01" label={label} />
      <div className="flex items-center gap-[6.75rem] pt-[9.75rem] max-xl:gap-10 max-lg:flex-col max-lg:gap-[5.25rem] max-lg:pt-16 max-lg:text-center max-md:gap-14">
        <Image
          src="/assets/destination/image-moon.webp"
          altText="A simple depiction of the moon"
        />
        <div>
          <DestinationNav />
          <TextContent
            title={title}
            description={description}
            headingClassName="destination-h1"
          />
          <hr className="border-grey/50 my-10" />
          <PlanetStats />
        </div>
      </div>
    </>
  );
}

export default Destination;

function Image({ src, altText }: { src: string; altText: string }) {
  return (
    <div className="flex-1">
      <img
        src={src}
        alt={altText}
        width={445}
        height={445}
        className="aspect-square w-[30rem] max-lg:max-w-[18.75rem] max-sm:max-w-[9.375rem]"
      />
    </div>
  );
}

function DestinationNav() {
  return (
    <nav className="mb-[3.25rem]">
      <ul className="font-barlow-condensed text-lavender-blue flex gap-8 tracking-[2px] uppercase max-lg:justify-center">
        {destinationLinks.map((link: NavLinkType) => (
          <li key={link.label}>
            <Link to={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function PlanetStats() {
  return (
    <div className="flex gap-[5.75rem] max-lg:justify-center max-md:flex-col max-md:gap-6">
      <div>
        <h2 className="text-lavender-blue font-barlow-condensed text-sm tracking-[2px]">
          AVG. DISTANCE
        </h2>
        <p className="font-bellefair text-[1.75rem] text-white">384,400 km</p>
      </div>
      <div>
        <h2 className="text-lavender-blue font-barlow-condensed text-sm tracking-[2px]">
          EST. TRAVEL TIME
        </h2>
        <p className="font-bellefair text-[1.75rem] text-white">3 days</p>
      </div>
    </div>
  );
}
