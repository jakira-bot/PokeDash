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
        <div className="member">
          <label htmlFor="pokeSearch"></label>
          <p>{member1.name.toUpperCase()}</p>
          <p>{member1.id}</p>
          <p>
            <img className="sprite" src={member1.sprite} alt={member1.name}/><br></br>
          </p>
          <span>{member1.types[0].toUpperCase()} {member1.types[1].toUpperCase()} {member1.types[2].toUpperCase()} {member1.types[3].toUpperCase()} </span>
          <div>
            <input type="text" className="pokeSearch" name="pokeSearch" onChange={handleChange}></input>
            <button type="button" onClick={getMember1}>Get Pokemon!</button>
          </div>
        </div>

        <div className="member">
          <label htmlFor="pokeSearch"></label>
          <p>{member2.name.toUpperCase()}</p>
          <p>{member2.id}</p>
          <p>
            <img className="sprite" src={member2.sprite} alt={member2.name}/><br></br>
          </p>
          <span>{member2.types[0].toUpperCase()} {member2.types[1].toUpperCase()} {member2.types[2].toUpperCase()} {member2.types[3].toUpperCase()} </span>
          <div>
            <input type="text" className="pokeSearch" name="pokeSearch" onChange={handleChange}></input>
            <button type="button" onClick={getMember2}>Get Pokemon!</button>
          </div>
        </div>

        <div className="member">
          <label htmlFor="pokeSearch"></label>
          <p>{member3.name.toUpperCase()}</p>
          <p>{member3.id}</p>
          <p>
            <img className="sprite" src={member3.sprite} alt={member3.name}/><br></br>
          </p>
          <span>{member3.types[0].toUpperCase()} {member3.types[1].toUpperCase()} {member3.types[2].toUpperCase()} {member3.types[3].toUpperCase()} </span>
          <div>
            <input type="text" className="pokeSearch" name="pokeSearch" onChange={handleChange}></input>
            <button type="button" onClick={getMember3}>Get Pokemon!</button>
          </div>
        </div>

        <div className="member">
          <label htmlFor="pokeSearch"></label>
          <p>{member4.name.toUpperCase()}</p>
          <p>{member4.id}</p>
          <p>
            <img className="sprite" src={member4.sprite} alt={member4.name}/><br></br>
          </p>
          <span>{member4.types[0].toUpperCase()} {member4.types[1].toUpperCase()} {member4.types[2].toUpperCase()} {member4.types[3].toUpperCase()} </span>
          <div>
            <input type="text" className="pokeSearch" name="pokeSearch" onChange={handleChange}></input>
            <button type="button" onClick={getMember4}>Get Pokemon!</button>
          </div>
        </div>

        <div className="member">
          <label htmlFor="pokeSearch"></label>
          <p>{member5.name.toUpperCase()}</p>
          <p>{member5.id}</p>
          <p>
            <img className="sprite" src={member5.sprite} alt={member5.name}/><br></br>
          </p>
          <span>{member5.types[0].toUpperCase()} {member5.types[1].toUpperCase()} {member5.types[2].toUpperCase()} {member5.types[3].toUpperCase()} </span>
          <div>
            <input type="text" className="pokeSearch" name="pokeSearch" onChange={handleChange}></input>
            <button type="button" onClick={getMember5}>Get Pokemon!</button>
          </div>
        </div>

        <div className="member">
          <label htmlFor="pokeSearch"></label>
          <p>{member6.name.toUpperCase()}</p>
          <p>{member6.id}</p>
          <p>
            <img className="sprite" src={member6.sprite} alt={member6.name}/><br></br>
          </p>
          <span>{member6.types[0].toUpperCase()} {member6.types[1].toUpperCase()} {member6.types[2].toUpperCase()} {member6.types[3].toUpperCase()} </span>
          <div>
            <input type="text" className="pokeSearch" name="pokeSearch" onChange={handleChange}></input>
            <button type="button" onClick={getMember6}>Get Pokemon!</button>
          </div>
        </div>
      </div>
    </div>
  )
}
