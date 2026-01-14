import { motion } from "framer-motion";

const DestinationTabs = ({
  destinationNames,
  activeTab,
  onClickHandle,
}: {
  destinationNames: Array<string>;
  activeTab: string;
  onClickHandle: (page: string) => void;
}) => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-8 relative top-64 md:top-110 lg:top-8 lg:left-12">
      <div className="flex gap-8 lg:col-start-2 justify-center lg:justify-start">
        {destinationNames.map((tab) => (
          <div
            key={tab}
            onClick={() => onClickHandle(tab)}
            className={`preset-8 text-blue-300 cursor-pointer border-transparent border-b-3 relative pb-1 md:pb-3 hover:text-white transition hover:border-white/50 ${
              activeTab === tab
                ? "text-white font-semibold border-white"
                : "text-blue-300 hover:text-white  hover:border-white/50"
            }`}
          >
            {tab}

            {activeTab === tab && (
              <motion.div
                layoutId="active-underline"
                className="absolute -bottom-0.75 left-0 right-0 h-0.75 bg-white"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationTabs;

//
