import { Route, Routes, useLocation } from "react-router";

import Header from "./components/header/Header";
import SectionLayout from "./components/SectionLayout";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

export default function App() {
  const location = useLocation().pathname;

  const bgClass =
    location === "/destination"
      ? "bg-destination"
      : location === "/crew"
        ? "bg-crew"
        : location === "/technology"
          ? "bg-technology"
          : "bg-home";

  return (
    <div className={`${bgClass} | min-h-dvh bg-cover bg-top max-lg:bg-bottom`}>
      <Header />
      <main className="max-container | px-40 pb-16 max-xl:px-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<SectionLayout />}>
            <Route path="/destination" element={<Destination />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}
