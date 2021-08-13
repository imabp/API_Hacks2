import React from "react";
import "./App.css";
import { RenderConfig } from "./config";
// using react router
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./pages";
import { Nav } from "./core";

function App() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-row">
      <div className="root h-screen overflow-y-scroll">
        <Switch>
          <Route key="/" path="/" exact={true} children={<Home />} />
          <RenderConfig />
        </Switch>
      </div>
      <Nav Link={Link} />
    </div>
  );
}

export default App;
