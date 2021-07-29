import React from 'react';
import './App.css';

// using react router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Sponser from './Components/Sponser';
import Workshop from "./Components/Workshop";
import Theme from './Components/Theme'

function App() {
  return (

    <Router>
      <div  className="flex flex-row">

      {/* A <Switch> looks through its children <Route>s and
    renders the first one that matches the current URL. */}

      <Switch>
        <Route path="/sponsers">
          <Sponser />
        </Route>
        <Route path="/theme">
          <Theme />
        </Route>
        <Route path="/workshop">
          <Workshop />
        </Route>
      </Switch>


        <nav className="w-1/3 bg-gray-500 h-screen justify">
          <ul>
            <li>
              <Link to="/sponsers">sponsers</Link>
            </li>
            <li>
              <Link to="/theme">theme</Link>
            </li>
            <li>
              <Link to="/workshop">Workshop</Link>
            </li>
          </ul>
        </nav>

      </div>
    </Router>
  );
}

export default App;