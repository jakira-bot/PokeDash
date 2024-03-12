import './Team-Builder.scss';
import { useEffect, useState} from "react";

export default function TeamBuilder(props) {

  const [pokemon1, setPokemon1] = useState(null);
  const [pokemon2, setPokemon2] = useState(null);
  const [pokemon3, setPokemon3] = useState(null);
  const [pokemon4, setPokemon4] = useState(null);
  const [pokemon5, setPokemon5] = useState(null);
  const [pokemon6, setPokemon6] = useState(null);

  const [search1, setSearch1] = useState("pikachu");
  const [search2, setSearch2] = useState("charmander");
  const [search3, setSearch3] = useState("bulbasaur");
  const [search4, setSearch4] = useState("squirtle");
  const [search5, setSearch5] = useState("butterfree");
  const [search6, setSearch6] = useState("pidgeotto");

  const [member1, setMember1] = useState({name: "", id: "", types: ["","","",""], sprite:"", abilities: ["", "", "", ""], gameIcon: ""});
  const [member2, setMember2] = useState({name: "", id: "", types: ["","","",""], sprite:"", abilities: ["", "", "", ""], gameIcon: ""});
  const [member3, setMember3] = useState({name: "", id: "", types: ["","","",""], sprite:"", abilities: ["", "", "", ""], gameIcon: ""});
  const [member4, setMember4] = useState({name: "", id: "", types: ["","","",""], sprite:"", abilities: ["", "", "", ""], gameIcon: ""});
  const [member5, setMember5] = useState({name: "", id: "", types: ["","","",""], sprite:"", abilities: ["", "", "", ""], gameIcon: ""});
  const [member6, setMember6] = useState({name: "", id: "", types: ["","","",""], sprite:"", abilities: ["", "", "", ""], gameIcon: ""});

  async function getPokemon1() {
    try{
      await fetch(`https://pokeapi.co/api/v2/pokemon/${search1}`)
        .then((response) => response.json())
        .then((data) => {
          setPokemon1(data);

          let type1 = "";
          let type2 = "";
          let type3 = "";
          let type4 = "";

          let ability1 = "";
          let ability2 = "";
          let ability3 = "";
          let ability4 = "";
      
          if(typeof data.name === 'undefined'){
            return;
          }
      
          let sprite = data.sprites.other.dream_world.front_default;
          if(sprite === null) {
            sprite = data.sprites.front_default;
          }
      
          if(typeof data.types[0] != 'undefined'){
            type1 = data.types[0].type.name
          }
          if(typeof data.types[1] != 'undefined'){
            type2 = data.types[1].type.name
          }
          if(typeof data.types[2] != 'undefined'){
            type3 = data.typesa[2].type.name
          }
          if(typeof data.types[3] != 'undefined'){
            type4 = data.type[3].type.name
          }

          if(typeof data.abilities[0] != 'undefined'){
            ability1 = data.abilities[0].ability.name
          }
          
          if(typeof data.abilities[1] != 'undefined'){
            ability2 = data.abilities[1].ability.name
          }
        
          if(typeof data.abilities[2] != 'undefined'){
            ability3 = data.abilities[2].ability.name
          }
      
          if(typeof data.abilities[3] != 'undefined'){
            ability4 = data.abilities[3].ability.name
          }
          

          setMember1({
            name: data.name,
            id: data.id,
            types: [type1, type2, type3, type4],
            sprite: sprite,
            abilities: [ability1, ability2, ability3, ability4],
            gameIcon: data.sprites.front_default
          })
        })
    } catch (error) {
      console.log(error.message);
      document.getElementById("error").innerHTML += 'Error, unable to reach: PokeApi';
    }
  }

  async function getPokemon2() {
    try{
      await fetch(`https://pokeapi.co/api/v2/pokemon/${search2}`)
        .then((response) => response.json())
        .then((data) => {
          setPokemon2(data);

          let type1 = "";
          let type2 = "";
          let type3 = "";
          let type4 = "";
      
          let ability1 = "";
          let ability2 = "";
          let ability3 = "";
          let ability4 = "";

          if(typeof data.name === 'undefined'){
            return;
          }
      
          let sprite = data.sprites.other.dream_world.front_default;
          if(sprite === null) {
            sprite = data.sprites.front_default;
          }
      
          if(typeof data.types[0] != 'undefined'){
            type1 = data.types[0].type.name
          }
          if(typeof data.types[1] != 'undefined'){
            type2 = data.types[1].type.name
          }
          if(typeof data.types[2] != 'undefined'){
            type3 = data.typesa[2].type.name
          }
          if(typeof data.types[3] != 'undefined'){
            type3 = data.type[3].type.name
          }

          if(typeof data.abilities[0] != 'undefined'){
            ability1 = data.abilities[0].ability.name
          }
          
          if(typeof data.abilities[1] != 'undefined'){
            ability2 = data.abilities[1].ability.name
          }
        
          if(typeof data.abilities[2] != 'undefined'){
            ability3 = data.abilities[2].ability.name
          }
      
          if(typeof data.abilities[3] != 'undefined'){
            ability4 = data.abilities[3].ability.name
          }

          setMember2({
            name: data.name,
            id: data.id,
            types: [type1, type2, type3, type4],
            sprite: sprite,
            abilities: [ability1, ability2, ability3, ability4],
            gameIcon: data.sprites.front_default
          })
        })
    } catch (error) {
      console.log(error.message);
    }
  }

  async function getPokemon3() {
    try{
      await fetch(`https://pokeapi.co/api/v2/pokemon/${search3}`)
        .then((response) => response.json())
        .then((data) => {
          setPokemon3(data);

          let type1 = "";
          let type2 = "";
          let type3 = "";
          let type4 = "";
      
          let ability1 = "";
          let ability2 = "";
          let ability3 = "";
          let ability4 = "";

          if(typeof data.name === 'undefined'){
            return;
          }
      
          let sprite = data.sprites.other.dream_world.front_default;
          if(sprite === null) {
            sprite = data.sprites.front_default;
          }
      
          if(typeof data.types[0] != 'undefined'){
            type1 = data.types[0].type.name
          }
          if(typeof data.types[1] != 'undefined'){
            type2 = data.types[1].type.name
          }
          if(typeof data.types[2] != 'undefined'){
            type3 = data.typesa[2].type.name
          }
          if(typeof data.types[3] != 'undefined'){
            type3 = data.type[3].type.name
          }

          if(typeof data.abilities[0] != 'undefined'){
            ability1 = data.abilities[0].ability.name
          }
          
          if(typeof data.abilities[1] != 'undefined'){
            ability2 = data.abilities[1].ability.name
          }
        
          if(typeof data.abilities[2] != 'undefined'){
            ability3 = data.abilities[2].ability.name
          }
      
          if(typeof data.abilities[3] != 'undefined'){
            ability4 = data.abilities[3].ability.name
          }

          setMember3({
            name: data.name,
            id: data.id,
            types: [type1, type2, type3, type4],
            sprite: sprite,
            abilities: [ability1, ability2, ability3, ability4],
            gameIcon: data.sprites.front_default
          })
        })
    } catch (error) {
      console.log(error.message);
    }
  }

  async function getPokemon4() {
    try{
      await fetch(`https://pokeapi.co/api/v2/pokemon/${search4}`)
        .then((response) => response.json())
        .then((data) => {
          setPokemon4(data);

          let type1 = "";
          let type2 = "";
          let type3 = "";
          let type4 = "";

          let ability1 = "";
          let ability2 = "";
          let ability3 = "";
          let ability4 = "";
      
          if(typeof data.name === 'undefined'){
            return;
          }
      
          let sprite = data.sprites.other.dream_world.front_default;
          if(sprite === null) {
            sprite = data.sprites.front_default;
          }
      
          if(typeof data.types[0] != 'undefined'){
            type1 = data.types[0].type.name
          }
          if(typeof data.types[1] != 'undefined'){
            type2 = data.types[1].type.name
          }
          if(typeof data.types[2] != 'undefined'){
            type3 = data.typesa[2].type.name
          }
          if(typeof data.types[3] != 'undefined'){
            type3 = data.type[3].type.name
          }

          if(typeof data.abilities[0] != 'undefined'){
            ability1 = data.abilities[0].ability.name
          }
          
          if(typeof data.abilities[1] != 'undefined'){
            ability2 = data.abilities[1].ability.name
          }
        
          if(typeof data.abilities[2] != 'undefined'){
            ability3 = data.abilities[2].ability.name
          }
      
          if(typeof data.abilities[3] != 'undefined'){
            ability4 = data.abilities[3].ability.name
          }
          setMember4({
            name: data.name,
            id: data.id,
            types: [type1, type2, type3, type4],
            sprite: sprite,
            abilities: [ability1, ability2, ability3, ability4],
            gameIcon: data.sprites.front_default
          })
        })
    } catch (error) {
      console.log(error.message);
    }
  }

  async function getPokemon5() {
    try{
      await fetch(`https://pokeapi.co/api/v2/pokemon/${search5}`)
        .then((response) => response.json())
        .then((data) => {
          setPokemon5(data);

          let type1 = "";
          let type2 = "";
          let type3 = "";
          let type4 = "";

          let ability1 = "";
          let ability2 = "";
          let ability3 = "";
          let ability4 = "";
      
          if(typeof data.name === 'undefined'){
            return;
          }
      
          let sprite = data.sprites.other.dream_world.front_default;
          if(sprite === null) {
            sprite = data.sprites.front_default;
          }
      
          if(typeof data.types[0] != 'undefined'){
            type1 = data.types[0].type.name
          }
          if(typeof data.types[1] != 'undefined'){
            type2 = data.types[1].type.name
          }
          if(typeof data.types[2] != 'undefined'){
            type3 = data.typesa[2].type.name
          }
          if(typeof data.types[3] != 'undefined'){
            type3 = data.type[3].type.name
          }

          if(typeof data.abilities[0] != 'undefined'){
            ability1 = data.abilities[0].ability.name
          }
          
          if(typeof data.abilities[1] != 'undefined'){
            ability2 = data.abilities[1].ability.name
          }
        
          if(typeof data.abilities[2] != 'undefined'){
            ability3 = data.abilities[2].ability.name
          }
      
          if(typeof data.abilities[3] != 'undefined'){
            ability4 = data.abilities[3].ability.name
          }
          setMember5({
            name: data.name,
            id: data.id,
            types: [type1, type2, type3, type4],
            sprite: sprite,
            abilities: [ability1, ability2, ability3, ability4],
            gameIcon: data.sprites.front_default
          })
        })
    } catch (error) {
      console.log(error.message);
    }
  }

  async function getPokemon6() {
    try{
      await fetch(`https://pokeapi.co/api/v2/pokemon/${search6}`)
        .then((response) => response.json())
        .then((data) => {
          setPokemon6(data);

          let type1 = "";
          let type2 = "";
          let type3 = "";
          let type4 = "";

          let ability1 = "";
          let ability2 = "";
          let ability3 = "";
          let ability4 = "";
      
          if(typeof data.name === 'undefined'){
            return;
          }
      
          let sprite = data.sprites.other.dream_world.front_default;
          if(sprite === null) {
            sprite = data.sprites.front_default;
          }
      
          if(typeof data.types[0] != 'undefined'){
            type1 = data.types[0].type.name
          }
          if(typeof data.types[1] != 'undefined'){
            type2 = data.types[1].type.name
          }
          if(typeof data.types[2] != 'undefined'){
            type3 = data.typesa[2].type.name
          }
          if(typeof data.types[3] != 'undefined'){
            type3 = data.type[3].type.name
          }

          if(typeof data.abilities[0] != 'undefined'){
            ability1 = data.abilities[0].ability.name
          }
          
          if(typeof data.abilities[1] != 'undefined'){
            ability2 = data.abilities[1].ability.name
          }
        
          if(typeof data.abilities[2] != 'undefined'){
            ability3 = data.abilities[2].ability.name
          }
      
          if(typeof data.abilities[3] != 'undefined'){
            ability4 = data.abilities[3].ability.name
          }
          setMember6({
            name: data.name,
            id: data.id,
            types: [type1, type2, type3, type4],
            sprite: sprite,
            abilities: [ability1, ability2, ability3, ability4],
            gameIcon: data.sprites.front_default
          })
        })
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getPokemon1();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search1]);

  useEffect(() => {
    getPokemon2();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search2]);

  useEffect(() => {
    getPokemon3();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search3]);

  useEffect(() => {
    getPokemon4();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search4]);

  useEffect(() => {
    getPokemon5();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search5]);

  useEffect(() => {
    getPokemon6();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search6]);

  function handleChange1(event) {
    console.log(event.target.value);
    setSearch1(event.target.value.toLowerCase());
    if(typeof pokemon1.name != 'undefined' && event.target.value !== pokemon1.name){
      setSearch1("")
    }
  }

  function handleChange2(event) {
    console.log(event.target.value);
    setSearch2(event.target.value.toLowerCase());
    if(typeof pokemon2.name != 'undefined' && event.target.value !== pokemon2.name){
      setSearch2("")
    }
  }

  function handleChange3(event) {
    console.log(event.target.value);
    setSearch3(event.target.value.toLowerCase());
    if(typeof pokemon3.name != 'undefined' && event.target.value !== pokemon3.name){
      setSearch3("")
    }
  }

  function handleChange4(event) {
    console.log(event.target.value);
    setSearch4(event.target.value.toLowerCase());
    if(typeof pokemon4.name != 'undefined' && event.target.value !== pokemon4.name){
      setSearch4("")
    }
  }

  function handleChange5(event) {
    console.log(event.target.value);
    setSearch5(event.target.value.toLowerCase());
    if(typeof pokemon5.name != 'undefined' && event.target.value !== pokemon5.name){
      setSearch5("")
    }
  }

  function handleChange6(event) {
    console.log(event.target.value);
    setSearch6(event.target.value.toLowerCase());
    if(typeof pokemon6.name != 'undefined' && event.target.value !== pokemon6.name){
      setSearch6("")
    }
  }

  function getMember1() {
    let type1 = "";
    let type2 = "";
    let type3 = "";
    let type4 = "";

    let ability1 = "";
    let ability2 = "";
    let ability3 = "";
    let ability4 = "";

    if(typeof pokemon1.name === 'undefined'){
      return;
    }

    let sprite = pokemon1.sprites.other.dream_world.front_default;
    if(sprite === null) {
      sprite = pokemon1.sprites.front_default;
    }

    if(typeof pokemon1.types[0] != 'undefined'){
      type1 = pokemon1.types[0].type.name
    }
    if(typeof pokemon1.types[1] != 'undefined'){
      type2 = pokemon1.types[1].type.name
    }
    if(typeof pokemon1.types[2] != 'undefined'){
      type3 = pokemon1.typesa[2].type.name
    }
    if(typeof pokemon1.types[3] != 'undefined'){
      type3 = pokemon1.type[3].type.name
    }

    if(typeof pokemon1.abilities[0] != 'undefined'){
      ability1 = pokemon1.abilities[0].ability.name
    }
    
    if(typeof pokemon1.abilities[1] != 'undefined'){
      ability2 = pokemon1.abilities[1].ability.name
    }
  
    if(typeof pokemon1.abilities[2] != 'undefined'){
      ability3 = pokemon1.abilities[2].ability.name
    }

    if(typeof pokemon1.abilities[3] != 'undefined'){
      ability4 = pokemon1.abilities[3].ability.name
    }
    setMember1({
      name: pokemon1.name,
      id: pokemon1.id,
      types: [type1, type2, type3, type4],
      sprite: sprite,
      abilities: [ability1, ability2, ability3, ability4],
      gameIcon: pokemon1.sprites.front_default
    })

  }

  function getMember2() {
    let type1 = "";
    let type2 = "";
    let type3 = "";
    let type4 = "";

    let ability1 = "";
    let ability2 = "";
    let ability3 = "";
    let ability4 = "";

    if(typeof pokemon2.name === 'undefined'){
      return;
    }

    let sprite = pokemon2.sprites.other.dream_world.front_default;
    if(sprite === null) {
      sprite = pokemon2.sprites.front_default;
    }

    if(typeof pokemon2.types[0] != 'undefined'){
      type1 = pokemon2.types[0].type.name
    }
    if(typeof pokemon2.types[1] != 'undefined'){
      type2 = pokemon2.types[1].type.name
    }
    if(typeof pokemon2.types[2] != 'undefined'){
      type3 = pokemon2.typesa[2].type.name
    }
    if(typeof pokemon2.types[3] != 'undefined'){
      type3 = pokemon2.type[3].type.name
    }

    if(typeof pokemon2.abilities[0] != 'undefined'){
      ability1 = pokemon2.abilities[0].ability.name
    }
    
    if(typeof pokemon2.abilities[1] != 'undefined'){
      ability2 = pokemon2.abilities[1].ability.name
    }
  
    if(typeof pokemon2.abilities[2] != 'undefined'){
      ability3 = pokemon2.abilities[2].ability.name
    }

    if(typeof pokemon2.abilities[3] != 'undefined'){
      ability4 = pokemon2.abilities[3].ability.name
    }
    setMember2({
      name: pokemon2.name,
      id: pokemon2.id,
      types: [type1, type2, type3, type4],
      sprite: sprite,
      abilities: [ability1, ability2, ability3, ability4],
      gameIcon: pokemon2.sprites.front_default
    })

  }

  function getMember3() {
    let type1 = "";
    let type2 = "";
    let type3 = "";
    let type4 = "";

    let ability1 = "";
    let ability2 = "";
    let ability3 = "";
    let ability4 = "";

    if(typeof pokemon3.name === 'undefined'){
      return;
    }

    let sprite = pokemon3.sprites.other.dream_world.front_default;
    if(sprite === null) {
      sprite = pokemon3.sprites.front_default;
    }

    if(typeof pokemon3.types[0] != 'undefined'){
      type1 = pokemon3.types[0].type.name
    }
    if(typeof pokemon3.types[1] != 'undefined'){
      type2 = pokemon3.types[1].type.name
    }
    if(typeof pokemon3.types[2] != 'undefined'){
      type3 = pokemon3.typesa[2].type.name
    }
    if(typeof pokemon3.types[3] != 'undefined'){
      type3 = pokemon3.type[3].type.name
    }

    if(typeof pokemon3.abilities[0] != 'undefined'){
      ability1 = pokemon3.abilities[0].ability.name
    }
    
    if(typeof pokemon3.abilities[1] != 'undefined'){
      ability2 = pokemon3.abilities[1].ability.name
    }
  
    if(typeof pokemon3.abilities[2] != 'undefined'){
      ability3 = pokemon3.abilities[2].ability.name
    }

    if(typeof pokemon3.abilities[3] != 'undefined'){
      ability4 = pokemon3.abilities[3].ability.name
    }
    setMember3({
      name: pokemon3.name,
      id: pokemon3.id,
      types: [type1, type2, type3, type4],
      sprite: sprite,
      abilities: [ability1, ability2, ability3, ability4],
      gameIcon: pokemon3.sprites.front_default
    })

  }

  function getMember4() {
    let type1 = "";
    let type2 = "";
    let type3 = "";
    let type4 = "";

    let ability1 = "";
    let ability2 = "";
    let ability3 = "";
    let ability4 = "";

    if(typeof pokemon4.name === 'undefined'){
      return;
    }

    let sprite = pokemon4.sprites.other.dream_world.front_default;
    if(sprite === null) {
      sprite = pokemon4.sprites.front_default;
    }

    if(typeof pokemon4.types[0] != 'undefined'){
      type1 = pokemon4.types[0].type.name
    }
    if(typeof pokemon4.types[1] != 'undefined'){
      type2 = pokemon4.types[1].type.name
    }
    if(typeof pokemon4.types[2] != 'undefined'){
      type3 = pokemon4.typesa[2].type.name
    }
    if(typeof pokemon4.types[3] != 'undefined'){
      type3 = pokemon4.type[3].type.name
    }

    if(typeof pokemon4.abilities[0] != 'undefined'){
      ability1 = pokemon4.abilities[0].ability.name
    }
    
    if(typeof pokemon4.abilities[1] != 'undefined'){
      ability2 = pokemon4.abilities[1].ability.name
    }
  
    if(typeof pokemon4.abilities[2] != 'undefined'){
      ability3 = pokemon4.abilities[2].ability.name
    }

    if(typeof pokemon4.abilities[3] != 'undefined'){
      ability4 = pokemon4.abilities[3].ability.name
    }
    setMember4({
      name: pokemon4.name,
      id: pokemon4.id,
      types: [type1, type2, type3, type4],
      sprite: sprite,
      abilities: [ability1, ability2, ability3, ability4],
      gameIcon: pokemon4.sprites.front_default
    })

  }

  function getMember5() {
    let type1 = "";
    let type2 = "";
    let type3 = "";
    let type4 = "";

    let ability1 = "";
    let ability2 = "";
    let ability3 = "";
    let ability4 = "";

    if(typeof pokemon5.name === 'undefined'){
      return;
    }

    let sprite = pokemon5.sprites.other.dream_world.front_default;
    if(sprite === null) {
      sprite = pokemon5.sprites.front_default;
    }

    if(typeof pokemon5.types[0] != 'undefined'){
      type1 = pokemon5.types[0].type.name
    }
    if(typeof pokemon5.types[1] != 'undefined'){
      type2 = pokemon5.types[1].type.name
    }
    if(typeof pokemon5.types[2] != 'undefined'){
      type3 = pokemon5.typesa[2].type.name
    }
    if(typeof pokemon5.types[3] != 'undefined'){
      type3 = pokemon5.type[3].type.name
    }

    if(typeof pokemon5.abilities[0] != 'undefined'){
      ability1 = pokemon5.abilities[0].ability.name
    }
    
    if(typeof pokemon5.abilities[1] != 'undefined'){
      ability2 = pokemon5.abilities[1].ability.name
    }
  
    if(typeof pokemon5.abilities[2] != 'undefined'){
      ability3 = pokemon5.abilities[2].ability.name
    }

    if(typeof pokemon5.abilities[3] != 'undefined'){
      ability4 = pokemon5.abilities[3].ability.name
    }
    setMember5({
      name: pokemon5.name,
      id: pokemon5.id,
      types: [type1, type2, type3, type4],
      sprite: sprite,
      abilities: [ability1, ability2, ability3, ability4],
      gameIcon: pokemon5.sprites.front_default
    })

  }

  function getMember6() {
    let type1 = "";
    let type2 = "";
    let type3 = "";
    let type4 = "";

    let ability1 = "";
    let ability2 = "";
    let ability3 = "";
    let ability4 = "";

    if(typeof pokemon6.name === 'undefined'){
      return;
    }

    let sprite = pokemon6.sprites.other.dream_world.front_default;
    if(sprite === null) {
      sprite = pokemon6.sprites.front_default;
    }

    if(typeof pokemon6.types[0] != 'undefined'){
      type1 = pokemon6.types[0].type.name
    }
    if(typeof pokemon6.types[1] != 'undefined'){
      type2 = pokemon6.types[1].type.name
    }
    if(typeof pokemon6.types[2] != 'undefined'){
      type3 = pokemon6.typesa[2].type.name
    }
    if(typeof pokemon6.types[3] != 'undefined'){
      type3 = pokemon6.type[3].type.name
    }

    if(typeof pokemon6.abilities[0] != 'undefined'){
      ability1 = pokemon6.abilities[0].ability.name
    }
    
    if(typeof pokemon6.abilities[1] != 'undefined'){
      ability2 = pokemon6.abilities[1].ability.name
    }
  
    if(typeof pokemon6.abilities[2] != 'undefined'){
      ability3 = pokemon6.abilities[2].ability.name
    }

    if(typeof pokemon6.abilities[3] != 'undefined'){
      ability4 = pokemon6.abilities[3].ability.name
    }
    setMember6({
      name: pokemon6.name,
      id: pokemon6.id,
      types: [type1, type2, type3, type4],
      sprite: sprite,
      abilities: [ability1, ability2, ability3, ability4],
      gameIcon: pokemon6.sprites.front_default
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
 
  // This randomizer has lots of issues...will work on them
  // if I have time later
  function randomize1(){
    let num = getRandomInt(1, 898);
    setSearch1(num);
    console.log(num);
    console.log(search1);
    getMember1();

    num = getRandomInt(1, 898);
    setSearch2(num);
    getMember2();
    
    num = getRandomInt(1, 898);
    setSearch3(num);
    getMember3();
    
    num = getRandomInt(1, 898);
    setSearch4(num);
    getMember4();
    
    num = getRandomInt(1, 898);
    setSearch5(num);
    getMember5();
    
    num = getRandomInt(1, 898);
    setSearch6(num);
    getMember6();
    
  }

  function clearInput() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    document.getElementById("input4").value = "";
    document.getElementById("input5").value = "";
    document.getElementById("input6").value = "";
  }

  return (
    <div className="mainBody">
      <div className="mainContainer">

        <div className="card border-0 grow-shadow">
          <div className="card-header border-0 p-0">
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
           
              <div className="searchContainer">
                <label htmlFor="pokeSearch"></label>
                <input type="text" id="input1" className="pokeSearch" placeholder="Get Pokemon!" name="pokeSearch" onChange={handleChange1} 
                autoComplete="off" onKeyDown={handleKeyDown1} onBlur={clearInput}></input>
              </div>
            </div>
          </div>
        </div>

        <div className="card border-0 grow-shadow">
          <div className="card-header border-0 p-0">
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
              <div className="searchContainer">
                <label htmlFor="pokeSearch"></label>
                <input type="text" id="input2" className="pokeSearch" placeholder="Get Pokemon!" name="pokeSearch" 
                onChange={handleChange2} autoComplete="off" onKeyDown={handleKeyDown2} onBlur={clearInput}></input>
              </div>
            </div>
          </div>
        </div>

        <div className="card border-0 grow-shadow">
          <div className="card-header border-0 p-0">
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
                <input type="text" id="input3" className="pokeSearch" placeholder="Get Pokemon!" name="pokeSearch" 
                onChange={handleChange3} autoComplete="off" onKeyDown={handleKeyDown3} onBlur={clearInput}></input>
              </div>
            </div>
          </div>
        </div>

        <div className="card border-0 grow-shadow">
          <div className="card-header border-0 p-0">
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
                <input type="text" id="input4" className="pokeSearch" placeholder="Get Pokemon!" name="pokeSearch" 
                onChange={handleChange4} autoComplete="off" onKeyDown={handleKeyDown4} onBlur={clearInput}></input>
              </div>
            </div>
          </div>
        </div>

        <div className="card border-0 grow-shadow">
          <div className="card-header border-0 p-0">
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
                <input type="text" id="input5" className="pokeSearch" placeholder="Get Pokemon!" name="pokeSearch" 
                onChange={handleChange5} autoComplete="off" onKeyDown={handleKeyDown5} onBlur={clearInput}></input>
              </div>
            </div>
          </div>
        </div>

        <div className="card border-0 grow-shadow">
          <div className="card-header border-0 p-0">
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
                <input type="text" id="input6" className="pokeSearch" placeholder="Get Pokemon!" name="pokeSearch" 
                onChange={handleChange6} autoComplete="off" onKeyDown={handleKeyDown6} onBlur={clearInput}></input>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="randContainer">
        <button type="button" className="randomizer grow-shadow" onClick={randomize1}>Randomize Team!</button>
      </div>
      <h2 className="tableTitle text-center">Abilities</h2>
      <div className="table-responsive tableContainer text-center">
        <table className="table vertical-align-center">
          <tbody>
            <tr>
              <th scope="col"><img src={member1.gameIcon} alt={member1.name} height="80" width="80"></img></th>
              <td>{member1.abilities[0].toUpperCase()}</td>
              <td>{member1.abilities[1].toUpperCase()}</td>
              <td>{member1.abilities[2].toUpperCase()}</td>
              <td>{member1.abilities[3].toUpperCase()}</td>
            </tr>
            <tr>
              <th scope="col"><img src={member2.gameIcon} alt={member2.name} height="80" width="80"></img></th>
              <td>{member2.abilities[0].toUpperCase()}</td>
              <td>{member2.abilities[1].toUpperCase()}</td>
              <td>{member2.abilities[2].toUpperCase()}</td>
              <td>{member2.abilities[3].toUpperCase()}</td>
            </tr>
            <tr>
              <th scope="col"><img src={member3.gameIcon} alt={member3.name} height="80" width="80"></img></th>
              <td>{member3.abilities[0].toUpperCase()}</td>
              <td>{member3.abilities[1].toUpperCase()}</td>
              <td>{member3.abilities[2].toUpperCase()}</td>
              <td>{member3.abilities[3].toUpperCase()}</td>
            </tr>
            <tr>
              <th scope="col"><img src={member4.gameIcon} alt={member4.name} height="80" width="80"></img></th>
              <td>{member4.abilities[0].toUpperCase()}</td>
              <td>{member4.abilities[1].toUpperCase()}</td>
              <td>{member4.abilities[2].toUpperCase()}</td>
              <td>{member4.abilities[3].toUpperCase()}</td>
            </tr>
            <tr>
              <th scope="col"><img src={member5.gameIcon} alt={member5.name} height="80" width="80"></img></th>
              <td>{member5.abilities[0].toUpperCase()}</td>
              <td>{member5.abilities[1].toUpperCase()}</td>
              <td>{member5.abilities[2].toUpperCase()}</td>
              <td>{member5.abilities[3].toUpperCase()}</td>
            </tr>
            <tr>
              <th scope="col"><img src={member6.gameIcon} alt={member6.name} height="80" width="80"></img></th>
              <td>{member6.abilities[0].toUpperCase()}</td>
              <td>{member6.abilities[1].toUpperCase()}</td>
              <td>{member6.abilities[2].toUpperCase()}</td>
              <td>{member6.abilities[3].toUpperCase()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
