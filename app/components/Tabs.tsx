interface TabsProps {
  tabs: string[];
  handleClick: (tabName: string) => void;
  selectedTab: string
}

const Tabs = ({ tabs, handleClick }: TabsProps) => {
  return (
      <div className="flex gap-2">
        {tabs.map((t) => (
          <div onClick={() => handleClick(t)} key={t}>
            {t}
          </div>
        ))}
      </div>
  );
};

export default Tabs;
