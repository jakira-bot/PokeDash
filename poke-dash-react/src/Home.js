import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, CardGroup, ListGroup } from 'react-bootstrap';

let url = 'https://pokeapi.co/api/v2/pokemon?limit=898",';
let search = 'https://pokeapi.co/api/v2/pokemon/';

let count = 0;

let list = [];
//Spot holders for the inital load
let pokeA = ["Bulbasaur",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
  "grass poison",
  "overgrown / chlorophyll",
  "1"
]

let pokeB = ["Ivysaur",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
  "grass poison",
  "overgrown / chlorophyll",
  "2"
]

let pokeC = ["Venusaur ",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
  "grass poison",
  "overgrown / chlorophyll",
  "3"
]


export default function Home() {

  

  async function pokeGrab(pname) {
    let partA = await fetch([search,pname].join(''));
    let partB = await partA.json();
    console.log(partB);
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
            console.log(list[num].name);
            let current = pokeGrab(list[num].name);
            current = current.then( (data) => {
              console.log(data.abilities);
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
  
  pokeStart(count)
  pokeStart(2)

  return (
    <>
      <h1>Home</h1>
      <div>

      <CardGroup>
        <Card className="text-center">
          <Card.Img variant="top" src={pokeA[1]}  height={300} />
          <Card.Body >
            <Card.Title>{pokeA[0]}</Card.Title>
            <ListGroup className="list-group-flush">
            <ListGroup.Item>Dex Entry: {pokeA[4]}</ListGroup.Item>
              <ListGroup.Item>Type: {pokeA[2]}</ListGroup.Item>
              <ListGroup.Item>Ability: {pokeA[3]}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card className="text-center">
          <Card.Img variant="top" src={pokeB[1]} height={300} />
          <Card.Body >
            <Card.Title>{pokeB[0]}</Card.Title>
            <ListGroup className="list-group-flush">
            <ListGroup.Item>Dex Entry: {pokeB[4]}</ListGroup.Item>
              <ListGroup.Item>Type: {pokeB[2]}</ListGroup.Item>
              <ListGroup.Item>Ability: {pokeB[3]}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card className="text-center">
          <Card.Img variant="top" src={pokeC[1]} height={300} />
          <Card.Body >
            <Card.Title>{pokeC[0]}</Card.Title>
            <ListGroup className="list-group-flush">
            <ListGroup.Item>Dex Entry: {pokeC[4]}</ListGroup.Item>
              <ListGroup.Item>Type: {pokeC[2]}</ListGroup.Item>
              <ListGroup.Item>Ability: {pokeC[3]}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </CardGroup>

      </div>
    </>
  );
}