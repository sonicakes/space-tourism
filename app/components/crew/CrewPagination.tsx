import { motion } from "framer-motion";

const CrewPagination = ({
  tabCircles,
  activeTab,
  onClickHandle,
}: {
  tabCircles: { index: number; name: string }[];
  activeTab: number;
  onClickHandle: (page: number) => void;
}) => {
  return (
    <div className="flex gap-4 pt-2">
      {tabCircles.map((tab) => (
        <div
          key={tab.index}
          onClick={() => onClickHandle(tab.index)}
          className={`w-4 h-4 rounded-full transition-all flex ${
            activeTab === tab.index
              ? "bg-white"
              : "bg-gray-500 hover:bg-gray-400"
          }`}
        >
          {activeTab === tab.index && (
            <motion.div
              layoutId="circle-active"
              className="bg-white"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CrewPagination;
