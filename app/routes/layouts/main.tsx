import { Outlet } from "react-router";
const MainLayout = () => {
  return (
    <>
      <section className="relative z-10 max-w-6xl mx-auto pt-6 md:pt-10 lg:pt-12 px-6 md:px-10 lg:px-16 xl:px-0 h-[calc(100vh-88px)] md:h-[calc(100vh-107px)]">
        <Outlet />
      </section>
    </>
  );
};

export default MainLayout;
