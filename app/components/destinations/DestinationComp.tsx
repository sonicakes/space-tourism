import LayoutWrapper from "../LayoutWrapper";
import ImgComp from "../ImgComp";
import TabbedContent from "./TabbedContent";
import type { Destination } from "~/types";

const DestinationComp = ({ dest, display }: { dest: Destination, display: boolean }) => {

  return (
    <div className={`${!display && 'hidden'}`}>
    <LayoutWrapper
      leftContent={<ImgComp dest={dest} />}
      rightContent={
      <TabbedContent dest={dest}/>}/>
   </div>
    
  );
};

export default DestinationComp;
