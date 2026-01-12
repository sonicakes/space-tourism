const Cta = ({ label = "Explore" }: { label?: string }) => {
  return (
    <div className="bg-white h-30 w-30 rounded-full text-gray-900">{label}</div>
  );
};

export default Cta;
