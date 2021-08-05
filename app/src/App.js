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
        <div className="h-screen absolute right-0 flex nav">
          <ul className="m-auto w-full flex flex-col justify-center text-center">
            <li className="text text-2xl">
              What you Looking for?
              <br></br>
              Might be here ;)
            </li>
            {ROUTES.map((route) => (
              <li>
                <Link to={route.path} isExternal={route.isExternal}>
                  <button class="nav-link text-white font-bold py-2 px-4 rounded-full">
                    <b>{route.displayName}</b>
                  </button>
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
