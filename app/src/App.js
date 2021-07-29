import React from 'react';
import './App.css';

// using react router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./Components/Home"
import Sponser from './Components/Sponser';
import Workshop from "./Components/Workshop";
import Theme from './Components/Theme'

function App() {
  return (

    <Router>
      <div  className="flex flex-row relative">

      {/* A <Switch> looks through its children <Route>s and
    renders the first one that matches the current URL. */}

      <Switch>
      <Route exact path="/" component={Home} />
        <Route path="/sponsers" component={Sponser} />
        <Route path="/theme" component={Theme} />
        <Route path="/workshop" component={Workshop} />
      </Switch>


        <div className="w-1/3 h-screen absolute right-0 flex nav-background">
          <ul className="m-auto w-full flex flex-col justify-center text-center">
            <li>
            What you Looking for?
            <br></br>
            Might be here ;)
            </li>

            <li className="nav-link"> 
              <Link to="/what-is-api">What is API hacks ?</Link>
            </li>
            <li className="nav-link">
              <Link to="/theme">Themes</Link>
            </li>
            <li className="nav-link"> 
              <Link to="/workshop">Awesome Workshops</Link>
            </li>
            <li className="nav-link"> 
              <Link to="/sponsers">Sponsers</Link>
            </li>
            <li className="nav-link">
              <Link to="/blog">Our Hacker Blog</Link>
            </li>
            <li className="nav-link">
              <Link to="/hiring">Network and Hiring</Link>
            </li>
          </ul>
        </div>

      </div>
    </Router>
  );
}

export default App;