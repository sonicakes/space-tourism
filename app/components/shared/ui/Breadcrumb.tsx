type BreadcrumbProps = {
  label: string;
  ind: number;
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ ind, label }) => {
  return (
    <div className="flex gap-2">
      <span className="font-semibold text-pink-200">{String(ind).padStart(2, '0')}</span>
      {label}
    </div>
  );
};

export default Breadcrumb;
