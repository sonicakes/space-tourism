const TechSkeleton = () => {
  return (
    <div className="md:pb-32 lg:py-12 animate-pulse">
      <div className="lg:pl-8 xl:pl-16 lg:flex lg:items-center lg:justify-between gap-8">
        
        {/* Numbered Pagination Skeletons */}
        <div className="flex lg:flex-col justify-center gap-4 mb-8 lg:mb-0">
          {[1, 2, 3].map((i) => (
            <div 
              key={i} 
              className="w-10 h-10 md:w-16 md:h-16 rounded-full border border-white/10 bg-white/5 flex items-center justify-center"
            >
              <div className="w-4 h-4 bg-white/10 rounded"></div>
            </div>
          ))}
        </div>

        {/* Text Content Skeleton */}
        <div className="flex-1 text-center lg:text-left px-6 lg:px-12 space-y-4">
          <div className="h-4 w-32 bg-white/5 rounded mx-auto lg:mx-0"></div> {/* Terminology... */}
          <div className="h-12 w-3/4 bg-white/20 rounded mx-auto lg:mx-0"></div> {/* Launch Vehicle */}
          <div className="space-y-3 pt-4">
            <div className="h-4 w-full bg-white/5 rounded"></div>
            <div className="h-4 w-full bg-white/5 rounded"></div>
            <div className="h-4 w-2/3 bg-white/5 rounded mx-auto lg:mx-0"></div>
          </div>
        </div>

        {/* Image Skeleton */}
        <div className="w-full lg:w-[40%] aspect-video lg:aspect-square bg-white/5 mt-8 lg:mt-0"></div>
      </div>
    </div>
  );
};

export default TechSkeleton;