import notFound from "../assets/imgs/shared/not-found.png";
import TypoElement from "../components/shared/TypoElement";
import { NavLink } from "react-router";

const NotFound = () => {
  return (
    <section className="relative z-10 max-w-6xl mx-auto pt-6 md:pt-10 lg:pt-12 px-6 md:px-10 lg:px-16 xl:px-0 h-[calc(100vh-88px)] md:h-[calc(100vh-107px)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10 ">
        <div className="flex justify-center flex-col gap-2 order-2 md:order-1">
          <img
            src={notFound}
            className="aspect-square object-cover max-h-100 md:max-h-145"
          />
          <h4 className="label-md text-center">Image created by Chat GPT</h4>
        </div>
        <div className="flex justify-center items-center lg:items-start flex-col">
          <TypoElement
            title="404"
            subtitle="page not found"
            textContent="The page address you've entered does not exist. Instead, explore other pages using Main Navigation or the links below."
          />
          <div className="flex flex-col gap-4 pt-6 items-center lg:items-start">
            <NavLink className="preset-8 hover:text-blue-300 hover:underline transition" to="/">Home</NavLink>
            <NavLink className="preset-8 hover:text-blue-300 hover:underline transition" to="/destination">Destination</NavLink>
            <NavLink className="preset-8 hover:text-blue-300 hover:underline transition" to="/crew">Crew</NavLink>
            <NavLink className="preset-8 hover:text-blue-300 hover:underline transition" to="/technology">Technology</NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
