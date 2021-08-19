import React from "react";
import ROUTES from "./routes";
import { Route } from "react-router-dom";
import HiddenRoutes from "./hidden.routes";
import Brochure from "../pages/Brochure";

const RenderConfig = () => {
  const BrandAssets = HiddenRoutes.brandassets.component;
  return (
    <>
      {ROUTES.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          children={<route.component />}
        />
      ))}
      {<>
        <Route
          key={HiddenRoutes.brandassets.path}
          path={HiddenRoutes.brandassets.path}
          exact={HiddenRoutes.brandassets.exact}
          children={<BrandAssets />}
        />
         <Route
          key={HiddenRoutes.brochure.path}
          path={HiddenRoutes.brochure.path}
          exact={HiddenRoutes.brochure.exact}
          children={<Brochure />}
        />
        </>
      }
    </>
  );
};
export default RenderConfig;
