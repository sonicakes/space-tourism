import { Outlet } from "react-router";
import Hero from "~/components/Hero";
const HomeLayout = () => {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 my-8">
        <Outlet />
        <Hero />
      </section>
    </>
  );
};

export default HomeLayout;
