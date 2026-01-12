import type { Destination } from "~/types";

const TabbedContent = ({ dest }: { dest: Destination }) => {
  return (
    <div className="pt-21 md:pt-16 lg:pt-0 flex flex-col items-center justify-center lg:items-start md:px-22 lg:px-12">
      <h2 className="text-[3.5rem] md:text-title-mob lg:text-8xl font-bellefair-regular uppercase lg:pt-18">{dest.name}</h2>
      <p className="para text-blue-300 text-center lg:text-left pt-4 pb-6 lg:pb-10 border-b border-white/25">{dest.description}</p>
        <div className="pt-6 lg:pt-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
           <div className="flex items-center flex-col lg:items-start">
          <div className="label-md text-blue-300 pb-0.5">Avg. Distance</div>
          <div className="preset-6">{dest.distance}</div>
        </div>
        <div className="flex items-center flex-col lg:items-start">
          <div className="label-md text-blue-300 pb-0.5">Est. Travel Time</div>
          <div className="preset-6">{dest.travel}</div>
        </div>
        </div>
       
    </div>
  );
};

export default TabbedContent;
