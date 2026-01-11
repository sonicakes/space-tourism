import LayoutWrapper from "./LayoutWrapper";
import ImgComp from "./ImgComp";
import TabbedContent from "./TabbedContent";
import type { Destination } from "~/types";
import { useState } from "react";

const DestinationComp = ({ dest, tabs }: { dest: Destination, tabs: Array<string> }) => {
    const [selectedTab, setSelectedTab] = useState('Moon');
  const handleSelection = (v: string) => {
    console.log(v);
    setSelectedTab(v);
  }
  return (
    <>
    {/* redo the tabs clicks? */}
    <h6>selected tab: {selectedTab}</h6>
    <LayoutWrapper
      display={dest.name.toLowerCase()===selectedTab.toLowerCase() ? 'yes' : 'no'}
      leftContent={<ImgComp dest={dest} />}
      rightContent={
      <TabbedContent dest={dest} tabs={tabs} selectedTab={selectedTab} setSelectedTab={handleSelection}/>}
   />
   </>
    
  );
};

export default DestinationComp;
