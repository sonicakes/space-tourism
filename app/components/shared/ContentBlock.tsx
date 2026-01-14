import type { CrewMember } from "~/types";
import TypoElement from "./TypoElement";
const ContentBlock = ({ element }: { element: CrewMember }) => {
  return (
    <TypoElement
      title={element.name}
      subtitle={element.role}
      textContent={element.bio}
    />
  );
};

export default ContentBlock;
