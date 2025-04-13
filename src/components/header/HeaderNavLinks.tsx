import { pageNavLinks } from "../../constants";

import { Link } from "react-router";

function HeaderNavLinks() {
  return (
    <ul className="header-nav-ul | flex gap-12 max-md:flex-col max-md:gap-8">
      {pageNavLinks.map((link) => (
        <li key={link.label} className="header-nav-li">
          <Link
            to={link.href}
            className="header-nav-link | font-barlow-condensed block py-[2.375rem] tracking-[2px] text-white uppercase max-md:py-0"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default HeaderNavLinks;
