import './Map.css';
import './Team-Builder.scss'
import { useState, useEffect } from "react";

export default function Search() {
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [areas, setAreas] = useState("");
  const [pokeEncounters, setPokeEncounters] = useState([]);
  const [areaUrls, setAreaUrls] = useState('');
  const [areaNames, setAreaNames] = useState('');
  const [areaInfo, setAreaInfo] = useState([]);

  //function to scroll to the top when user clicks on the 'back to top' button
  const onClick = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

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


  //gets the info of selected region
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

  //gets the areas of a location to display
  async function getAreas() {
    try {
      let response = await fetch(`https://pokeapi.co/api/v2/location/${location}`);
      let data = await response.json();
      let urls = [];
      let areaList = [];

      if(data.areas){
        data.areas.forEach(element => {
          urls.push(element.url);
          areaList.push(element.name);
        });
      }

      //console.log(areaList)
      if(data.areas && data.areas.length > 0) {
      setAreaUrls(urls);
      setAreas(data.areas);
      setAreaNames(areaList);
      }
      else if (data.areas){
        setAreaUrls([]);
        setAreas([]);
        setAreaNames([]);
      }
      //console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  //Creates an array of objects. Each object has an area name and the pokemon that can be encountered in the area
  async function getAreaInfo() {
    let info = [];
    //console.log(areaNames);
    //console.log(pokeEncounters);
    for (let i = 0; i < areaNames.length; ++i) {
      let areaEncounters = {name: areaNames[i], encounters: pokeEncounters[i]};
      info.push(areaEncounters);
    }
    //console.log(info);
    setAreaInfo(info);
  }

  //fetches info of each pokemon in an area to be used in getAreaInfo()
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
        // try{
        //   let response1 = await fetch(data.encounter_method_rates[0].encounter_method.url);
        //   let data1 = await response1.json();
        //   console.log(data1)

        // } catch (error) {
        //   console.log(error);
        // }
        for (let j = 0; j < data.pokemon_encounters.length; ++j) {
          //console.log(data.pokemon_encounters[j].pokemon.url)
          try{
            let response2 = await fetch(data.pokemon_encounters[j].pokemon.url);
            let data2 = await response2.json();
            //console.log(data2);
            let pokeInfo = {info: data2}
            pokeList.push(pokeInfo);
          } catch (error) {
            console.log(error);
          }
        }
        list2.push(pokeList);
        list.push(data.pokemon_encounters);
      } catch (error) {
        console.log(error);
      }
    }

    setPokeEncounters(list2);
  }

  //Info that is displayed when the user selects a location. Displays each area name with info on pokemon that can be found in that area.
  //Pokemon info includes name, image, types, and abilities. Displays "Area hasn't been added yet if location has no areas or pokemon according to api"
  function areaInformation() {
    // if(areaInfo.length > 0) {
    //   console.log(areaInfo[0].encounters[0].info)
    // }
    if (pokeEncounters.length > 0) {
    return (
      areaInfo.map(area => 
        <div key={area.name}>
          <h3 className='text-center area-header'>
            {capitalizeName(area.name)}
          </h3>
          {area.encounters && (
            area.encounters.map(pokemon =>
              <div className='card' key={pokemon.info.name}>
                <h4 className='d-flex justify-content-center' key={pokemon.info.name}>
                {pokemon.info.name.charAt(0).toUpperCase() + pokemon.info.name.slice(1)}
                </h4>
                <img className='d-flex justify-content-center' src={getSprite(pokemon.info.sprites)} alt={pokemon.info.name} width="200" height="200"></img>
                <div className='d-flex justify-content-center types'>
                  {
                    pokemon.info.types.map(types => 
                      <span className='type' title={types.type.name} key={types.type.name}>
                        {types.type.name}
                      </span>
                    )
                  }
                </div>
                <div className='text-center'>
                  <h5>
                    Abilities:
                  </h5>
                  <div>
                    {displayAbilities(pokemon.info.abilities)}
                  </div>
                </div>
                <br></br>
              </div>
              )
            )
          }
        </div>
      )
    )
    }
    else {
      return (
        <h1 className='text-center'>
          Area Hasn't Been Added Yet!
        </h1>
      )
    }
  }

  //displays abilities of pokemon.
  function displayAbilities(abilities) {
    return (
      abilities.map(ability => {
        if (ability.is_hidden === false) {
        return (
        <div key={ability.ability.name}>
          {capitalizeName(ability.ability.name)}
        </div>)}
        else {
          return (
            <div>
              {capitalizeName(ability.ability.name)} (Hidden)
            </div>
          )
        }
      }))
  }

  //Capitalizes the first letter of each word and returns it
  function capitalizeName(name) {
    let splitName = name.split('-');
    var upperName = [];

    splitName.map(word =>
      upperName.push(word[0].toUpperCase() + word.slice(1))
    )

    return upperName.join(' ');
  }
  
  //Returns the sprite url for the pokemon image element. If dreamworld sprite is unavailable, returns the official artwork url
  function getSprite(sprites) {
    if (sprites.other.dream_world.front_default) {
      return sprites.other.dream_world.front_default;
    }
    else {
      return sprites.other['official-artwork'].front_default;
    }
  }

  //do this when user selects a region from dropdown
  function handleChange(event) {
    //console.log(event.target.value);
    setSearch(event.target.value.toLowerCase());
  }

  //do this when user selects a location
  function selectLocation(event) {
    //console.log(event.target.value);
    setLocation(event.target.value);
  }

  return (
    <>
      <div className='map-background'>
        <form className="text-center">
          <h1> Select a Region</h1>
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
            <h2> Select a Location</h2>
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
        <div>
          <button type="button" className="randomizer position-fixed bottom-0 end-0" onClick={onClick}>Back to Top</button>          
        </div>
      </div>
    </>
  );
}