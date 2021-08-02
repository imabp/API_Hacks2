import React from "react";
import "./App.css";
import ROUTES from "./routes";
// using react router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./Components";
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';

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
            <Bounce left cascade>
              What you Looking for?
              <br></br>
              Might be here ;)
              </Bounce>
            </li>
            {ROUTES.map((route) => (
              <li>
                <Zoom left>
                <Link to={route.path} isExternal={route.isExternal}>
                  <button>
                    <b>{route.displayName}</b>
                  </button>
                </Link>
                </Zoom>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Router>
  );
}

export default App;
