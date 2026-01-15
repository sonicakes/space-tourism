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
    <div className="flex gap-8 flex-col lg:pr-16">
      {tabCircles.map((tab) => (
        <motion.div
          key={tab.index}
          onClick={() => onClickHandle(tab.index)}
          className="relative w-20 h-20 flex justify-center items-center cursor-pointer group preset-4 rounded-full"
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
