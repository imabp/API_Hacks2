import {
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
    displayName: "What is an API?",
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
    displayName: "Awesome Workshops",
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
    displayName: "Sponsors",
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
    component: () => <></>,
  },
  {
    path: "/hiring",
    displayName: "Network and Hiring",
    isExternal: false,
    exact: true,
    component: () => <></>,
  },
];
export default ROUTES;
