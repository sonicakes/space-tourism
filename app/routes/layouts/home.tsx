import { Outlet } from "react-router";
import Hero from "~/components/Hero";

const HomeLayout = () => {
  return (
    <section className="relative lg:-top-26.75 z-10 max-w-6xl mx-auto pt-6 md:pt-0 px-6 md:px-10 lg:px-16 xl:px-0 flex flex-col md:items-center md:justify-center lg:items-end lg:justify-end h-[calc(100vh-88px)] md:h-[calc(100vh-107px)]">
      <Outlet />
      <Hero />
    </section>
  );
};

export default HomeLayout;
