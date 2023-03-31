import React from 'react';
import PokemonCard from './components/PokemonCard';
import "./App.css"
import { useState } from "react";

const App = () => {

 
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handlePrecedent = () =>{
   setPokemonIndex(pokemonIndex - 1)
  }
  const handleSuivant = () =>{
   setPokemonIndex(pokemonIndex + 1)
  }

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      {pokemonIndex > 0 ? <button onClick={handlePrecedent}>Precedent</button> : null}
      {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleSuivant}>Suivant</button> : null}
      
    </div>
  );

};

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

export default App;