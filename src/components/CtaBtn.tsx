import { Link } from "react-router";

function CtaBtn() {
  return (
    <Link
      to="/destination"
      className="cta-btn | font-bellefair relative aspect-square size-full max-w-[17rem] content-center rounded-full bg-white text-center max-lg:mt-16 max-md:mt-[7.375rem] max-md:max-w-36"
    >
      <span className="text-dark-drift text-[2rem] max-md:text-lg">
        EXPLORE
      </span>
    </Link>
  );
}

export default CtaBtn;
