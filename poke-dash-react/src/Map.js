import { useState, useEffect } from "react";

export default function Search() {
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  //const [areas, setAreas] = useState("");

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
      setSelectedLocation(data.areas);
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

  function areaInfo(selectedLocation) {
    selectedLocation.forEach(() => {
      try {
        console.log(selectedLocation.url  )
        let response = fetch(`${selectedLocation.url}`);
        let data = response.json();
        console.log(data);
      } catch(error) {
        console.log(error);
      }
    }
    )}

  return (
    <>
      <form className="mt-2 ml-2 text-center">
        <h2 className='text-center'>Search</h2>
        <label htmlFor="item"> Search for a map region (e.g kanto)</label>
          <select id="search" onChange={handleChange}>
            <option value="">Choose an Option</option>
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
          <option value="">Choose an Option</option>
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
      {selectedLocation && (
        <div>
          {
            selectedLocation.map((selectedLocation) => {
              return (
                <div className='text-center' key={`${selectedLocation.name}`}>
                  {selectedLocation.name} - {selectedLocation.url}
                </div>
              )
            })
            //areaInfo(selectedLocation)
          }
        </div>
      )}
    </>
  );
}
