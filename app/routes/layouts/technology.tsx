import { Outlet } from "react-router";
const TechnologyLayout = () => {
  return (
    <>
      <section className="relative z-10 pt-6 md:pt-10 lg:pt-12 h-[calc(100vh-88px)] md:h-[calc(100vh-107px)]">
        <Outlet />
      </section>
    </>
  );
};

export default TechnologyLayout;
