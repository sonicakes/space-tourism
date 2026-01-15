import type { CrewMember } from "~/types";
import TypoElement from "./TypoElement";
const ContentBlock = ({ element }: { element: CrewMember }) => {
  return (
    <div className="py-10">
    <TypoElement
      title={element.name}
      subtitle={element.role}
      textContent={element.bio}
    />
    </div>
  );
};

export default ContentBlock;
