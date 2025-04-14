import { Outlet } from "react-router";

function SectionLayout() {
  return (
    <div className="pt-12">
      <Outlet />
    </div>
  );
}

export default SectionLayout;
