import LayoutWrapper from "../LayoutWrapper";
import ImgComp from "../ImgComp";
import type { CrewMember } from "~/types";
import { motion, AnimatePresence } from "framer-motion";
import ContentBlock from "../shared/ContentBlock";

const CrewComp = ({
  member,
  activeTab,
  index
}: {
  member: CrewMember;
  activeTab: number;
  index: number
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
          {index === activeTab && (
            <LayoutWrapper
              leftContent={<ContentBlock element={member} />}
              rightContent={
            <ImgComp element={member} />
            }
            />
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default CrewComp;
