import './Team-Builder.css';
import { useEffect, useState} from "react";
import { render } from 'react-dom';


export default function TeamBuilder(props) {
  const [pokemon, setPokemon] = useState([]);
  const [count, setCount] = useState(1);

  const [name1, setName1] = useState("");
  const [sprite1, setSprite1] = useState("");
  const [type1, setType1] = useState([]);

  const [name2, setName2] = useState("");
  const [sprite2, setSprite2] = useState("");
  const [type2, setType2] = useState([]);

  const [name3, setName3] = useState("");
  const [sprite3, setSprite3] = useState("");
  const [type3, setType3] = useState([]);

  const [name4, setName4] = useState("");
  const [sprite4, setSprite4] = useState("");
  const [type4, setType4] = useState([]);

  const [name5, setName5] = useState("");
  const [sprite5, setSprite5] = useState("");
  const [type5, setType5] = useState([]);

  const [name6, setName6] = useState("");
  const [sprite6, setSprite6] = useState("");
  const [type6, setType6] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const maxNumPokemon = 898;

  useEffect(() => {
    getPokemon(count);
  }, [count]);

  async function getPokemon(num) {
      /*let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
      let data = await response.json();
      //console.log(data);
      setPokemon(data);
      */
    let url =`https://pokeapi.co/api/v2/pokemon/${num}/`
    try{
      let response = await fetch(url);
      let data = await response.json();
      setPokemon([
        ...pokemon,
        {
          data,
        }
      ]);
    } 
      catch(error) {
      console.log(error);
    }
    if(count < maxNumPokemon){
      setCount(count + 1);
    }
    else{
      setIsLoading(false);
    }

  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function member1(event) {
    // This while loop is to prevent the user from 
    // searching before the API has finished being fetched.
    while(isLoading === true){
      return(
        console.log('Loading Pokemon...')
      )
    }

    let pokemonNames = [];
    for(let i = 0; i < maxNumPokemon; i++){
      pokemonNames.push(pokemon[i].data.name)
    }
    for(let i = 0; i < pokemonNames.length; i++) {
      if(event.target.value.toUpperCase() === pokemonNames[i].toUpperCase()){
        console.log(pokemonNames[i])
        setName1(pokemonNames[i]);
        setSprite1(pokemon[i].data.sprites.front_default)
        let firstType = pokemon[i].data.types[0].type.name;
        let secondType = "";
        let thirdType = "";
        if(typeof pokemon[i].data.types[1] === 'undefined'){
          secondType = "";
        }
        else{
          secondType = pokemon[i].data.types[1].type.name
        }
        if(typeof pokemon[i].data.types[2] === 'undefined'){
          thirdType = "";
        }
        else{
          thirdType = pokemon[i].data.types[2].type.name
        }
        setType1({firstType, secondType, thirdType})
      }
    }
  }

  function member2(event) {
    // This while loop is to prevent the user from 
    // searching before the API has finished being fetched.
    while(isLoading === true){
      return(
        console.log('Loading Pokemon...')
      )
    }

    let pokemonNames = [];
    for(let i = 0; i < maxNumPokemon; i++){
      pokemonNames.push(pokemon[i].data.name)
    }
    for(let i = 0; i < pokemonNames.length; i++) {
      if(event.target.value.toUpperCase() === pokemonNames[i].toUpperCase()){
        console.log(pokemonNames[i])
        setName2(pokemonNames[i]);
        setSprite2(pokemon[i].data.sprites.front_default)
        let firstType = pokemon[i].data.types[0].type.name;
        let secondType = "";
        let thirdType = "";
        if(typeof pokemon[i].data.types[1] === 'undefined'){
          secondType = "";
        }
        else{
          secondType = pokemon[i].data.types[1].type.name
        }
        if(typeof pokemon[i].data.types[2] === 'undefined'){
          thirdType = "";
        }
        else{
          thirdType = pokemon[i].data.types[2].type.name
        }
        setType2({firstType, secondType, thirdType})
      }
    }
  }

  function member3(event) {
    // This while loop is to prevent the user from 
    // searching before the API has finished being fetched.
    while(isLoading === true){
      return(
        console.log('Loading Pokemon...')
      )
    }

    let pokemonNames = [];
    for(let i = 0; i < maxNumPokemon; i++){
      pokemonNames.push(pokemon[i].data.name)
    }
    for(let i = 0; i < pokemonNames.length; i++) {
      if(event.target.value.toUpperCase() === pokemonNames[i].toUpperCase()){
        console.log(pokemonNames[i])
        setName3(pokemonNames[i]);
        setSprite3(pokemon[i].data.sprites.front_default)
        let firstType = pokemon[i].data.types[0].type.name;
        let secondType = "";
        let thirdType = "";
        if(typeof pokemon[i].data.types[1] === 'undefined'){
          secondType = "";
        }
        else{
          secondType = pokemon[i].data.types[1].type.name
        }
        if(typeof pokemon[i].data.types[2] === 'undefined'){
          thirdType = "";
        }
        else{
          thirdType = pokemon[i].data.types[2].type.name
        }
        setType3({firstType, secondType, thirdType})
      }
    }
  }

  function member4(event) {
    // This while loop is to prevent the user from 
    // searching before the API has finished being fetched.
    while(isLoading === true){
      return(
        console.log('Loading Pokemon...')
      )
    }

    let pokemonNames = [];
    for(let i = 0; i < maxNumPokemon; i++){
      pokemonNames.push(pokemon[i].data.name)
    }
    for(let i = 0; i < pokemonNames.length; i++) {
      if(event.target.value.toUpperCase() === pokemonNames[i].toUpperCase()){
        console.log(pokemonNames[i])
        setName4(pokemonNames[i]);
        setSprite4(pokemon[i].data.sprites.front_default)
        let firstType = pokemon[i].data.types[0].type.name;
        let secondType = "";
        let thirdType = "";
        if(typeof pokemon[i].data.types[1] === 'undefined'){
          secondType = "";
        }
        else{
          secondType = pokemon[i].data.types[1].type.name
        }
        if(typeof pokemon[i].data.types[2] === 'undefined'){
          thirdType = "";
        }
        else{
          thirdType = pokemon[i].data.types[2].type.name
        }
        setType4({firstType, secondType, thirdType})
      }
    }
  }

  function member5(event) {
    // This while loop is to prevent the user from 
    // searching before the API has finished being fetched.
    while(isLoading === true){
      return(
        console.log('Loading Pokemon...')
      )
    }

    let pokemonNames = [];
    for(let i = 0; i < maxNumPokemon; i++){
      pokemonNames.push(pokemon[i].data.name)
    }
    for(let i = 0; i < pokemonNames.length; i++) {
      if(event.target.value.toUpperCase() === pokemonNames[i].toUpperCase()){
        console.log(pokemonNames[i])
        setName5(pokemonNames[i]);
        setSprite5(pokemon[i].data.sprites.front_default)
        let firstType = pokemon[i].data.types[0].type.name;
        let secondType = "";
        let thirdType = "";
        if(typeof pokemon[i].data.types[1] === 'undefined'){
          secondType = "";
        }
        else{
          secondType = pokemon[i].data.types[1].type.name
        }
        if(typeof pokemon[i].data.types[2] === 'undefined'){
          thirdType = "";
        }
        else{
          thirdType = pokemon[i].data.types[2].type.name
        }
        setType5({firstType, secondType, thirdType})
      }
    }
  }

  function member6(event) {
    // This while loop is to prevent the user from 
    // searching before the API has finished being fetched.
    while(isLoading === true){
      return(
        console.log('Loading Pokemon...')
      )
    }

    let pokemonNames = [];
    for(let i = 0; i < maxNumPokemon; i++){
      pokemonNames.push(pokemon[i].data.name)
    }
    for(let i = 0; i < pokemonNames.length; i++) {
      if(event.target.value.toUpperCase() === pokemonNames[i].toUpperCase()){
        console.log(pokemonNames[i])
        setName6(pokemonNames[i]);
        setSprite6(pokemon[i].data.sprites.front_default)
        let firstType = pokemon[i].data.types[0].type.name;
        let secondType = "";
        let thirdType = "";
        if(typeof pokemon[i].data.types[1] === 'undefined'){
          secondType = "";
        }
        else{
          secondType = pokemon[i].data.types[1].type.name
        }
        if(typeof pokemon[i].data.types[2] === 'undefined'){
          thirdType = "";
        }
        else{
          thirdType = pokemon[i].data.types[2].type.name
        }
        setType6({firstType, secondType, thirdType})
      }
    }
  }


  
  
  return (
    <div className="teamContainer">
      <h1>Team Builder</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pokeSearch">Lookup Pokemon:</label>
        <input type="text" className="pokeSearch" name="pokeSearch" onChange={member1}></input>
        <div>
          Name: {name1}<br></br>
          <img src={sprite1} alt={name1} /><br></br>
          Type: {type1.firstType} {type1.secondType} {type1.thirdType}
        </div>
      </form>

      <form onSubmit={handleSubmit}>
        <label htmlFor="pokeSearch">Lookup Pokemon:</label>
        <input type="text" className="pokeSearch" name="pokeSearch" onChange={member2}></input>
        <div>
          Name: {name2}<br></br>
          <img src={sprite2} alt={name2} /><br></br>
          Type: {type2.firstType} {type2.secondType} {type2.thirdType}
        </div>
      </form>

      <form onSubmit={handleSubmit}>
        <label htmlFor="pokeSearch">Lookup Pokemon:</label>
        <input type="text" className="pokeSearch" name="pokeSearch" onChange={member3}></input>
        <div>
          Name: {name3}<br></br>
          <img src={sprite3} alt={name3} /><br></br>
          Type: {type3.firstType} {type3.secondType} {type3.thirdType}
        </div>
      </form>

      <form onSubmit={handleSubmit}>
        <label htmlFor="pokeSearch">Lookup Pokemon:</label>
        <input type="text" className="pokeSearch" name="pokeSearch" onChange={member4}></input>
        <div>
          Name: {name4}<br></br>
          <img src={sprite4} alt={name4} /><br></br>
          Type: {type4.firstType} {type4.secondType} {type4.thirdType}
        </div>
      </form>

      <form onSubmit={handleSubmit}>
        <label htmlFor="pokeSearch">Lookup Pokemon:</label>
        <input type="text" className="pokeSearch" name="pokeSearch" onChange={member5}></input>
        <div>
          Name: {name5}<br></br>
          <img src={sprite5} alt={name4} /><br></br>
          Type: {type5.firstType} {type5.secondType} {type5.thirdType}
        </div>
      </form>

      <form onSubmit={handleSubmit}>
        <label htmlFor="pokeSearch">Lookup Pokemon:</label>
        <input type="text" className="pokeSearch" name="pokeSearch" onChange={member6}></input>
        <div>
          Name: {name6}<br></br>
          <img src={sprite6} alt={name6} /><br></br>
          Type: {type6.firstType} {type6.secondType} {type6.thirdType}
        </div>
      </form>


    </div>
  )
};

  /*function handleMember1(event) {
    setSearch(event.target.value);
    setMember1(pokemon.name);
  }

  function handleChange(event) {
    console.log(event.target.value);
    setSearch(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getPokemon();
  }

    return (
      <>
        <h1>Team-Builder</h1>
        {pokemon && (
          <div className="teamContainer">
            <div className="teamElement col">
              <form onSubmit={handleSubmit}>
                <h2>{member1}</h2><br></br>
                <img src={pokemonNames[1].sprites.front_default} alt={pokemonNames[1].title} /><br></br>
                <label className="form-label" htmlFor="item">
                  Search for an item
                </label>
                <input type="text" id="item" onChange={handleMember1}/>
                <input className="btn btn-primary" type="submit" value="search" />
              </form>
            </div>
            <div className="teamElement col">
              <form onSubmit={handleSubmit}>
                {pokemonNames[1].name}<br></br>
                <img src={pokemonNames[1].sprites.front_default} alt={pokemonNames[1].title} /><br></br>
                <label className="form-label" htmlFor="item">
                  Search for an item
                </label>
                <input type="text" id="item" onChange={handleChange} />
                <input className="btn btn-primary" type="submit" value="search" />
              </form>
            </div>
            <div className="teamElement col">
            </div>
          </div>
        )}
          <div className="teamContainer">
            <div className="teamElement col lowerTeam">
            </div>
            <div className="teamElement col lowerTeam">
            </div>
            <div className="teamElement col lowerTeam">
            </div>
          </div>
      </>
    );
}
*/
