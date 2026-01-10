import LayoutWrapper from "./LayoutWrapper";
import ImgComp from "./ImgComp";
import TabbedContent from "./TabbedContent";
import type { Destination } from "~/types";

const DestinationComp = ({ dest }: { dest: Destination }) => {
  return (
    <LayoutWrapper
      leftContent={<ImgComp dest={dest} />}
      rightContent={<TabbedContent dest={dest} />}
    />
  );
};

export default DestinationComp;
