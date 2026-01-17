const DestinationSkeleton = () => {
  return (
    <div className="md:pb-32 lg:py-32 animate-pulse">
      {/* Tab Skeletons */}
      <div className="flex justify-center lg:justify-start space-x-8 mb-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-4 w-16 bg-white/10 rounded"></div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Planet Image Skeleton */}
        <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-white/5"></div>

        {/* Text Content Skeleton */}
        <div className="flex-1 space-y-6 w-full max-w-md">
          <div className="h-20 w-3/4 bg-white/10 rounded mx-auto lg:mx-0"></div>
          <div className="space-y-3">
            <div className="h-4 bg-white/5 rounded"></div>
            <div className="h-4 bg-white/5 rounded"></div>
            <div className="h-4 w-5/6 bg-white/5 rounded"></div>
          </div>
          <div className="pt-8 border-t border-white/10 flex gap-12">
            <div className="h-12 w-24 bg-white/5 rounded"></div>
            <div className="h-12 w-24 bg-white/5 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationSkeleton;