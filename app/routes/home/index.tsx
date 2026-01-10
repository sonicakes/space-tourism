import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Space Tourism Website" },
    { name: "description", content: "Space Tourism Website Challenge" },
  ];
}

export default function Home() {
  return <>

  </>
  
}