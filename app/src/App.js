import React from "react";
import "./App.css";
import ROUTES from "./routes";
// using react router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./Components";
import Nav from "./Nav/Nav";

function App() {
  return (
    <Router>
      <div className="flex flex-row relative">
        <div className="root h-screen">
          <Switch>
            <Route key="/" path="/" exact={true} children={<Home />} />
            {ROUTES.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                children={<route.component />}
              />
            ))}
          </Switch>
        </div>

        <Nav Link={Link} />

      </div>
    </Router>
  );
}

export default App;
