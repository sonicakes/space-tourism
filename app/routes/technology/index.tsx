import Breadcrumb from "~/components/shared/ui/Breadcrumb";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Space Tourism - Technology" },
    { name: "description", content: "Space Tourism Website Challenge" },
  ];
}

const TechnologyLayout = () => {
  return (
    <div>
      <Breadcrumb label="Space launch 101" ind={3} />
    </div>
  );
};

export default TechnologyLayout;
