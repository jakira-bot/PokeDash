export default function Home() {

  let url = 'https://pokeapi.co/api/v2/pokemon?limit=898",';
  let search = 'https://pokeapi.co/api/v2/pokemon/';

  let count = 0;
  
  let list = [];

  async function pokeGrab(pname) {
    let partA = await fetch([search,pname].join(''));
    let partB = await partA.json();
    console.log(partB);
    return await partB;
  }
  
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
          console.log(list[0].name);
          let current = pokeGrab(list[0].name);
          current = current.then( (data) => console.log(data.abilities));
      }
      else {
          console.log( `Status Code: ${xhr.status} - ${xhr.statusText }`) ;
      }
  };

  return (
    <>
      <h1>Home</h1>
    </>
  );
}