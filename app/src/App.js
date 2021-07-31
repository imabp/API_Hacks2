import React from "react";
import "./App.css";
import ROUTES from "./routes";
// using react router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./Components";

function App() {
  return (
    <Router>
      <div className="flex flex-row relative">
        <div className="root w-2/3 h-screen">
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
        <div className="w-1/3 h-screen absolute right-0 flex nav">
          <ul className="m-auto w-full flex flex-col justify-center text-center">
            <li className="text text-2xl">
              What you Looking for?
              <br></br>
              Might be here ;)
            </li>
            {ROUTES.map((route) => (
              <li className="nav-link">
                <Link to={route.path} isExternal={route.isExternal}>
                  <b>{route.displayName}</b>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Router>
  );
}

export default App;
