interface LayoutWrapperProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const LayoutWrapper = ({
  leftContent,
  rightContent,
}: LayoutWrapperProps) => {
  return (
   
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div >{leftContent}</div>
        <div >{rightContent}</div>
      </div>
    
  );
};

export default LayoutWrapper;
