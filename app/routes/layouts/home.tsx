import { Outlet } from "react-router";
import Hero from "~/components/Hero";

const HomeLayout = () => {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 my-8 lg:px-16 xl:px-0">
      <Outlet />
      <Hero />
    </section>
  );
};

export default HomeLayout;
