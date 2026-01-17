const CrewSkeleton = () => {
  return (
    <div className="md:pb-32 lg:py-12 animate-pulse flex flex-col lg:flex-row-reverse items-center lg:items-end justify-between gap-12">
      <div className="w-full max-w-[320px] md:max-w-112.5 lg:max-w-140 aspect-4/5 bg-white/5 rounded-b-lg border-b border-white/10"></div>

      <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 w-full lg:max-w-xl">
        <div className="flex gap-4 order-last lg:order-0 lg:mt-24">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-3 w-3 rounded-full bg-white/20"></div>
          ))}
        </div>

        <div className="space-y-4 w-full">
          <div className="h-8 w-48 bg-white/10 rounded mx-auto lg:mx-0"></div>

          <div className="h-12 w-3/4 bg-white/20 rounded mx-auto lg:mx-0"></div>

          <div className="space-y-3 pt-4">
            <div className="h-4 w-full bg-white/5 rounded"></div>
            <div className="h-4 w-full bg-white/5 rounded"></div>
            <div className="h-4 w-4/5 bg-white/5 rounded mx-auto lg:mx-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrewSkeleton;
