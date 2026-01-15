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
    <div className="flex gap-10 pt-2">
      {tabCircles.map((tab) => (
        <div
          key={tab.index}
          onClick={() => onClickHandle(tab.index)}
          className={`w-3.75 h-3.75 rounded-full transition-all flex cursor-pointer ${
            activeTab === tab.index ? "bg-white" : "bg-white/17 hover:bg-white"
          }`}
        >
          <motion.div
            animate={{
              scale: activeTab === tab.index ? 1.2 : 1,
              backgroundColor:
                activeTab === tab.index
                  ? "#ffffff"
                  : "rgba(255, 255, 255, 0.17)",
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-3.75 h-3.75 rounded-full cursor-pointer"
            onClick={() => onClickHandle(tab.index)}
          />
        </div>
      ))}
    </div>
  );
};

export default CrewPagination;
