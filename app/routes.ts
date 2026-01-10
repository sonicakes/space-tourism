import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("./routes/layouts/home.tsx", [index("routes/home/index.tsx")]),
  layout("./routes/layouts/main.tsx", [
    route("destination", "./routes/destination/index.tsx"),
    route("crew", "./routes/crew/index.tsx"),
    route("technology", "./routes/technology/index.tsx"),
    // route("projects/:id", "./routes/projects/details.tsx"),
    // route("blog", "./routes/blog/index.tsx"),
  ]),
] satisfies RouteConfig;