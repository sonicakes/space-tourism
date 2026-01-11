import type { Destination } from "~/types";

const TabbedContent = ({ dest }: { dest: Destination }) => {
  return (
    <div >
      <h2 className="text-8xl font-bellefair-regular uppercase pt-18">{dest.name}</h2>
      <p className="para text-blue-300 pt-4 pb-10 border-b border-white/25">{dest.description}</p>
        <div className="pt-10 grid grid-cols-2 gap-6">
           <div >
          <div className="label-md text-blue-300 pb-0.5">Avg. Distance</div>
          <div className="preset-6">{dest.distance}</div>
        </div>
        <div>
          <div className="label-md text-blue-300 pb-0.5">Est. Travel Time</div>
          <div className="preset-6">{dest.travel}</div>
        </div>
        </div>
       
    </div>
  );
};

export default TabbedContent;
