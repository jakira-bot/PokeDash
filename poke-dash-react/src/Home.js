import './Team-Builder.scss';
import React from 'react';
import { useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, CardGroup, ListGroup, Container, Row  } from 'react-bootstrap';


let url = 'https://pokeapi.co/api/v2/pokemon?limit=898",';
let search = 'https://pokeapi.co/api/v2/pokemon/';

let countR = 2;
let countL = 0;
let list = [];
pokeStart(0);
//Spot holders for the inital load


export default function Home() {
  const [pokeA, setPokeA] = useState(["Bulbasaur",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
    "grass", "poison",
    "Overgrown / Chlorophyll",
    "1"
  ]);

  const [pokeB, setPokeB] = useState(["Ivysaur",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
    "grass", "poison",
    "Overgrown / Chlorophyll",
    "2"
  ]);

  const [pokeC, setPokeC] = useState(["Venusaur ",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
    "grass", "poison",
    "Overgrown / Chlorophyll",
    "3"
  ]);

  const [pokeid, setPokeid] = useState(null);

  pokeStart(0);
  useEffect(() =>{
    let  xhr = new XMLHttpRequest();
    xhr.open ('GET', url, true);
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = () => {
        if ( xhr.status === 200) {
          list = xhr.response.results;
          let current = pokeGrab(list[countL].name);
          current = current.then( (data) => {
            let fill = [Caps(data.name)];
            if( data.sprites.other.dream_world.front_default != null){
              fill.push(data.sprites.other.dream_world.front_default);
            } else (
              fill.push(data.sprites.front_default)
            )
            
            if(data.types.length == 1){
              fill.push(data.types[0].type.name);
              fill.push("");
            } else {
              fill.push(data.types[0].type.name);
              fill.push(data.types[1].type.name);
          }
            if(data.abilities.length == 3){
              fill.push([Caps(data.abilities[0].ability.name),Caps(data.abilities[1].ability.name), Caps(data.abilities[2].ability.name)].join(' / '));
            } else if(data.abilities.length == 2){
              fill.push([Caps(data.abilities[0].ability.name),Caps(data.abilities[1].ability.name)].join(' / '));
            } else { 
              fill.push(Caps(data.abilities[0].ability.name));
            }
            fill.push(data.id);
            setPokeA(fill);
          });

          current = pokeGrab(list[countR-1].name);
          current = current.then( (data) => {
            let fill = [Caps(data.name)];
            if( data.sprites.other.dream_world.front_default != null){
              fill.push(data.sprites.other.dream_world.front_default);
            } else (
              fill.push(data.sprites.front_default)
            )
            
            if(data.types.length == 1){
              fill.push(data.types[0].type.name);
              fill.push("");
            } else {
              fill.push(data.types[0].type.name);
              fill.push(data.types[1].type.name);
          }
            if(data.abilities.length == 3){
              fill.push([Caps(data.abilities[0].ability.name),Caps(data.abilities[1].ability.name), Caps(data.abilities[2].ability.name)].join(' / '));
            } else if(data.abilities.length == 2){
              fill.push([Caps(data.abilities[0].ability.name),Caps(data.abilities[1].ability.name)].join(' / '));
            } else { 
              fill.push(Caps(data.abilities[0].ability.name));
            }
            fill.push(data.id);
            setPokeB(fill);
          });
          current = pokeGrab(list[countR].name);
          current = current.then( (data) => {
            let fill = [Caps(data.name)];
            if( data.sprites.other.dream_world.front_default != null){
              fill.push(data.sprites.other.dream_world.front_default);
            } else (
              fill.push(data.sprites.front_default)
            )
            
            if(data.types.length == 1){
              fill.push(data.types[0].type.name);
              fill.push("");
            } else {
              fill.push(data.types[0].type.name);
              fill.push(data.types[1].type.name);
          }
            if(data.abilities.length == 3){
              fill.push([Caps(data.abilities[0].ability.name),Caps(data.abilities[1].ability.name), Caps(data.abilities[2].ability.name)].join(' / '));
            } else if(data.abilities.length == 2){
              fill.push([Caps(data.abilities[0].ability.name),Caps(data.abilities[1].ability.name)].join(' / '));
            } else { 
              fill.push(Caps(data.abilities[0].ability.name));
            }
            fill.push(data.id);
            setPokeC(fill);
          });
        }
        else {
            console.log( `Status Code: ${xhr.status} - ${xhr.statusText }`) ;
        }
    };
  },[])
 
  
  function Next(){
    if(countR == 897){
      countR = 0;
    } else {
      countR = countR + 1;
    }
    if(countL == 897){
      countL = 0;
    } else {
      countL = countL + 1;
    }
    setPokeA(pokeB);
    setPokeB(pokeC);
    let current = pokeGrab(list[countR].name);
    current = current.then( (data) => {
      let fill = [Caps(data.name)];
      if( data.sprites.other.dream_world.front_default != null){
        fill.push(data.sprites.other.dream_world.front_default);
      } else (
        fill.push(data.sprites.front_default)
      )
      if(data.types.length == 1){
        fill.push(data.types[0].type.name);
        fill.push("");
      } else {
        fill.push(data.types[0].type.name);
        fill.push(data.types[1].type.name);
    }
      if(data.abilities.length == 3){
        fill.push([Caps(data.abilities[0].ability.name),Caps(data.abilities[1].ability.name), Caps(data.abilities[2].ability.name)].join(' / '));
      } else if(data.abilities.length == 2){
        fill.push([Caps(data.abilities[0].ability.name),Caps(data.abilities[1].ability.name)].join(' / '));
      } else { 
        fill.push(Caps(data.abilities[0].ability.name));
      }
      fill.push(data.id);
      setPokeC(fill);
    });
}

function Previous(){
  if(countR == 0){
    countR = 897;
  } else {
    countR = countR - 1;
  }
  if(countL == 0){
    countL = 897;
  } else {
    countL = countL - 1;
  }
  setPokeC(pokeB);
  setPokeB(pokeA);
  let current = pokeGrab(list[countL].name);
  current = current.then( (data) => {
    let fill = [Caps(data.name)];
    if( data.sprites.other.dream_world.front_default != null){
      fill.push(data.sprites.other.dream_world.front_default);
    } else (
      fill.push(data.sprites.front_default)
    )
    
    if(data.types.length == 1){
      fill.push(data.types[0].type.name);
      fill.push("");
    } else {
      fill.push(data.types[0].type.name);
      fill.push(data.types[1].type.name);
  }
    if(data.abilities.length == 3){
      fill.push([Caps(data.abilities[0].ability.name),Caps(data.abilities[1].ability.name), Caps(data.abilities[2].ability.name)].join(' / '));
    } else if(data.abilities.length == 2){
      fill.push([Caps(data.abilities[0].ability.name),Caps(data.abilities[1].ability.name)].join(' / '));
    } else { 
      fill.push(Caps(data.abilities[0].ability.name));
    }
    fill.push(data.id);
    setPokeA(fill);
  });
}
  
function search(){
  if(pokeid != null){
    if(pokeid == 898){
      countR = 0;
      countL = 896;
    } else if(pokeid == 1){
      countR = 1;
      countL = 897;
    } else {
      countR = parseInt(pokeid);
      countL = parseInt(pokeid) - 2;
    }
    
    let current = pokeGrab(list[countL].name);
    current = current.then( (data) => {
      let fill = [Caps(data.name)];
      if( data.sprites.other.dream_world.front_default != null){
        fill.push(data.sprites.other.dream_world.front_default);
      } else (
        fill.push(data.sprites.front_default)
      )
      
      if(data.types.length == 1){
        fill.push(data.types[0].type.name);
        fill.push("");
      } else {
        fill.push(data.types[0].type.name);
        fill.push(data.types[1].type.name);
    }
      if(data.abilities.length == 3){
        fill.push([Caps(data.abilities[0].ability.name),Caps(data.abilities[1].ability.name), Caps(data.abilities[2].ability.name)].join(' / '));
      } else if(data.abilities.length == 2){
        fill.push([Caps(data.abilities[0].ability.name),Caps(data.abilities[1].ability.name)].join(' / '));
      } else { 
        fill.push(Caps(data.abilities[0].ability.name));
      }
      fill.push(data.id);
      setPokeA(fill);
    });

    current = pokeGrab(list[countR-1].name);
    current = current.then( (data) => {
      let fill = [Caps(data.name)];
      if( data.sprites.other.dream_world.front_default != null){
        fill.push(data.sprites.other.dream_world.front_default);
      } else (
        fill.push(data.sprites.front_default)
      )
      
      if(data.types.length == 1){
        fill.push(data.types[0].type.name);
        fill.push("");
      } else {
        fill.push(data.types[0].type.name);
        fill.push(data.types[1].type.name);
    }
      if(data.abilities.length == 3){
        fill.push([Caps(data.abilities[0].ability.name),Caps(data.abilities[1].ability.name), Caps(data.abilities[2].ability.name)].join(' / '));
      } else if(data.abilities.length == 2){
        fill.push([Caps(data.abilities[0].ability.name),Caps(data.abilities[1].ability.name)].join(' / '));
      } else { 
        fill.push(Caps(data.abilities[0].ability.name));
      }
      fill.push(data.id);
      setPokeB(fill);
    });
    current = pokeGrab(list[countR].name);
    current = current.then( (data) => {
      let fill = [Caps(data.name)];
      if( data.sprites.other.dream_world.front_default != null){
        fill.push(data.sprites.other.dream_world.front_default);
      } else (
        fill.push(data.sprites.front_default)
      )
      
      if(data.types.length == 1){
        fill.push(data.types[0].type.name);
        fill.push("");
      } else {
        fill.push(data.types[0].type.name);
        fill.push(data.types[1].type.name);
    }
      if(data.abilities.length == 3){
        fill.push([Caps(data.abilities[0].ability.name),Caps(data.abilities[1].ability.name), Caps(data.abilities[2].ability.name)].join(' / '));
      } else if(data.abilities.length == 2){
        fill.push([Caps(data.abilities[0].ability.name),Caps(data.abilities[1].ability.name)].join(' / '));
      } else { 
        fill.push(Caps(data.abilities[0].ability.name));
      }
      fill.push(data.id);
      setPokeC(fill);
    });
  }
}

function onInput(event){
  if(event.target.value > 0 && event.target.value < 899){
    setPokeid(event.target.value)
  } else {
    setPokeid(null)
  }
}

function keyStroke(stroke){
  if(stroke.key === 'Enter') {
    search();
  }
}



  //The colors (scss code), middle button design was done by Darian Hutchinson
  return (
    <>
      <h1>Home</h1>
      <section id="Box">
      <div id="Home">

      <CardGroup>
        <Card className="text-center">
          <Card.Img variant="top" src={pokeA[1]}  height={500} />
          <Card.Body >
            <Card.Title>{pokeA[0]}</Card.Title>
            <ListGroup className="list-group-flush">
            <ListGroup.Item>Dex Entry: {pokeA[5]}</ListGroup.Item>
            <ListGroup.Item>Type: <span className="type" title={pokeA[2]}>{pokeA[2].toUpperCase()}</span> <span className="type" title={pokeA[3]}>{pokeA[3].toUpperCase()}</span></ListGroup.Item>
              <ListGroup.Item>Ability: {pokeA[4]}</ListGroup.Item>
            </ListGroup>
            <Button variant="primary"  className="btn-primary" size="lg" onClick={Previous}>Previous</Button>
          </Card.Body>
        </Card>
        <Card className="text-center">
          <Card.Img variant="top" src={pokeB[1]} height={500} />
          <Card.Body >
            <Card.Title>{pokeB[0]}</Card.Title>
            <ListGroup className="list-group-flush">
            <ListGroup.Item>Dex Entry: {pokeB[5]}</ListGroup.Item>
            <ListGroup.Item>Type: <span className="type" title={pokeB[2]}>{pokeB[2].toUpperCase()}</span> <span className="type" title={pokeB[3]}>{pokeB[3].toUpperCase()}</span></ListGroup.Item>
              <ListGroup.Item>Ability: {pokeB[4]}</ListGroup.Item>
            </ListGroup>
            <Container>
                <Row>
                <input type="text" className="pokeSearch" placeholder="Input Dex Entry" name="pokeid" autoComplete="off" onChange={onInput} onKeyDown={keyStroke}></input>
                <button type="button" onClick={search}><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="masterball"
                height="50" width="50"></img></button>
              </Row>
            </Container>
          </Card.Body>
        </Card>
        <Card className="text-center">
          <Card.Img variant="top" src={pokeC[1]} height={500} />
          <Card.Body >
            <Card.Title>{pokeC[0]}</Card.Title>
            <ListGroup className="list-group-flush">
            <ListGroup.Item>Dex Entry: {pokeC[5]}</ListGroup.Item>
              <ListGroup.Item>Type: <span className="type" title={pokeC[2]}>{pokeC[2].toUpperCase()}</span> <span className="type" title={pokeC[3]}>{pokeC[3].toUpperCase()}</span></ListGroup.Item>
              <ListGroup.Item>Ability: {pokeC[4]}</ListGroup.Item>
            </ListGroup>
            <Button variant="Danger"  className="btn-danger" size="lg" onClick={Next} width={20}>Next</Button>
          </Card.Body>
          
        </Card>
      </CardGroup>

      </div>
      </section>
    </>
  );
}


async function pokeGrab(pname) {
  let partA = await fetch([search,pname].join(''));
  let partB = await partA.json();
  //console.log(partB);
  return await partB;
}


function pokeStart(num) {
  let  xhr = new XMLHttpRequest();
  xhr.open ('GET', url, true);
  xhr.responseType = 'json';
  xhr.send();
  
  xhr.onload = () => {
      if ( xhr.status === 200) {
          //console.log(xhr.response);
          for (const mon of xhr.response.results){
          }
          list = xhr.response.results;
          console.log(list);
          let current = pokeGrab(list[num].name);
          current = current.then( (data) => {
            //let pic = document.createElement('img');
            //pic.src = data.sprites.other.dream_world.front_default;
            //pic.style.display = "block";
            return [data.name, data.sprites.other.dream_world.front_default]
          });
      }
      else {
          console.log( `Status Code: ${xhr.status} - ${xhr.statusText }`) ;
      }
  };
}

function Caps(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

