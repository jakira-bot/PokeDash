import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Map from "./Map";
import TeamBuilder from "./Team-Builder";
//import Items from "./Items";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import axios from 'axios';

export default function App() {

  const [pokemon, setPokemon] = useState([]);

  const url = 'https://pokeapi.co/api/v2/pokemon';

  let getPokemon = (url) => {
    axios
      .get(url)
      .then((response) => {
        //console.log(response.data);
        setPokemon(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPokemon(url)
  }, []);

  return (
    <Router>
      <div>
        <nav className="navbar navbar-light bg-light justify-content-center">
          <ul className="navbar">
            <li className="nav-link">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-link">
              <Link to="/map">Map</Link>
            </li>
            <li className="nav-link">
              <Link to="/Team-Builder">Team-Builder</Link>
            </li>
        {/* ////Stretch Goal////
            <li className="nav-link">
              <Link to="/items">Items</Link>
            </li>
        */}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/Team-Builder">
            <TeamBuilder pokemon={pokemon}/>
          </Route>
          {/* //stretch goal//
          <Route path="/items">
            <Items />
          </Route>
          */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}