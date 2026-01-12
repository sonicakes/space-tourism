type BreadcrumbProps = {
  label: string;
  ind: number;
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ ind, label }) => {
  return (
    <div className="flex gap-6 subtitle">
      <span className="text-white/25">{String(ind).padStart(2, '0')}</span>
     <span className="text-white"> {label} </span>
    </div>
  );
};

export default Breadcrumb;
