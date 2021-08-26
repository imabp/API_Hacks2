import {
  Network,
  HackerMedia,
  Registration,
  Staff,
  AboutAPI,
  Sponsors,
  Workshops,
  HackThemes,
} from "./../pages";

const ROUTES = [
  {
    path: "/what-is-api",
    displayName: "What's' an API?",
    isExternal: false,
    exact: true,
    component: () => (
      <>
        <AboutAPI />
      </>
    ),
  },
  {
    path: "/theme",
    displayName: "Themes",
    isExternal: false,
    exact: true,
    component: () => (
      <>
        <HackThemes />
      </>
    ),
  },
  {
    path: "/workshop",
    displayName: "call for speakers",
    isExternal: false,
    exact: true,
    component: () => (
      <>
        <Workshops />
      </>
    ),
  },
  {
    path: "/sponsors",
    displayName: "Sponsors and Brochure",
    isExternal: false,
    exact: true,
    component: () => (
      <>
        <Sponsors />
      </>
    ),
  },

  {
    path: "/blog",
    displayName: "Our Hacker Media",
    isExternal: false,
    exact: true,
    component: () => (
      <>
        <HackerMedia />
      </>
    ),
  },
  {
    path: "/hiring",
    displayName: "Network and Hiring",
    isExternal: false,
    exact: true,
    component: () => (
      <>
        <Network />
      </>
    ),
  },
  {
    path: "/staff",
    displayName: "hackathon Staff",
    isExternal: false,
    exact: true,
    component: () => (
      <>
        <Staff />
      </>
    ),
  },
  {
    path: "/registration",
    displayName: "Registration",
    isExternal: false,
    exact: true,
    component: () => (
      <>
        <Registration />
      </>
    ),
  },
];
export default ROUTES;
