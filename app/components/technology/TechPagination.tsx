import { motion } from "framer-motion";

const TechPagination = ({
  tabCircles,
  activeTab,
  onClickHandle,
}: {
  tabCircles: { index: number; name: string }[];
  activeTab: number;
  onClickHandle: (page: number) => void;
}) => {
  return (
    <div className="flex gap-4 lg:gap-8 lg:flex-col lg:pr-8 xl:pr-16 justify-center lg:justify-start relative top-82.5 md:top-[452px] lg:top-0">
      {tabCircles.map((tab) => (
        <motion.div
          key={tab.index}
          onClick={() => onClickHandle(tab.index)}
          className="relative w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 flex justify-center items-center cursor-pointer group preset-4 rounded-full"
        >
          {activeTab === tab.index && (
            <motion.div
              layoutId="active-pill"
              className="absolute inset-0 bg-white rounded-full"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}

          <span
            className={`relative z-10 transition-colors duration-300 ${
              activeTab === tab.index ? "text-blue-900" : "text-white"
            }`}
          >
            {tab.index + 1}
          </span>

          <div
            className={`absolute inset-0 border rounded-full transition-all duration-300 
    ${activeTab === tab.index ? "border-white" : "border-white/25 group-hover:border-white"}`}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default TechPagination;
