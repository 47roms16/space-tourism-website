import HeaderNavLinks from "./HeaderNavLinks";
import NavButton from "./NavButton";

function MobileNav({
  isOpen,
  handleClick,
}: {
  isOpen: boolean;
  handleClick: () => void;
}) {
  return (
    <>
      <div
        onClick={handleClick}
        className={`${isOpen ? "block" : "hidden"} fixed inset-0 z-10`}
      />
      <div
        className={`${!isOpen && "hidden"} slide | z-50 translate-x-full bg-white/5 backdrop-blur-xl max-md:fixed max-md:top-0 max-md:right-0 max-md:bottom-0 max-md:z-50 max-md:w-full max-md:max-w-96 max-md:pt-8 max-md:pr-0 max-md:pl-8 max-sm:max-w-64`}
      >
        <div className="flex justify-end pr-5 max-md:mb-20">
          <NavButton
            src="/assets/shared/icon-close.svg#icon-close"
            handleClick={handleClick}
          />
        </div>
        <HeaderNavLinks />
      </div>
    </>
  );
}

export default MobileNav;
