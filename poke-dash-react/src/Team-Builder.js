//import './Team-Builder.css';
import './Team-Builder.scss';
import { useEffect, useState} from "react";

export default function TeamBuilder(props) {

  const [pokemon, setPokemon] = useState(null);
  const [search, setSearch] = useState("");

  // These are hard-coded for initial values but are updated dynamically
  const [member1, setMember1] = useState({name: "pikachu", id: "25", types: ["electric","","",""], 
  sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"});
  const [member2, setMember2] = useState({name: "charmander", id: "4", types: ["fire","","",""], 
  sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"});
  const [member3, setMember3] = useState({name: "bulbasaur", id: "1", types: ["grass","poison","",""], 
  sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"});
  const [member4, setMember4] = useState({name: "squirtle", id: "7", types: ["water","","",""], 
  sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg"});
  const [member5, setMember5] = useState({name: "butterfree", id: "12", types: ["bug","flying","",""], 
  sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg"});
  const [member6, setMember6] = useState({name: "pidgeotto", id: "17", types: ["normal","flying","",""], 
  sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/17.svg"});

  async function getPokemon() {
    try{
      await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
        .then((response) => response.json())
        .then((data) => {
          setPokemon(data);
        })
      /*const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
      if(!response.ok){
        const message = `Invalid URL...did not fetch data:`;
        throw new Error(message);
      }
      const data = await response.json();
      setPokemon(data);
      return data.then(data);
      */
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getPokemon();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  function handleChange(event) {
    console.log(event.target.value);
    setSearch(event.target.value.toLowerCase());
    if(typeof pokemon.name != 'undefined' && event.target.value !== pokemon.name){
      setSearch("")
    }
  }

  function getMember1() {
    let type1 = "";
    let type2 = "";
    let type3 = "";
    let type4 = "";

    if(typeof pokemon.name === 'undefined'){
      return;
    }

    let sprite = pokemon.sprites.other.dream_world.front_default;
    if(sprite === null) {
      sprite = pokemon.sprites.front_default;
    }

    if(typeof pokemon.types[0] != 'undefined'){
      type1 = pokemon.types[0].type.name
    }
    if(typeof pokemon.types[1] != 'undefined'){
      type2 = pokemon.types[1].type.name
    }
    if(typeof pokemon.types[2] != 'undefined'){
      type3 = pokemon.typesa[2].type.name
    }
    if(typeof pokemon.types[3] != 'undefined'){
      type3 = pokemon.type[3].type.name
    }
    setMember1({
      name: pokemon.name,
      id: pokemon.id,
      types: [type1, type2, type3, type4],
      sprite: sprite
    })

  }

  function getMember2() {
    let type1 = "";
    let type2 = "";
    let type3 = "";
    let type4 = "";

    if(typeof pokemon.name === 'undefined'){
      return;
    }

    let sprite = pokemon.sprites.other.dream_world.front_default;
    if(sprite === null) {
      sprite = pokemon.sprites.front_default;
    }

    if(typeof pokemon.types[0] != 'undefined'){
      type1 = pokemon.types[0].type.name
    }
    if(typeof pokemon.types[1] != 'undefined'){
      type2 = pokemon.types[1].type.name
    }
    if(typeof pokemon.types[2] != 'undefined'){
      type3 = pokemon.typesa[2].type.name
    }
    if(typeof pokemon.types[3] != 'undefined'){
      type3 = pokemon.type[3].type.name
    }
    setMember2({
      name: pokemon.name,
      id: pokemon.id,
      types: [type1, type2, type3, type4],
      sprite: sprite
    })

  }

  function getMember3() {
    let type1 = "";
    let type2 = "";
    let type3 = "";
    let type4 = "";

    if(typeof pokemon.name === 'undefined'){
      return;
    }

    let sprite = pokemon.sprites.other.dream_world.front_default;
    if(sprite === null) {
      sprite = pokemon.sprites.front_default;
    }

    if(typeof pokemon.types[0] != 'undefined'){
      type1 = pokemon.types[0].type.name
    }
    if(typeof pokemon.types[1] != 'undefined'){
      type2 = pokemon.types[1].type.name
    }
    if(typeof pokemon.types[2] != 'undefined'){
      type3 = pokemon.typesa[2].type.name
    }
    if(typeof pokemon.types[3] != 'undefined'){
      type3 = pokemon.type[3].type.name
    }
    setMember3({
      name: pokemon.name,
      id: pokemon.id,
      types: [type1, type2, type3, type4],
      sprite: sprite
    })

  }

  function getMember4() {
    let type1 = "";
    let type2 = "";
    let type3 = "";
    let type4 = "";

    if(typeof pokemon.name === 'undefined'){
      return;
    }

    let sprite = pokemon.sprites.other.dream_world.front_default;
    if(sprite === null) {
      sprite = pokemon.sprites.front_default;
    }

    if(typeof pokemon.types[0] != 'undefined'){
      type1 = pokemon.types[0].type.name
    }
    if(typeof pokemon.types[1] != 'undefined'){
      type2 = pokemon.types[1].type.name
    }
    if(typeof pokemon.types[2] != 'undefined'){
      type3 = pokemon.typesa[2].type.name
    }
    if(typeof pokemon.types[3] != 'undefined'){
      type3 = pokemon.type[3].type.name
    }
    setMember4({
      name: pokemon.name,
      id: pokemon.id,
      types: [type1, type2, type3, type4],
      sprite: sprite
    })

  }

  function getMember5() {
    let type1 = "";
    let type2 = "";
    let type3 = "";
    let type4 = "";

    if(typeof pokemon.name === 'undefined'){
      return;
    }

    let sprite = pokemon.sprites.other.dream_world.front_default;
    if(sprite === null) {
      sprite = pokemon.sprites.front_default;
    }

    if(typeof pokemon.types[0] != 'undefined'){
      type1 = pokemon.types[0].type.name
    }
    if(typeof pokemon.types[1] != 'undefined'){
      type2 = pokemon.types[1].type.name
    }
    if(typeof pokemon.types[2] != 'undefined'){
      type3 = pokemon.typesa[2].type.name
    }
    if(typeof pokemon.types[3] != 'undefined'){
      type3 = pokemon.type[3].type.name
    }
    setMember5({
      name: pokemon.name,
      id: pokemon.id,
      types: [type1, type2, type3, type4],
      sprite: sprite
    })

  }

  function getMember6() {
    let type1 = "";
    let type2 = "";
    let type3 = "";
    let type4 = "";

    if(typeof pokemon.name === 'undefined'){
      return;
    }

    let sprite = pokemon.sprites.other.dream_world.front_default;
    if(sprite === null) {
      sprite = pokemon.sprites.front_default;
    }

    if(typeof pokemon.types[0] != 'undefined'){
      type1 = pokemon.types[0].type.name
    }
    if(typeof pokemon.types[1] != 'undefined'){
      type2 = pokemon.types[1].type.name
    }
    if(typeof pokemon.types[2] != 'undefined'){
      type3 = pokemon.typesa[2].type.name
    }
    if(typeof pokemon.types[3] != 'undefined'){
      type3 = pokemon.type[3].type.name
    }
    setMember6({
      name: pokemon.name,
      id: pokemon.id,
      types: [type1, type2, type3, type4],
      sprite: sprite
    })

  }


  function handleKeyDown1(e){
    if(e.key === 'Enter') {
      getMember1();
    }
  }
  function handleKeyDown2(e){
    if(e.key === 'Enter') {
      getMember2();
    }
  }
  function handleKeyDown3(e){
    if(e.key === 'Enter') {
      getMember3();
    }
  }
  function handleKeyDown4(e){
    if(e.key === 'Enter') {
      getMember4();
    }
  }
  function handleKeyDown5(e){
    if(e.key === 'Enter') {
      getMember5();
    }
  }
  function handleKeyDown6(e){
    if(e.key === 'Enter') {
      getMember6();
    }
  }

  function getRandomInt(min, max) {
    min = Math.floor(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  /*
  // This randomizer has lots of issues...will work on them
  // if I have time later
  function randomize1(){
    let num = getRandomInt(1, 899);
    setSearch(search => num);
    console.log(num);
    console.log(search);
    getMember1();
  }
  */

  function clearText() {
    console.log('yo');
    document.getElementsByClassName("pokeSearch").value="";
  }

  return (
    <div className="mainBody bg-light">
      <h1>TEAM BUILDER</h1>
      <div className="mainContainer bg-light">

        <div className="card rounded-lg border-0 bg-light">
          <div className="card-header border-0 bg-light p-0">
            <div className="topInfo">
              <span className="name">{member1.name.toUpperCase()}</span>
              <span className="id">{member1.id}</span>
            </div>
          </div> 
          <div className={member1.types[0]} id="cardBody">
            <div>
              <img className="sprite" src={member1.sprite} alt={member1.name}/><br></br>
            </div>
            <div className="types">
              <span className="type" title={member1.types[0]}>{member1.types[0].toUpperCase()}</span>
              <span className="type" title={member1.types[1]}>{member1.types[1].toUpperCase()}</span>
              <span className="type" title={member1.types[2]}>{member1.types[2].toUpperCase()}</span>
              <span className="type" title={member1.types[3]}>{member1.types[3].toUpperCase()}</span>
            </div>
          </div>
          <div className="card-footer border-0 bg-light p-0">
            <div className={member1.types[0]} id="cardFoot">
            {/*
              <div className="randContainer">
                <button type="button" onClick={randomize1}><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/201.png" alt="unown"
                height="50" width="50"></img></button>
              </div>
            */}
              <div className="searchContainer">
                <label htmlFor="pokeSearch"></label>
                <input type="text" className="pokeSearch" placeholder="Get Pokemon!" name="pokeSearch" onChange={handleChange} 
                autoComplete="off" onKeyDown={handleKeyDown1} onBlur={clearText}></input>
              </div>
              <button type="button" onClick={getMember1}><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="masterball"
              height="50" width="50"></img></button>
            </div>
          </div>
        </div>

        <div className="card rounded-lg border-0 bg-light">
          <div className="card-header border-0 bg-light p-0">
            <div className="topInfo">
              <span className="name">{member2.name.toUpperCase()}</span>
              <span className="id">{member2.id}</span>
            </div>
          </div> 
          <div className={member2.types[0]} id="cardBody">
            <div>
              <img className="sprite" src={member2.sprite} alt={member2.name}/><br></br>
            </div>
            <div className="types">
              <span className="type" title={member2.types[0]}>{member2.types[0].toUpperCase()}</span>
              <span className="type" title={member2.types[1]}>{member2.types[1].toUpperCase()}</span>
              <span className="type" title={member2.types[2]}>{member2.types[2].toUpperCase()}</span>
              <span className="type" title={member2.types[3]}>{member2.types[3].toUpperCase()}</span>
            </div>
          </div>
          <div className="card-footer border-0 bg-light p-0">
            <div className={member2.types[0]} id="cardFoot">
            {/*
              <div className="randContainer">
                <button className="randomizer" onClick={randomize2}>Randomize!</button>
              </div>
            */}
              <div className="searchContainer">
                <label htmlFor="pokeSearch"></label>
                <input type="text" className="pokeSearch" placeholder="Get Pokemon!" name="pokeSearch" onChange={handleChange} autoComplete="off" onKeyDown={handleKeyDown2}></input>
              </div>
              <button type="button" onClick={getMember2}><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="masterball"
              height="50" width="50"></img></button>
            </div>
          </div>
        </div>

        <div className="card rounded-lg border-0 bg-light">
          <div className="card-header border-0 bg-light p-0">
            <div className="topInfo">
              <span className="name">{member3.name.toUpperCase()}</span>
              <span className="id">{member3.id}</span>
            </div>
          </div> 
          <div className={member3.types[0]} id="cardBody">
            <div>
              <img className="sprite" src={member3.sprite} alt={member3.name}/><br></br>
            </div>
            <div className="types">
              <span className="type" title={member3.types[0]}>{member3.types[0].toUpperCase()}</span>
              <span className="type" title={member3.types[1]}>{member3.types[1].toUpperCase()}</span>
              <span className="type" title={member3.types[2]}>{member3.types[2].toUpperCase()}</span>
              <span className="type" title={member3.types[3]}>{member3.types[3].toUpperCase()}</span>
            </div>
          </div>
          <div className="card-footer border-0 bg-light p-0">
            <div className={member3.types[0]} id="cardFoot">
              <div className="searchContainer">
                <label htmlFor="pokeSearch"></label>
                <input type="text" className="pokeSearch" placeholder="Get Pokemon!" name="pokeSearch" onChange={handleChange} autoComplete="off" onKeyDown={handleKeyDown3}></input>
              </div>
              <button type="button" onClick={getMember3}><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="masterball"
              height="50" width="50"></img></button>
            </div>
          </div>
        </div>

        <div className="card rounded-lg border-0 bg-light">
          <div className="card-header border-0 bg-light p-0">
            <div className="topInfo">
              <span className="name">{member4.name.toUpperCase()}</span>
              <span className="id">{member4.id}</span>
            </div>
          </div> 
          <div className={member4.types[0]} id="cardBody">
            <div>
              <img className="sprite" src={member4.sprite} alt={member4.name}/><br></br>
            </div>
            <div className="types">
              <span className="type" title={member4.types[0]}>{member4.types[0].toUpperCase()}</span>
              <span className="type" title={member4.types[1]}>{member4.types[1].toUpperCase()}</span>
              <span className="type" title={member4.types[2]}>{member4.types[2].toUpperCase()}</span>
              <span className="type" title={member4.types[3]}>{member4.types[3].toUpperCase()}</span>
            </div>
          </div>
          <div className="card-footer border-0 bg-light p-0">
            <div className={member4.types[0]} id="cardFoot">
              <div className="searchContainer">
                <label htmlFor="pokeSearch"></label>
                <input type="text" className="pokeSearch" placeholder="Get Pokemon!" name="pokeSearch" onChange={handleChange} autoComplete="off" onKeyDown={handleKeyDown4}></input>
              </div>
              <button type="button" onClick={getMember4}><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="masterball"
              height="50" width="50"></img></button>
            </div>
          </div>
        </div>

        <div className="card rounded-lg border-0 bg-light">
          <div className="card-header border-0 bg-light p-0">
            <div className="topInfo">
              <span className="name">{member5.name.toUpperCase()}</span>
              <span className="id">{member5.id}</span>
            </div>
          </div> 
          <div className={member5.types[0]} id="cardBody">
            <div>
              <img className="sprite" src={member5.sprite} alt={member5.name}/><br></br>
            </div>
            <div className="types">
              <span className="type" title={member5.types[0]}>{member5.types[0].toUpperCase()}</span>
              <span className="type" title={member5.types[1]}>{member5.types[1].toUpperCase()}</span>
              <span className="type" title={member5.types[2]}>{member5.types[2].toUpperCase()}</span>
              <span className="type" title={member5.types[3]}>{member5.types[3].toUpperCase()}</span>
            </div>
          </div>
          <div className="card-footer border-0 bg-light p-0">
            <div className={member5.types[0]} id="cardFoot">
              <div className="searchContainer">
                <label htmlFor="pokeSearch"></label>
                <input type="text" className="pokeSearch" placeholder="Get Pokemon!" name="pokeSearch" onChange={handleChange} autoComplete="off" onKeyDown={handleKeyDown5}></input>
              </div>
              <button type="button" onClick={getMember5}><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="masterball"
              height="50" width="50"></img></button>
            </div>
          </div>
        </div>

        <div className="card rounded-lg border-0 bg-light">
          <div className="card-header border-0 bg-light p-0">
            <div className="topInfo">
              <span className="name">{member6.name.toUpperCase()}</span>
              <span className="id">{member6.id}</span>
            </div>
          </div> 
          <div className={member6.types[0]} id="cardBody">
            <div>
              <img className="sprite" src={member6.sprite} alt={member6.name}/><br></br>
            </div>
            <div className="types">
              <span className="type" title={member6.types[0]}>{member6.types[0].toUpperCase()}</span>
              <span className="type" title={member6.types[1]}>{member6.types[1].toUpperCase()}</span>
              <span className="type" title={member6.types[2]}>{member6.types[2].toUpperCase()}</span>
              <span className="type" title={member6.types[3]}>{member6.types[3].toUpperCase()}</span>
            </div>
          </div>
          <div className="card-footer border-0 bg-light p-0">
            <div className={member6.types[0]} id="cardFoot">
              <div className="searchContainer">
                <label htmlFor="pokeSearch"></label>
                <input type="text" className="pokeSearch" placeholder="Get Pokemon!" name="pokeSearch" onChange={handleChange} autoComplete="off" onKeyDown={handleKeyDown6}></input>
              </div>
              <button type="button" onClick={getMember6}><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="masterball"
              height="50" width="50"></img></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
