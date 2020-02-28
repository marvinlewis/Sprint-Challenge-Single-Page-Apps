import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
    const [ characters, setCharacters ] = useState([]);

  useEffect(() => {
    axios.get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`)
    .then(res => {
      setCharacters(res.data.results);
    })
    .catch(res => console.log("error"))
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <div>
    {characters.map(item => { return(
      <CharacterCard key={item.id} character={item} />)
    })}
    </div>
  );
}
