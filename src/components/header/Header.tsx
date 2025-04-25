import { Link } from "react-router";
import HeaderNavLinks from "./HeaderNavLinks";
import NavButton from "./NavButton";
import Line from "../Line";

function Header() {
  return (
    <header className="mx-auto max-w-[96rem] pt-10 max-2xl:pl-16 max-lg:pt-0 max-lg:pl-10 max-md:px-6 max-md:pt-6">
      <nav className="flex items-center justify-between">
        <Link to="/">
          <svg className="aspect-square w-12 max-md:max-w-10">
            <use href="/assets/shared/logo.svg#logo"></use>
          </svg>
        </Link>
        <Line />
        {/* Mobile navigation menu button */}
        <NavButton src="/assets/shared/icon-hamburger.svg#icon-hamburger" />
        <div className="bg-white/5 pr-16 pl-40 backdrop-blur-xl max-lg:pr-10 max-lg:pl-[5.5rem] max-md:fixed max-md:top-0 max-md:right-0 max-md:bottom-0 max-md:z-50 max-md:hidden max-md:w-full max-md:max-w-96 max-md:pt-8 max-md:pr-0 max-md:pl-8 max-sm:max-w-64">
          <div className="flex justify-end pr-5 max-md:mb-20">
            {/* Mobile navigation close menu button */}
            <NavButton src="/assets/shared/icon-close.svg#icon-close" />
          </div>
          <HeaderNavLinks />
        </div>
      </nav>
    </header>
  );
}

export default Header;
