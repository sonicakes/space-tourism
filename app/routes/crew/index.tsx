import type Route from "./+types/index";
import type { CrewMember } from "../../types";
import Breadcrumb from "~/components/shared/ui/Breadcrumb";
import { useState } from "react";
import CrewPagination from "~/components/crew/CrewPagination";
import CrewComp from "~/components/crew/CrewComp";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Space Tourism - Crew" },
    { name: "description", content: "Space Tourism Website Challenge" },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ crewMembers: CrewMember[] }> {
  const res = await fetch(`${import.meta.env.VITE_ROOT_API}crew`);
  const data = await res.json();

  return { crewMembers: data };
}
const CrewPage = ({ loaderData }: Route.ComponentProps) => {
  const { crewMembers } = loaderData as { crewMembers: CrewMember[] };
  const [activeTab, setActiveTab] = useState(0);
  const tabCircles = crewMembers.map((member, index) => ({
    index: index,
    name: member.name,
  }));
  return (
    <>
      <Breadcrumb ind={2} label="Meet your crew" />
      <div className="md:pb-32 lg:py-32">
        {crewMembers.map((member, index) => (
          <CrewComp
            key={member.name}
            member={member}
            activeTab={activeTab}
            index={index}
          />
        ))}
        <CrewPagination
          tabCircles={tabCircles}
          activeTab={activeTab}
          onClickHandle={setActiveTab}
        />
      </div>
    </>
  );
};

export default CrewPage;
