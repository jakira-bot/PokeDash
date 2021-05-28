import { useState, useEffect } from "react";

export default function Search() {
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  //const [selectedLocation, setSelectedLocation] = useState("");
  const [areas, setAreas] = useState("");

  useEffect(() => {
    getRegion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  useEffect(() => {
    getLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  async function getRegion() {
    try {
      let response = await fetch(`https://pokeapi.co/api/v2/region/${search}`);
      let data = await response.json();
      setRegion(data);
      //console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getLocation() {
    try {
      let response = await fetch(`https://pokeapi.co/api/v2/location/${location}`);
      let data = await response.json();
      setAreas(data.areas);
      //console.log(data);
      //console.log(data.areas);
    } catch (error) {
      console.error(error);
    }
  }

  function handleChange(event) {
    console.log(event.target.value);
    setSearch(event.target.value.toLowerCase());
  }

  function selectLocation(event) {
    console.log(event.target.value);
    setLocation(event.target.value);
  }

  function areaInfo(areas) {

    for (const area of areas) {
      //console.log(area.name);
      fetch(area.url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        console.log(data.name);
        return (
          <div>
            {data.name}
          </div>
        )
      })
      .catch(error => console.log(error))
    }
  }

  function displayAreaName(name) {
    return (
      <div>
        {name}
      </div>
    )
  }

  return (
    <>
      <form className="mt-2 ml-2 text-center">
        <h2 className='text-center'>Search</h2>
        <label htmlFor="item"> Search for a map region (e.g kanto)</label>
          <select id="search" onChange={handleChange}>
            <option value="">Choose a Region</option>
            <option value="kanto" >Kanto</option>
            <option value="johto">Johto</option>
            <option value="hoenn">Hoenn</option>
            <option value="sinnoh">Sinnoh</option>
            <option value="unova">Unova</option>
            <option value="kalos">Kalos</option>
            <option value="alola">Alola</option>
          </select>
      </form>
      {region.locations && (
        <div className='text-center'>
          <select onChange={selectLocation}>
          <option value="">Choose a Location</option>
          {
            region.locations.map((locations) => {
              return (
                <option value={locations.name} key={`${locations.name}`}>
                    {locations.name}
                </option>
              );
          })
          }
        </select>
      </div>
      )}
      {areas && (
        <div>
          {
            areaInfo(areas)
          }
        </div>
      )}
    </>
  );
}