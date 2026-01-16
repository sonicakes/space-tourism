import LayoutWrapper from "../LayoutWrapper";
import type { Term } from "~/types";
import { motion, AnimatePresence } from "framer-motion";
import ContentBlock from "../shared/ContentBlock";
import TechImg from "./TechImg";

const TechComp = ({
  term,
  activeTab,
  index,
}: {
  term: Term;
  activeTab: number;
  index: number;
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
            <>
              <LayoutWrapper
                leftContent={<ContentBlock element={term} type="tech" />}
                rightContent={<TechImg element={term} />}
                type="tech"
              />
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default TechComp;
