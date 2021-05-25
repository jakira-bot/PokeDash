import './Team-Builder.css';
import { useEffect, useState} from "react";


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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        setSprite1(pokemon[i].data.sprites.other.dream_world.front_default)
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
        setSprite2(pokemon[i].data.sprites.other.dream_world.front_default)
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
        setSprite3(pokemon[i].data.sprites.other.dream_world.front_default)
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
        setSprite4(pokemon[i].data.sprites.other.dream_world.front_default)
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
        setSprite5(pokemon[i].data.sprites.other.dream_world.front_default)
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
        setSprite6(pokemon[i].data.sprites.other.dream_world.front_default)
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
    <div>
      <div>
        <h1>Team Builder</h1>
      </div>
      <div className="teamContainer row">
        <div className="item col-md-3 card rounded">
          <form onSubmit={handleSubmit}>
            <div className="card-image">
              <span className="card-notify-name">{name1}</span>
              <span className="card-notify-id">ID</span>
              <img className="sprite" src={sprite1} alt={name1} /><br></br>
            </div>
            <div className="card-image-overlay m-auto">
              <span className="card-type-badge">{type1.firstType}</span>
              <span className="card-type-badge">{type1.secondType}</span>
              <span className="card-type-badge">{type1.thirdType}</span>
            </div>
            <div className="pokeSearch">
              <label htmlFor="pokeSearch"></label>
              <input type="text" className="pokeSearch" name="pokeSearch" onChange={member1}></input>
            </div>
          </form>
        </div>

        <div className="item col-md-3 card rounded">
          <form onSubmit={handleSubmit}>
            <div className="card-image">
              <span className="card-notify-name">{name2}</span>
              <span className="card-notify-id">ID</span>
              <img className="sprite" src={sprite2} alt={name2} /><br></br>
            </div>
            <div className="card-image-overlay m-auto">
              <span className="card-type-badge">{type2.firstType}</span>
              <span className="card-type-badge">{type2.secondType}</span>
              <span className="card-type-badge">{type2.thirdType}</span>
            </div>
            <div className="pokeSearch">
              <label htmlFor="pokeSearch"></label>
              <input type="text" className="pokeSearch" name="pokeSearch" onChange={member2}></input>
            </div>
          </form>
        </div>

        <div className="item col-md-3 card rounded">
          <form onSubmit={handleSubmit}>
            <div className="card-image">
              <span className="card-notify-name">{name3}</span>
              <span className="card-notify-id">ID</span>
              <img className="sprite" src={sprite3} alt={name3} /><br></br>
            </div>
            <div className="card-image-overlay m-auto">
              <span className="card-type-badge">{type3.firstType}</span>
              <span className="card-type-badge">{type3.secondType}</span>
              <span className="card-type-badge">{type3.thirdType}</span>
            </div>
            <div className="pokeSearch">
              <label htmlFor="pokeSearch"></label>
              <input type="text" className="pokeSearch" name="pokeSearch" onChange={member3}></input>
            </div>
          </form>
        </div>
      </div>

      <div className="teamContainer row">
        <div className="item col-md-3 card rounded">
          <form onSubmit={handleSubmit}>
            <div className="card-image">
              <span className="card-notify-name">{name4}</span>
              <span className="card-notify-id">ID</span>
              <img className="sprite" src={sprite4} alt={name4} /><br></br>
            </div>
            <div className="card-image-overlay m-auto">
              <span className="card-type-badge">{type4.firstType}</span>
              <span className="card-type-badge">{type4.secondType}</span>
              <span className="card-type-badge">{type4.thirdType}</span>
            </div>
            <div className="pokeSearch">
              <label htmlFor="pokeSearch"></label>
              <input type="text" className="pokeSearch" name="pokeSearch" onChange={member4}></input>
            </div>
          </form>
        </div>

        <div className="item col-md-3 card rounded">
          <form onSubmit={handleSubmit}>
            <div className="card-image">
              <span className="card-notify-name">{name5}</span>
              <span className="card-notify-id">ID</span>
              <img className="sprite" src={sprite5} alt={name5} /><br></br>
            </div>
            <div className="card-image-overlay m-auto">
              <span className="card-type-badge">{type5.firstType}</span>
              <span className="card-type-badge">{type5.secondType}</span>
              <span className="card-type-badge">{type5.thirdType}</span>
            </div>
            <div className="pokeSearch">
              <label htmlFor="pokeSearch"></label>
              <input type="text" className="pokeSearch" name="pokeSearch" onChange={member5}></input>
            </div>
          </form>
        </div>

        <div className="item col-md-3 card rounded">
          <form onSubmit={handleSubmit}>
            <div className="card-image">
              <span className="card-notify-name">{name6}</span>
              <span className="card-notify-id">ID</span>
              <img className="sprite" src={sprite6} alt={name6} /><br></br>
            </div>
            <div className="card-image-overlay m-auto">
              <span className="card-type-badge">{type6.firstType}</span>
              <span className="card-type-badge">{type6.secondType}</span>
              <span className="card-type-badge">{type6.thirdType}</span>
            </div>
            <div className="pokeSearch">
              <label htmlFor="pokeSearch"></label>
              <input type="text" className="pokeSearch" name="pokeSearch" onChange={member6}></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};
