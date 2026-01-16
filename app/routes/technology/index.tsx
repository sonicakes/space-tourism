import type Route from "./+types/index";
import Breadcrumb from "~/components/shared/ui/Breadcrumb";
import { useState } from "react";
import TechPagination from "~/components/technology/TechPagination";
import type { Term } from "~/types";
import TechComp from "~/components/technology/TechComp";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Space Tourism - Technology" },
    { name: "description", content: "Space Tourism Website Challenge" },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ terms: Term[] }> {
  const res = await fetch(import.meta.env.VITE_ROOT_API_TECH);
  const data = await res.json();
  console.log(data);
  return { terms: data };
}
const TechnologyPage = ({ loaderData }: Route.ComponentProps) => {
  const { terms } = loaderData as { terms: Term[] };
  const [activeTab, setActiveTab] = useState(0);
  const tabCircles = terms.map((term, index) => ({
    index: index,
    name: term.name,
  }));
  return (
    <>
      <div className="max-w-6xl mx-auto pt-6 md:pt-10 lg:pt-12 px-6 md:px-10 lg:px-16 xl:px-0">
        <Breadcrumb ind={3} label="Space launch 101" />
      </div>
      <div className="md:pb-32 lg:py-12">
        <div className="lg:pl-8 xl:pl-16 lg:flex lg:items-center">
          <TechPagination
            tabCircles={tabCircles}
            activeTab={activeTab}
            onClickHandle={setActiveTab}
          />
          {terms.map((term, index) => (
            <TechComp
              key={term.name}
              term={term}
              activeTab={activeTab}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TechnologyPage;
