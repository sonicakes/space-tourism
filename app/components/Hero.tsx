import Cta from "./shared/ui/Cta";

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-2">
         <div className="flex flex-col gap-2 items-center lg:items-start md:max-w-lg lg:max-w-135">
      <div>
        <div className="subtitle text-center lg:text-left">So you want to travel to</div>
        <div className="title text-center lg:text-left">SPACE</div>
      </div>
      <div>
        <div className="para text-blue-300 text-center lg:text-left">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </div>
      </div>
    </div>
    <div className="flex justify-center items-center pt-16 lg:pt-0">
      <Cta />
   </div>
    </div>
   
  );
};

export default Hero;
