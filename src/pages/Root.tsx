import { Outlet, useLocation } from "react-router";
import Header from "../components/header/Header";

function Root() {
  const location = useLocation();

  const bgClass = location.pathname.startsWith("/destination")
    ? "bg-destination"
    : location.pathname.startsWith("/crew")
      ? "bg-crew"
      : location.pathname.startsWith("/technology")
        ? "bg-technology"
        : "bg-home";

  return (
    <div className={`${bgClass} | min-h-dvh bg-cover bg-top max-lg:bg-bottom`}>
      <Header />
      <main className="max-container | max-lg:pt-10 max-md:pt-12">
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
