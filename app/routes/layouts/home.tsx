import { Outlet } from "react-router";
import Hero from "~/components/Hero";
const textContent="Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this worldexperience!"

const HomeLayout = () => {
  return (
    <section className="relative lg:-top-26.75 z-10 max-w-6xl mx-auto pt-6 md:pt-0 px-6 md:px-10 lg:px-16 xl:px-0 flex flex-col md:items-center md:justify-center lg:items-end lg:justify-end h-[calc(100vh-88px)] md:h-[calc(100vh-107px)]">
      <Outlet />
      <Hero title="Space" subtitle="So, you want to travel to" content={textContent}/>
    </section>
  );
};

export default HomeLayout;
