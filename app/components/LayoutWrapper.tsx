
interface LayoutWrapperProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const LayoutWrapper = ({ leftContent, rightContent }: LayoutWrapperProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex justify-center">
          {leftContent}
        </div>
        <div className="flex justify-center items-center lg:items-start flex-col">
          {rightContent}
        </div>
      </div>
    </div>
  );
};

export default LayoutWrapper;