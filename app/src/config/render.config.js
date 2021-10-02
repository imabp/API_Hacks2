import React from "react";
import ROUTES from "./routes";
import { Route } from "react-router-dom";
import HiddenRoutes from "./hidden.routes";
import Brochure from "../pages/Brochure";
import { Registration } from "../pages";

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
        <>
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
          <Route
            key={HiddenRoutes.register.path}
            path={HiddenRoutes.register.path}
            exact={HiddenRoutes.register.exact}
            children={<Registration />}
          />
        <Route
            key={HiddenRoutes.evangelist.path}
            path={HiddenRoutes.evangelist.path}
            exact={HiddenRoutes.evangelist.exact}
            children={<HiddenRoutes.evangelist.component />}
          />
        </>
      }
    </>
  );
};
export default RenderConfig;
