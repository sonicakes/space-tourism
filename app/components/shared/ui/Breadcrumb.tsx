import { motion } from "framer-motion";


type BreadcrumbProps = {
  label: string;
  ind: number;
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ ind, label }) => {
  return (
    <motion.div
     initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
  type: "tween", 
  duration: 1, 
  ease: "easeInOut" // or "circOut", "backOut", "anticipate"
}}
    className="flex gap-6 subtitle items-center justify-center md:justify-start">
<span className="text-white/25">{String(ind).padStart(2, '0')}</span>
     <span className="text-white"> {label} </span>
    </motion.div>
 
  );
};

export default Breadcrumb;
