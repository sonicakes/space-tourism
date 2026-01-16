import Cta from "./shared/ui/Cta";
import { motion } from "framer-motion";
import { NavLink } from "react-router";

const Hero = ({
  title,
  subtitle,
  content,
}: {
  title?: string;
  subtitle?: string;
  content?: string;
}) => {
  return (
    <div className="grid lg:grid-cols-2 gap-2">
      
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      className="flex flex-col gap-2 items-center lg:items-start md:max-w-lg lg:max-w-135">
        <div>
          <div className="subtitle text-center lg:text-left">{subtitle}</div>
          <div className="title text-center lg:text-left">{title}</div>
        </div>
        <div>
          <div className="para">
            {content}
          </div>
        </div>
      </motion.div>
      <motion.div 
       initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          delay: 0.5 
        }}
      className="flex justify-center items-center pt-16 lg:pt-0">
        <NavLink to="/destination">
          <Cta />
        </NavLink>
      </motion.div>
    </div>

  );
};

export default Hero;
