import React from "react";
import BrandAssets from "./../core/brand_assets";
const HIDDEN_ROUTES = {
  sessionize: {
    path: "https://sessionize.com/apihacksworkshops/",
    displayName: "submit your proposal",
    isExternal: true,
    exact: true,
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

  //   {
  //     path: "/hiring",
  //     displayName: "Network and Hiring",
  //     isExternal: false,
  //     exact: true,
  //     component: () => <></>,
  //   },
};
export default HIDDEN_ROUTES;
