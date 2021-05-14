import './Team-Builder.css';
import React, { useState, useEffect } from 'react';

const axios = require('axios');

let urlItems = 'https://pokeapi.co/api/v2/item/poke-ball';
let urlPokemon ='https://pokeapi.co/api/v2/pokemon/butterfree';

function TeamBuilder() {
  
  const [pokemon, setPokemon] = useState(null);
  const [item, setItem] = useState(null);
  const [search, setSearch] = useState("Pikachu");

  useEffect(() => {
    getPokemon();
    getItem();
  }, [search]);

  function getPokemon() {
    axios.get(urlPokemon)
    .then(function (response) {
      setPokemon(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function() {
    });
  }

  function getItem() {
    axios.get(urlItems)
    .then(function (response) {
      setItem(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function() {
    });
  }

  function handleChange(event) {
        console.log(event.target.value);
        setSearch(event.target.value);
    }
  
    return (
      <>
        <h1 onLoad={handleChange}>Team-Builder</h1>
        {item && (
          <div className="teamContainer">
            <div className="teamElement col">
              <img className="pokeball" src={item.sprites.default} alt={item.name}></img>
            </div>
            <div className="teamElement col">
              <img className="pokeball" src={item.sprites.default} alt={item.name}></img>
            </div>
            <div className="teamElement col">
              <img className="pokeball" src={item.sprites.default} alt={item.name}></img>
            </div>
          </div>
        )}
        {item && (
          <div className="teamContainer">
            <div className="teamElement col lowerTeam">
              <img className="pokeball" src={item.sprites.default} alt={item.name}></img>
            </div>
            <div className="teamElement col lowerTeam">
              <img className="pokeball" src={item.sprites.default} alt={item.name}></img>
            </div>
            <div className="teamElement col lowerTeam">
              <img className="pokeball" src={item.sprites.default} alt={item.name}></img>
            </div>
          </div>
        )}
      </>
    );
  }

  export default TeamBuilder;