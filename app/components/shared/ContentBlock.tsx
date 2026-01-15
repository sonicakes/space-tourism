import type { CrewMember, Term } from "~/types";
import TypoElement from "./TypoElement";

const ContentBlock = ({ element, type }: { element: CrewMember | Term; type?: string }) => {
  const isTech = type === 'tech';

  const title = isTech ? (element as Term).name : (element as CrewMember).name;
  
  const subtitle = isTech 
    ? 'the terminology...' 
    : (element as CrewMember).role;

  const textContent = isTech 
    ? (element as Term).description 
    : (element as CrewMember).bio;

  return (
    <div className="py-10">
      <TypoElement
        title={title}
        subtitle={subtitle}
        textContent={textContent}
      />
    </div>
  );
};

export default ContentBlock;
