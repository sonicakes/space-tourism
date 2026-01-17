import type Route from "./+types/index";
import Breadcrumb from "~/components/shared/ui/Breadcrumb";
import { Suspense, useState } from "react";
import TechPagination from "~/components/technology/TechPagination";
import type { Term } from "~/types";
import TechComp from "~/components/technology/TechComp";
import TechSkeleton from "~/components/skeletons/TechSkeleton";
import { Await } from "react-router-dom";
import ErrorState from "~/components/shared/ui/ErrorState";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Space Tourism - Technology" },
    { name: "description", content: "Space Tourism Website Challenge" },
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  const techPromise = fetch(import.meta.env.VITE_ROOT_API_TECH).then((res) => {
    if (!res.ok) throw new Error("Failed to fetch technology data");
    return res.json();
  });
  return {
    techTerms: techPromise,
  };
}
const TechnologyPage = ({ loaderData }: Route.ComponentProps) => {
  const { techTerms } = loaderData;
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="max-w-6xl mx-auto pt-6 md:pt-10 lg:pt-12 px-6 md:px-10 lg:px-16 xl:px-0">
        <Breadcrumb ind={3} label="Space launch 101" />
      </div>

      <Suspense fallback={<TechSkeleton />}>
        <Await
          resolve={techTerms}
          errorElement={<ErrorState />}
        >
          {(resolvedTechTerms: Term[]) => {
            const tabCircles = resolvedTechTerms.map(
              (term: Term, index: number) => ({
                index: index,
                name: term.name,
              })
            );
            return (
              <div className="md:pb-32 lg:py-12">
                <div className="lg:pl-8 xl:pl-16 lg:flex lg:items-center">
                  <TechPagination
                    tabCircles={tabCircles}
                    activeTab={activeTab}
                    onClickHandle={setActiveTab}
                  />
                  {resolvedTechTerms.map((term: Term, index: number) => (
                    <TechComp
                      key={term.name}
                      term={term}
                      activeTab={activeTab}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            );
          }}
        </Await>
      </Suspense>
    </>
  );
};

export default TechnologyPage;
