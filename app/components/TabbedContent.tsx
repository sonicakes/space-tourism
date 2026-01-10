import type { Destination } from "~/types";
import Tabs from "./Tabs";

const TabbedContent = ({ dest }: { dest: Destination }) => {
  return (
    <>
    <Tabs />
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
    </>
  );
};

export default TabbedContent;
