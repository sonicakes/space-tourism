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
    <div className="grid grid-cols-2 gap-8 relative top-8">
      <div className="flex gap-8 col-start-2">
        {destinationNames.map((tab) => (
          <div 
            className={`preset-8 text-blue-300 cursor-pointer pb-1 border-b-3 hover:text-white border-transparent transition hover:border-white/50 ${activeTab===tab && 'text-white font-semibold border-white'}`}
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
