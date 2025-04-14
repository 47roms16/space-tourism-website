import SectionLabel from "../components/content/SectionLabel";
import TextContent from "../components/TextContent";

function Technology() {
  return (
    <>
      <SectionLabel numberText="03" label="SPACE LAUNCH 101" />
      <div className="flex items-center justify-between gap-8 pt-[5.75rem] max-lg:flex-col max-lg:gap-10 max-lg:pt-[5.5rem] max-lg:text-center max-md:gap-8">
        <div className="max-lg:order-1">
          <span className="font-bellefair text-[2rem] text-white/50">
            THE TERMINOLOGY…
          </span>
          <TextContent
            title={"LAUNCH VEHICLE"}
            description="A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
            headingClassName="technology-h1"
          />
        </div>
        <Image
          src="/assets/technology/image-launch-vehicle-portrait.jpg"
          altText="img"
        />
      </div>
    </>
  );
}

export default Technology;

function Image({ src, altText }: { src: string; altText: string }) {
  return (
    <div>
      <img src={src} alt={altText} width={513} height={700} className="" />
    </div>
  );
}
