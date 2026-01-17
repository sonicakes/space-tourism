import type Route from "./+types/index";
import type { Destination } from "../../types";
import DestinationComp from "~/components/destinations/DestinationComp";
import Breadcrumb from "~/components/shared/ui/Breadcrumb";
import DestinationTabs from "~/components/destinations/DestinationTabs";
import { Await } from "react-router";
import { Suspense, useState } from "react";
import DestinationSkeleton from "~/components/skeletons/DestinationSkeleton";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Space Tourism - Destinations" },
    { name: "description", content: "Space Tourism Website Challenge" },
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  const destinationsPromise = fetch(import.meta.env.VITE_ROOT_API_DEST).then(
    (res) => {
      if (!res.ok) throw new Error("Failed to fetch");
      return res.json();
    }
  );

  return {
    destinations: destinationsPromise,
  };
}
const DestinationPage = ({ loaderData }: Route.ComponentProps) => {
  const { destinations } = loaderData;
  const [activeTab, setActiveTab] = useState("Moon");

  return (
    <>
      <Breadcrumb ind={1} label="Pick your destination" />

      <Suspense
        fallback={<DestinationSkeleton />}
      >
        <Await
          resolve={destinations}
          errorElement={<p>Error loading destinations!</p>}
        >
          {(resolvedDestinations: Destination[]) => {
            const destNames = resolvedDestinations.map((dest) => dest.name);

            return (
              <div className="md:pb-32 lg:py-32">
                <DestinationTabs
                  destinationNames={destNames}
                  activeTab={activeTab}
                  onClickHandle={setActiveTab}
                />
                {resolvedDestinations.map((dest) => (
                  <DestinationComp
                    key={dest.name}
                    dest={dest}
                    activeTab={activeTab}
                  />
                ))}
              </div>
            );
          }}
        </Await>
      </Suspense>
    </>
  );
};
export default DestinationPage;
