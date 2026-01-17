import type Route from "./+types/index";
import type { CrewMember } from "../../types";
import Breadcrumb from "~/components/shared/ui/Breadcrumb";
import { Suspense, useState } from "react";
import CrewPagination from "~/components/crew/CrewPagination";
import CrewComp from "~/components/crew/CrewComp";
import CrewSkeleton from "~/components/skeletons/CrewSkeleton";
import { Await } from "react-router-dom";
import ErrorState from "~/components/shared/ui/ErrorState";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Space Tourism - Crew" },
    { name: "description", content: "Space Tourism Website Challenge" },
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  const crewPromise = fetch(import.meta.env.VITE_ROOT_API_CREW).then((res) => {
    if (!res.ok) throw new Error("Failed to fetch crew data");
    return res.json();
  });
  return {
    crewMembers: crewPromise,
  };
}

const CrewPage = ({ loaderData }: Route.ComponentProps) => {
  const { crewMembers } = loaderData;
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Breadcrumb ind={2} label="Meet your crew" />

      <Suspense fallback={<CrewSkeleton />}>
        <Await
          resolve={crewMembers}
          errorElement={<ErrorState />}
        >
          {(resolvedCrewMembers: CrewMember[]) => {
            const tabCircles = resolvedCrewMembers.map(
              (member: CrewMember, index: number) => ({
                index: index,
                name: member.name,
              })
            );
            return (
              <div className="md:pb-32 lg:py-12">
                {resolvedCrewMembers.map(
                  (member: CrewMember, index: number) => (
                    <CrewComp
                      key={member.name}
                      member={member}
                      activeTab={activeTab}
                      index={index}
                    />
                  )
                )}
                <CrewPagination
                  tabCircles={tabCircles}
                  activeTab={activeTab}
                  onClickHandle={setActiveTab}
                />
              </div>
            );
          }}
        </Await>
      </Suspense>
    </>
  );
};

export default CrewPage;
