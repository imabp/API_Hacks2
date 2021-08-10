import React from "react";
import "./App.css";
import { RenderConfig } from "./config";
// using react router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./pages";
import { Nav } from "./core";

function App() {
  return (
    <Router>
      <div className="flex flex-row">
        <div className="root h-screen overflow-y-scroll">
          <Switch>
            <Route key="/" path="/" exact={true} children={<Home />} />
            <RenderConfig />
          </Switch>
        </div>
        <Nav Link={Link} />
      </div>
    </Router>
  );
}

export default App;
