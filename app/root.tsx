import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import bgHomeMobile from "./imgs/home/background-home-mobile.jpg";
import bgHomeTablet from "./imgs/home/background-home-tablet.jpg";
import bgHomeDesktop from "./imgs/home/background-home-desktop.jpg";

import bgDestMobile from "./imgs/destination/background-destination-mobile.jpg";
import bgDestTablet from "./imgs/destination/background-destination-tablet.jpg";
import bgDestDesktop from "./imgs/destination/background-destination-desktop.jpg";

import bgCrewMobile from "./imgs/crew/background-crew-mobile.jpg";
import bgCrewTablet from "./imgs/crew/background-crew-tablet.jpg";
import bgCrewDesktop from "./imgs/crew/background-crew-desktop.jpg";

import bgTechnologyMobile from "./imgs/technology/background-technology-mobile.jpg";
import bgTechnologyTablet from "./imgs/technology/background-technology-tablet.jpg";
import bgTechnologyDesktop from "./imgs/technology/background-technology-desktop.jpg";

interface ImageSet {
  mobile: string;
  tablet: string;
  desktop: string;
}

const BACKGROUNDS: { [key: string]: ImageSet } = {
  "/": {
    mobile: bgHomeMobile,
    tablet: bgHomeTablet,
    desktop: bgHomeDesktop,
  },
  "/destination": {
    mobile: bgDestMobile,
    tablet: bgDestTablet,
    desktop: bgDestDesktop,
  },
   "/crew": {
    mobile: bgCrewMobile,
    tablet: bgCrewTablet,
    desktop: bgCrewDesktop,
  },
  "/technology": {
    mobile: bgTechnologyMobile,
    tablet: bgTechnologyTablet,
    desktop: bgTechnologyDesktop,
  },
};

import type { Route } from "./+types/root";
import { useLocation } from "react-router";
import "./app.css";
import Navbar from "./components/shared/ui/Navbar";
export const links: Route.LinksFunction = () => [
  { rel: "icon", href: "/favicon-custom.png", type: "image/x-icon" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Bellefair&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  
  const activeBg = BACKGROUNDS[location.pathname] || BACKGROUNDS["/"];

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="relative z-50">
          <picture className="absolute z-10 w-full h-full">
            <source media="(min-width: 1024px)" srcSet={activeBg.desktop} />
            <source media="(min-width: 768px)" srcSet={activeBg.tablet} />
            <img
              src={activeBg.mobile}
              alt="Background"
              className="w-full h-full object-cover"
            />
          </picture>
          <div>
            <Navbar />
            <main className="">{children}</main>
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
