interface LayoutWrapperProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  type?: string
}

const LayoutWrapper = ({
  leftContent,
  rightContent,
  type
}: LayoutWrapperProps) => {
  return (
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
        <div className={`${type==='tech' ? 'order-2' : 'order-1'} flex justify-center items-center`}>{leftContent}</div>
        <div className={type==='tech' ? 'order-1 lg:order-2' : 'order-2'}>{rightContent}</div>
      </div>
    
  );
};

export default LayoutWrapper;
