import React from "react";
import ROUTES from "./routes";
import { Route } from "react-router-dom";
import HiddenRoutes from "./hidden.routes";

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
      {
        <Route
          key={HiddenRoutes.brandassets.path}
          path={HiddenRoutes.brandassets.path}
          exact={HiddenRoutes.brandassets.exact}
          children={<BrandAssets />}
        />
      }
    </>
  );
};
export default RenderConfig;
