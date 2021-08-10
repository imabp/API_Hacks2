import { Sponsor, Workshop, Theme, WhatIsAPI } from "./Components";

const ROUTES = [
  {
    path: "/what-is-api",
    displayName: "What is an API?",
    isExternal: false,
    exact: true,
    component: () => (
      <>
        <WhatIsAPI />
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
        <Theme />
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
        <Workshop />
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
        <Sponsor />
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
