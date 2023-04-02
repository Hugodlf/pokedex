import React, { useEffect } from 'react';


const NavBar = ({ setPokemonIndex, pokemonList }) => {


  return (
    <div className='divBtc'>

      {pokemonList.map((pokemon, index) => (
        <button key={pokemon.name} onClick={() => setPokemonIndex(index)}>{pokemon.name}</button>
      ))}
    </div>
  )
}

export default NavBar;