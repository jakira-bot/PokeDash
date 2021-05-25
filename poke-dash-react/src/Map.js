import { useState, useEffect } from "react";

export default function Search() {
  const [map, setMap] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    getMap();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  async function getMap() {
    try {
      let response = await fetch(`https://pokeapi.co/api/v2/region/${search}`);
      let data = await response.json();
      setMap(data);
      //console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  function handleChange(event) {
    console.log(event.target.value);
    setSearch(event.target.value)
  }

  let locations = map.locations;
  console.log(locations);

  return (
    <>
      <form className="mt-2 ml-2">
        <h2>Search</h2>
        <label htmlFor="item"> Search for a map region (e.g kanto)</label>
        <input type="text" onChange={handleChange} />
        <input className="btn btn-primary" type="submit" value="Search" />
          {/* <select class="select_options" id="search">
            <option value="">Choose an Option</option>
            <option value="kanto">Kanto</option>
            <option value="johto">Johto</option>
          </select> */}
      </form>
      {locations && (
        <div>
          {
            locations.map((anObjectMapped, index) => {
              return (
                  <p key={`${anObjectMapped.name}_{anObjectMapped.url}`}>
                      {anObjectMapped.name} - {anObjectMapped.url}
                  </p>
              );
          })
          }
        </div>
      )}
    </>
  );
}
