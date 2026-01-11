import type { Destination } from "~/types";
import Tabs from "./Tabs";
interface TabbedContentProps {
  dest: Destination;
  setSelectedTab: (tabName: string) => void;
  selectedTab: string,
  tabs: Array<string>
}

const TabbedContent = 
({ dest, setSelectedTab, selectedTab,  tabs}: TabbedContentProps) => {
  return (
    <>
    <Tabs tabs={tabs} handleClick={setSelectedTab} selectedTab={selectedTab}/>
    <div >
      <h2 className="text-8xl font-bellefair-regular uppercase">{dest.name}</h2>
      <p className="para text-blue-300">{dest.description}</p>
      <div className="flex justify-between ">
        <div>
          <div className="label-md">Avg. Distance</div>
          <div className="preset-6">{dest.distance}</div>
        </div>

        <div>
          <div className="label-md">Est. Travel Time</div>
          <div className="preset-6">{dest.travel}</div>
        </div>
      </div>
      </div>
    </>
  );
};

export default TabbedContent;
