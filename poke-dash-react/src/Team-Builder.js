import './Team-Builder.css';
import { useEffect, useState} from "react";

export default function TeamBuilder(props) {

  const [pokemon, setPokemon] = useState(null);
  const [search, setSearch] = useState("pikachu");

  const [member1, setMember1] = useState({name: "", id: "", types: ["","","",""], sprite: null});
  const [member2, setMember2] = useState({name: "", id: "", types: ["","","",""], sprite: null});
  const [member3, setMember3] = useState({name: "", id: "", types: ["","","",""], sprite: null});
  const [member4, setMember4] = useState({name: "", id: "", types: ["","","",""], sprite: null});
  const [member5, setMember5] = useState({name: "", id: "", types: ["","","",""], sprite: null});
  const [member6, setMember6] = useState({name: "", id: "", types: ["","","",""], sprite: null});

  async function getPokemon() {
    try{
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
      let data = await response.json();
      //console.log(data);
      setPokemon(data);
    } catch (error) {
      console.log(error);
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
      sprite: pokemon.sprites.other.dream_world.front_default,
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
      sprite: pokemon.sprites.other.dream_world.front_default,
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
      sprite: pokemon.sprites.other.dream_world.front_default,
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
      sprite: pokemon.sprites.other.dream_world.front_default,
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
      sprite: pokemon.sprites.other.dream_world.front_default,
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
      sprite: pokemon.sprites.other.dream_world.front_default,
    })

  }

  return (
    <div>
      <h1>Team Builder</h1>
      <div className="mainContainer">

        <div className="card rounded border-3 border-secondary">
          <div className="card-header border-0 bg-white">
            <div className="topInfo">
              <span className="name">{member1.name.toUpperCase()}</span>
              <span className="id">{member1.id}</span>
            </div>
          </div> 
          <p>
            <img className="sprite" src={member1.sprite} alt={member1.name}/><br></br>
          </p>
          <div className="types">
            <span className="type" title={member1.types[0]}>{member1.types[0].toUpperCase()}</span>
            <span className="type" title={member1.types[1]}>{member1.types[1].toUpperCase()}</span>
            <span className="type" title={member1.types[2]}>{member1.types[2].toUpperCase()}</span>
            <span className="type" title={member1.types[3]}>{member1.types[3].toUpperCase()}</span>
          </div>
          <div className="card-footer border-0 bg-white">
            <div className="searchContainer">
              <label htmlFor="pokeSearch"></label>
              <input type="text" className="pokeSearch" name="pokeSearch" onChange={handleChange} autoComplete="off"></input>
            </div>
            <button type="button" onClick={getMember1}><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="masterball"
            height="60" width="60"></img></button>
          </div>
        </div>

        <div className="card rounded border-3 border-secondary">
          <div className="card-header border-0 bg-white">
            <div className="topInfo">
              <span className="name">{member2.name.toUpperCase()}</span>
              <span className="id">{member2.id}</span>
            </div>
          </div> 
          <p>
            <img className="sprite" src={member2.sprite} alt={member2.name}/><br></br>
          </p>
          <div className="types">
            <span className="type" title={member2.types[0]}>{member2.types[0].toUpperCase()}</span>
            <span className="type" title={member2.types[1]}>{member2.types[1].toUpperCase()}</span>
            <span className="type" title={member2.types[2]}>{member2.types[2].toUpperCase()}</span>
            <span className="type" title={member2.types[3]}>{member2.types[3].toUpperCase()}</span>
          </div>
          <div className="card-footer border-0 bg-white">
            <div className="searchContainer">
              <label htmlFor="pokeSearch"></label>
              <input type="text" className="pokeSearch" name="pokeSearch" onChange={handleChange} autoComplete="off"></input>
            </div>
            <button type="button" onClick={getMember2}><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="masterball"
            height="60" width="60"></img></button>
          </div>
        </div>

        <div className="card rounded border-3 border-secondary">
          <div className="card-header border-0 bg-white">
            <div className="topInfo">
              <span className="name">{member3.name.toUpperCase()}</span>
              <span className="id">{member3.id}</span>
            </div>
          </div> 
          <p>
            <img className="sprite" src={member3.sprite} alt={member3.name}/><br></br>
          </p>
          <div className="types">
            <span className="type" title={member3.types[0]}>{member3.types[0].toUpperCase()}</span>
            <span className="type" title={member3.types[1]}>{member3.types[1].toUpperCase()}</span>
            <span className="type" title={member3.types[2]}>{member3.types[2].toUpperCase()}</span>
            <span className="type" title={member3.types[3]}>{member3.types[3].toUpperCase()}</span>
          </div>
          <div className="card-footer border-0 bg-white">
            <div className="searchContainer">
              <label htmlFor="pokeSearch"></label>
              <input type="text" className="pokeSearch" name="pokeSearch" onChange={handleChange} autoComplete="off"></input>
            </div>
            <button type="button" onClick={getMember3}><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="masterball"
            height="60" width="60"></img></button>
          </div>
        </div>

        <div className="card rounded border-3 border-secondary">
          <div className="card-header border-0 bg-white">
            <div className="topInfo">
              <span className="name">{member4.name.toUpperCase()}</span>
              <span className="id">{member4.id}</span>
            </div>
          </div> 
          <p>
            <img className="sprite" src={member4.sprite} alt={member4.name}/><br></br>
          </p>
          <div className="types">
            <span className="type" title={member4.types[0]}>{member4.types[0].toUpperCase()}</span>
            <span className="type" title={member4.types[1]}>{member4.types[1].toUpperCase()}</span>
            <span className="type" title={member4.types[2]}>{member4.types[2].toUpperCase()}</span>
            <span className="type" title={member4.types[3]}>{member4.types[3].toUpperCase()}</span>
          </div>
          <div className="card-footer border-0 bg-white">
            <div className="searchContainer">
              <label htmlFor="pokeSearch"></label>
              <input type="text" className="pokeSearch" name="pokeSearch" onChange={handleChange} autoComplete="off"></input>
            </div>
            <button type="button" onClick={getMember4}><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="masterball"
            height="60" width="60"></img></button>
          </div>
        </div>

        <div className="card rounded border-3 border-secondary">
          <div className="card-header border-0 bg-white">
            <div className="topInfo">
              <span className="name">{member5.name.toUpperCase()}</span>
              <span className="id">{member5.id}</span>
            </div>
          </div> 
          <p>
            <img className="sprite" src={member5.sprite} alt={member5.name}/><br></br>
          </p>
          <div className="types">
            <span className="type" title={member5.types[0]}>{member5.types[0].toUpperCase()}</span>
            <span className="type" title={member5.types[1]}>{member5.types[1].toUpperCase()}</span>
            <span className="type" title={member5.types[2]}>{member5.types[2].toUpperCase()}</span>
            <span className="type" title={member5.types[3]}>{member5.types[3].toUpperCase()}</span>
          </div>
          <div className="card-footer border-0 bg-white">
            <div className="searchContainer">
              <label htmlFor="pokeSearch"></label>
              <input type="text" className="pokeSearch" name="pokeSearch" onChange={handleChange} autoComplete="off"></input>
            </div>
            <button type="button" onClick={getMember5}><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="masterball"
            height="60" width="60"></img></button>
          </div>
        </div>

        <div className="card rounded border-3 border-secondary">
          <div className="card-header border-0 bg-white">
            <div className="topInfo">
              <span className="name">{member6.name.toUpperCase()}</span>
              <span className="id">{member6.id}</span>
            </div>
          </div> 
          <p>
            <img className="sprite" src={member6.sprite} alt={member6.name}/><br></br>
          </p>
          <div className="types">
            <span className="type" title={member6.types[0]}>{member6.types[0].toUpperCase()}</span>
            <span className="type" title={member6.types[1]}>{member6.types[1].toUpperCase()}</span>
            <span className="type" title={member6.types[2]}>{member6.types[2].toUpperCase()}</span>
            <span className="type" title={member6.types[3]}>{member6.types[3].toUpperCase()}</span>
          </div>
          <div className="card-footer border-0 bg-white">
            <div className="searchContainer">
              <label htmlFor="pokeSearch"></label>
              <input type="text" className="pokeSearch" name="pokeSearch" onChange={handleChange} autoComplete="off"></input>
            </div>
            <button type="button" onClick={getMember6}><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="masterball"
            height="60" width="60"></img></button>
          </div>
        </div>



      </div>
    </div>
  )
}
