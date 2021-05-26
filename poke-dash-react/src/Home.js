export default function Home() {

  let url = 'https://pokeapi.co/api/v2/pokemon?limit=898",';

  let count = 0;
  
  let list = [];
  
  let  xhr = new XMLHttpRequest();
  xhr.open ('GET', url, true);
  xhr.responseType = 'json';
  xhr.send();
  
  xhr.onload = () => {
      if ( xhr.status === 200) {
          console.log(xhr.response);
          for (const mon of xhr.response.results){
          }
          list = xhr.response.results;
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