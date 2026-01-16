import type Route from "./+types/index";
import type { Destination } from "../../types";
import DestinationComp from "~/components/destinations/DestinationComp";
import Breadcrumb from "~/components/shared/ui/Breadcrumb";
import { useState } from "react";
import DestinationTabs from "~/components/destinations/DestinationTabs";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Space Tourism - Destinations" },
    { name: "description", content: "Space Tourism Website Challenge" },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ destinations: Destination[] }> {
  const res = await fetch('https://space-api-n2m0.onrender.com/api/destinations');
  const data = await res.json();

  return { destinations: data };
}
const DestinationPage = ({ loaderData }: Route.ComponentProps) => {
  const { destinations } = loaderData as { destinations: Destination[] };
  const [activeTab, setActiveTab] = useState("Moon");
  const destNames = destinations.map((dest) => dest.name);
  return (
    <>
      <Breadcrumb ind={1} label="Pick your destination" />
      <div className="md:pb-32 lg:py-32">
        <DestinationTabs
          destinationNames={destNames}
          activeTab={activeTab}
          onClickHandle={setActiveTab}
        />
        {destinations.map((dest) => (
          <DestinationComp
            key={dest.name}
            dest={dest}
            activeTab={activeTab}
          />
        ))}
      </div>
    </>
  );
};

export default DestinationPage;
