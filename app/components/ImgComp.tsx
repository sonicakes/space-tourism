import type { Destination } from "~/types";

const ImgComp = ({ dest }: { dest: Destination }) => {
  return (
    <div className=" px-7 flex justify-center items-center xl:items-start xl:justify-start py-6 md:py-10 lg:py-0">
      <img src={dest.images.png} className="min-w-37.5 min-h-37.5 max-w-37.5 max-h-37.5 md:min-h-75 md:min-w-75 md:max-h-75 md:max-w-75 lg:min-w-100 lg:min-h-100 lg:max-w-100 lg:max-h-100 xl:min-w-120 xl:min-h-120 xl:max-w-120 xl:max-h-120"/>
    </div>
  );
};

export default ImgComp;
