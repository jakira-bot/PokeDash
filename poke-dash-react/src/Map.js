import './Map.css';
import './Team-Builder.scss'
import { useState, useEffect } from "react";

export default function Search() {
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  //const [selectedLocation, setSelectedLocation] = useState("");
  const [areas, setAreas] = useState("");
  const [pokeEncounters, setPokeEncounters] = useState([]);
  const [areaUrls, setAreaUrls] = useState([]);
  const [areaNames, setAreaNames] = useState([]);
  const [areaInfo, setAreaInfo] = useState([]);

  useEffect(() => {
    getRegion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  useEffect(() => {
    getAreas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  useEffect(() => {
    getPokemonEncounters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [areaUrls])

  useEffect(() => {
    getAreaInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokeEncounters])

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

  async function getAreas() {
    try {
      let response = await fetch(`https://pokeapi.co/api/v2/location/${location}`);
      let data = await response.json();
      let urls = [];
      //let encounterLists = [];
      let areaList = [];
      //let areaInformation = [];

      data.areas.forEach(element => {
        urls.push(element.url);
        areaList.push(element.name);


      });
      setAreaUrls(urls);
      setAreas(data.areas);
      setAreaNames(areaList);
      //console.log(pokeEncounters);


    } catch (error) {
      console.error(error);
    }
  }

  async function getAreaInfo() {
    let info = []
    //console.log(areaNames);
    //console.log(pokeEncounters);
    for (let i = 0; i < areaNames.length; ++i) {
      let areaEncounters = {name: areaNames[i], encounters: pokeEncounters[i]};
      info.push(areaEncounters);
    }
    //console.log(info);
    setAreaInfo(info);
  }

  async function getPokemonEncounters() {
    let list = [];
    //let pokeList = [];
    let list2 = [];
    for (let i = 0; i < areaUrls.length; ++i) {
      try{
        let pokeList = [];
        let response = await fetch(areaUrls[i]);
        let data = await response.json();
        //console.log(data)
        for (let j = 0; j < data.pokemon_encounters.length; ++j) {
          //console.log(data.pokemon_encounters[j].pokemon.url)
          try{
            let response2 = await fetch(data.pokemon_encounters[j].pokemon.url);
            let data2 = await response2.json();
            //console.log(data2);
            let pokeInfo = {info: data2}
            pokeList.push(pokeInfo);
          } catch (error) {
            console.log(error)
          }
        }
        list2.push(pokeList);
        list.push(data.pokemon_encounters);
      } catch (error) {
        console.log(error)
      }
    }
    //console.log(list2);
    //console.log(list);
    setPokeEncounters(list2);
  }

  function areaInformation() {
    //console.log(areaInfo)
    return (
      areaInfo.map(area => 
        <div key={area.name}>
          <h3 className='text-center area-header'>
            {area.name.replaceAll('-', ' ')}
          </h3>
          {area.encounters && (
            area.encounters.map(pokemon =>
              <div key={pokemon.info.name}>
                <h4 className='d-flex justify-content-center' key={pokemon.info.name}>
                  {pokemon.info.name}
                </h4>
                <img className='center' src={pokemon.info.sprites.other.dream_world.front_default} alt={pokemon.info.name} width="200" height="200"></img>
                <div className='d-flex justify-content-center types'>
                  {
                    pokemon.info.types.map(types => 
                      <span className='type' title={types.type.name} key={types.type.name}>
                        {types.type.name}
                      </span>
                    )
                  }
                </div>
              </div>
              )
          )}
        </div>
      )
    )

  }


  function handleChange(event) {
    //console.log(event.target.value);
    setSearch(event.target.value.toLowerCase());
  }

  function selectLocation(event) {
    //console.log(event.target.value);
    setLocation(event.target.value);
  }

  return (
    <>
      <div>
        <form className="mt-2 ml-2 text-center">
          <h1> Search for a map region (e.g kanto)</h1>
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
        <br></br>
        {region.locations && (
          <div className='text-center'>
            <h2> Selection an area</h2>
            <select onChange={selectLocation}>
            <option value="">Choose a Location</option>
            {
              region.locations.map((locations) => {
                return (
                  <option value={locations.name} key={`${locations.name}`}>
                      {locations.name.replace('-', ' ')}
                  </option>
                );
            })
            }
          </select>
        </div>
        )}
        <br></br>
        {areas && (
          <div>
            {
              areaInformation()
            }
          </div>
        )}
      </div>
    </>
  );
}