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
    <div className={`${type==='tech' ? 'px-6 lg:px-0 relative top-28 md:top-35 lg:top-0' : ''} lg:py-10`}>
      <TypoElement
        title={title}
        subtitle={subtitle}
        textContent={textContent}
      />
    </div>
  );
};

export default ContentBlock;
