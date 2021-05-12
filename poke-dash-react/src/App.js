import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Map from "./Map";
import TeamBuilder from "./Team-Builder";
import Items from "./Items";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-light bg-light">
          <ul className="navbar">
            <li className="nav-link">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-link">
              <Link to="/map">Map</Link>
            </li>
            <li className="nav-link">
              <Link to="/teamBuilder">Team-Builder</Link>
            </li>
            <li className="nav-link">
              <Link to="/items">Items</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/teamBuilder">
            <TeamBuilder />
          </Route>
          <Route path="/items">
            <Items />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}