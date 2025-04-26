import { ReactNode } from "react";

function SectionLayout({ children }: { children: ReactNode }) {
  return (
    <section className="px-40 max-xl:px-16 max-md:px-6">{children}</section>
  );
}

export default SectionLayout;
