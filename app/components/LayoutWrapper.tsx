interface LayoutWrapperProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const LayoutWrapper = ({
  leftContent,
  rightContent,
}: LayoutWrapperProps) => {
  return (
   
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
        <div className="flex justify-center items-center">{leftContent}</div>
        <div >{rightContent}</div>
      </div>
    
  );
};

export default LayoutWrapper;
