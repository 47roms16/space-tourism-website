import CtaBtn from "../components/CtaBtn";
import TextContent from "../components/TextContent";

function Home() {
  const title = "SPACE";
  const description =
    "Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!";

  return (
    <div className="flex items-center justify-between pt-[26rem] max-lg:flex-col max-lg:pt-32 max-lg:text-center max-md:pt-6">
      <div>
        <p className="text-lavender-blue font-barlow-condensed text-[1.75rem] tracking-[4px] max-md:text-base max-md:tracking-[calc(15*0.01em)]">
          SO, YOU WANT TO TRAVEL TO
        </p>
        <TextContent
          title={title}
          description={description}
          headingClassName="home-h1"
        />
      </div>
      <CtaBtn />
    </div>
  );
}

export default Home;
