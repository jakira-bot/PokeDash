import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Map from "./Map";
import TeamBuilder from "./Team-Builder";
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
        <nav className="navbar justify-content-center">
          <ul className="navbar">
            <li className="nav-link">
              <Link to="/" className="link">Home</Link>
            </li>
            <li className="nav-link">
              <Link to="/map" className="link">Map</Link>
            </li>
            <li className="nav-link">
              <Link to="/Team-Builder" className="link">Team-Builder</Link>
            </li>
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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}