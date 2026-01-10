const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-2 ">
         <div className="flex flex-col gap-2 items-center lg:items-start">
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
    <div className="flex justify-center items-center">
        <div className="bg-white h-30 w-30 rounded-full text-gray-900">explore cta</div>
   </div>
    </div>
   
  );
};

export default Hero;
