const DestinationTabs = ({
  destinationNames,
  activeTab,
  onClickHandle,
}: {
  destinationNames: Array<string>;
  activeTab: string;
  onClickHandle: (page: string) => void;
}) => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-8 relative top-64 md:top-110 lg:top-8 lg:left-12">
      <div className="flex gap-8 lg:col-start-2 justify-center lg:justify-start">
        {destinationNames.map((tab) => (
          <div 
            className={`preset-8 text-blue-300 cursor-pointer pb-1 md:pb-3 border-b-3 hover:text-white border-transparent transition hover:border-white/50 ${activeTab===tab && 'text-white font-semibold border-white'}`}
            key={tab} 
            onClick={() => onClickHandle(tab)}>
            {tab}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationTabs;
