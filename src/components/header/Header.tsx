import gsap from "gsap";

import { useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

import { Link } from "react-router";
import NavButton from "./NavButton";
import Line from "../Line";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const smallScreen = useMediaQuery("(max-width: 767px)");

  const handleNavToggleClick = () => {
    if (!isNavOpen) {
      setIsNavOpen(true);

      gsap.to(".slide", { x: 0, duration: 0.6, ease: "power3.out" });
    } else {
      gsap.to(".slide", {
        x: "100%",
        duration: 0.6,
        ease: "power3.out",
        onComplete: () => setIsNavOpen(false),
      });
    }
  };

  return (
    <header className="mx-auto max-w-[96rem] pt-10 max-2xl:pl-16 max-lg:pt-0 max-lg:pl-10 max-md:px-6 max-md:pt-6">
      <nav className="flex items-center justify-between">
        <Link to="/">
          <svg className="aspect-square w-12 max-md:max-w-10">
            <use href="/assets/shared/logo.svg#logo" />
          </svg>
        </Link>
        <Line />

        {/* Mobile navigation menu button */}
        <NavButton
          src="/assets/shared/icon-hamburger.svg#icon-hamburger"
          handleClick={handleNavToggleClick}
        />

        {smallScreen ? (
          <MobileNav handleClick={handleNavToggleClick} isOpen={isNavOpen} />
        ) : (
          <DesktopNav />
        )}
      </nav>
    </header>
  );
}

export default Header;
