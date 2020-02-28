import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import "./characterlist.css";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
    const [ input, setInput ] = useState("");
    const [ searchResults, setSearchResults ] = useState([]);

    const handleInput = (e) => {
      setInput(e.target.value);}

  useEffect(() => {
    axios.get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`)
    .then(res => {
        const result = res.data.results.filter(item => 
        item.name.toLowerCase().includes(input.toLowerCase())
        );
      
        setSearchResults(result);
    
    })
    .catch(res => console.log("error"))
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [input]);
  



  return (
    <div >
      <section className="search-form">
     <div className="cont1">
       <form>
         <label> Search Characters: {" "}
           <input 
           id="search" 
           name="search"
           value={input}
           onChange={handleInput}/>
         </label>
       </form>
     </div>
    </section>
  
    {searchResults.map(item => { return(
      <CharacterCard key={item.id} character={item} />)
    })}
    </div>
  )
  }
