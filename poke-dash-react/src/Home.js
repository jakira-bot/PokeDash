export default function Home() {

  let url = 'https://pokeapi.co/api/v2/pokemon?limit=898",';
  let search = 'https://pokeapi.co/api/v2/pokemon/';

  let count = 0;
  
  let list = [];

  let pokeI = ["bulbasaur",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
  
  ]

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

  return (
    <>
      <h1>Home</h1>
      <div>
        <div>
          <img src={pokeI[1]} />
        </div>

        
      </div>
    </>
  );
}