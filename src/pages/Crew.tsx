import SectionLabel from "../components/content/SectionLabel";
import TextContent from "../components/TextContent";

function Crew() {
  const label = "MEET YOUR CREW";
  const title = "Douglass Hurley";
  const description =
    "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
  return (
    <>
      <SectionLabel numberText="02" label={label} />
      <div className="flex items-center justify-between gap-16 max-lg:flex-col max-lg:gap-8 max-lg:pt-16 max-lg:text-center max-md:gap-9">
        <div>
          <span className="font-bellefair text-[2rem] text-white/50">
            COMMANDER
          </span>
          <TextContent
            title={title}
            description={description}
            headingClassName="crew-h1"
          />
        </div>
        <Image src="/assets/crew/image-douglas-hurley.webp" altText="img" />
      </div>
    </>
  );
}

export default Crew;

function Image({ src, altText }: { src: string; altText: string }) {
  return (
    <div>
      <img src={src} alt={altText} width={513} height={700} className="" />
    </div>
  );
}
