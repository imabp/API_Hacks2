import React from "react";
import ROUTES from "./routes";
import { Route } from "react-router-dom";
const RenderConfig = () => {
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
    </>
  );
};
export default RenderConfig;
