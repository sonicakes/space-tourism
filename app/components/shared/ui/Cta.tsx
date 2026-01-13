const Cta = ({ label = "Explore" }: { label?: string }) => {
  return (
    <div
      className="
        relative
        cursor-pointer
        bg-white
        flex justify-center items-center
        h-36 w-36 md:h-68 md:w-68
        rounded-full
        text-blue-900 font-bellefair-regular
        text-lg md:text-[2rem] uppercase
        transition-all duration-300 ease-out
        hover:text-blue-900/50
        hover:ring-30 hover:ring-gray-300/30
        hover:ring-offset-8 hover:ring-offset-transparent
        "
    >
      {label}
    </div>
  );
};

export default Cta;
