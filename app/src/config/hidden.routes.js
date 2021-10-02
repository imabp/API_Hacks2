import React from "react";
import Brochure from "../pages/Brochure";
import BrandAssets from "./../core/brand_assets";
import  Registration  from "../pages/Registration";
import  Evangelist  from "../pages/Evangelist";
const HIDDEN_ROUTES = {
  sessionize: {
    path: "https://sessionize.com/apihacksworkshops/",
    displayName: "submit your proposal",
    isExternal: true,
    exact: true,
  },
  brochure: {
    path: "/brochure",
    displayName: "brochure",
    isExternal: false,
    exact: true,
    component: () => (
      <>
      <Brochure/>
      </>
    ),
  },
  brandassets: {
    path: "/brand_assets",
    displayName: "brandassets",
    isExternal: false,
    exact: true,
    component: () => (
      <>
        <BrandAssets />
      </>
    ),
  },
  register:{
    path: "/register",
    displayName: "Register",
    isExternal: false,
    exact: true,
    component: () => (
      <>
        <Registration />
      </>
    ),
  },
  evangelist:{
    path: "/evangelists",
    displayName: "Evangelist",
    isExternal: false,
    exact: true,
    component: () => (
      <>
        <Evangelist />
      </>
    ),
  },
  //   {
  //     path: "/hiring",
  //     displayName: "Network and Hiring",
  //     isExternal: false,
  //     exact: true,
  //     component: () => <></>,
  //   },
};
export default HIDDEN_ROUTES;
