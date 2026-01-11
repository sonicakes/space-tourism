import type { Destination } from "~/types";

const ImgComp = ({ dest }: { dest: Destination }) => {
  return (
    <div>
      <img src={dest.images.png} />
    </div>
  );
};

export default ImgComp;
