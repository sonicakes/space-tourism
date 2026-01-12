import Breadcrumb from "~/components/shared/ui/Breadcrumb";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Space Tourism - Crew" },
    { name: "description", content: "Space Tourism Website Challenge" },
  ];
}

const CrewLayout = () => {
    return ( <div>
      <Breadcrumb label="Meet your crew" ind={2} />
    </div> );
}
 
export default CrewLayout;