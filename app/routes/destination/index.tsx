import type Route from "./+types/index";
import type { Destination } from "../../types";
import DestinationComp from "~/components/DestinationComp";
import Breadcrumb from "~/components/Breadcrumb";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Space Tourism - Destinations" },
    { name: "description", content: "Space Tourism Website Challenge" },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ destinations: Destination[] }> {
  const res = await fetch(`${import.meta.env.VITE_ROOT_API}destinations`);
  const data = await res.json();

  return { destinations: data };
}
const DestinationPage = ({ loaderData }: Route.ComponentProps) => {
  const { destinations } = loaderData as { destinations: Destination[] };
  console.log("dests:", destinations);

   const tabNames = destinations.map((dest) => dest.name);
  console.log(tabNames)
  return (
    <>
      <Breadcrumb ind={1} label="Pick your destination" />
      <div>
        {destinations.map((dest) => (
          <DestinationComp key={dest.name} dest={dest} tabs={tabNames}/>
        ))}
      </div>
    </>
  );
};

export default DestinationPage;
