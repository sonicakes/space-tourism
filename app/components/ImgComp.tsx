import type { Destination } from "~/types";

const ImgComp = ({ dest }: { dest: Destination }) => {
  return (
    <>
      <img src={dest.images.png} />
    </>
  );
};

export default ImgComp;
