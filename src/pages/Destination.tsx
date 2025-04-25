import { Destination as DestinationType } from "@/constants/types";

import { useState, useEffect } from "react";
import { NavLink, Outlet, useLoaderData, useLocation } from "react-router";

import SectionLabel from "../components/content/SectionLabel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/Carousel";

function Destination() {
  const planetData = useLoaderData() as DestinationType[];
  const location = useLocation();

  const isPlanetDetailPage = location.pathname.includes("/destination/");

  const label = "PICK YOUR DESTINATION";

  return (
    <>
      <SectionLabel numberText="01" label={label} />
      {!isPlanetDetailPage && (
        <section className="pt-10">
          <h1 className="destination-main-h1 | text-center">
            Planet Destination
          </h1>
          <DestinationCarousel planetData={planetData} />
        </section>
      )}
      <Outlet context={planetData} />
    </>
  );
}

export default Destination;

function DestinationCarousel({
  planetData,
}: {
  planetData: DestinationType[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
  }, [api]);

  return (
    <div className="flex items-center pt-7">
      <Carousel opts={{ loop: true }} setApi={setApi}>
        <CarouselContent>
          {planetData.map((planet: DestinationType, index: number) => (
            <CarouselItem
              key={planet.id}
              className="max-w-fit basis-1/2 max-lg:basis-full"
            >
              <NavLink to={`/destination/${planet.id}`}>
                <figure
                  className={`${currentIndex !== index && "scale-50 opacity-50"} block transition-all`}
                >
                  <img
                    src={planet.images.png}
                    alt={`Image of ${planet.name} planet`}
                    className="mb-10"
                  />
                  <figcaption className="text-lavender-blue font-barlow-condensed block text-center text-3xl uppercase max-sm:text-base">
                    {planet.name}
                  </figcaption>
                </figure>
              </NavLink>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-16 cursor-pointer p-7 active:opacity-50 max-xl:left-0 max-xl:p-4 max-lg:-left-5 max-sm:-left-10" />
        <CarouselNext className="-right-16 cursor-pointer p-7 active:opacity-50 max-xl:right-0 max-xl:p-4 max-lg:-right-5 max-sm:-right-10" />
      </Carousel>
    </div>
  );
}
