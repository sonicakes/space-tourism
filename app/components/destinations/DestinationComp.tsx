import LayoutWrapper from "../LayoutWrapper";
import ImgComp from "../ImgComp";
import TabbedContent from "./TabbedContent";
import type { Destination } from "~/types";
import { motion, AnimatePresence } from "framer-motion";

const DestinationComp = ({
  dest,
  activeTab,
}: {
  dest: Destination;
  activeTab: string;
}) => {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {dest.name === activeTab && (
            <LayoutWrapper
              leftContent={<ImgComp dest={dest} />}
              rightContent={<TabbedContent dest={dest} />}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default DestinationComp;
