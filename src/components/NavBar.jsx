import React, { useEffect } from 'react';


const NavBar = ({pokemonIndex, setPokemonIndex, pokemonList}) => {
 

  const handlePrecedent = () => {
    setPokemonIndex(pokemonIndex - 1)
  }
  const handleSuivant = () => {
    setPokemonIndex(pokemonIndex + 1)
  }

  //pokemonList[pokemonIndex] === pokemonList[3] ? alert('pika pikachu !!!') : null

    return (
        <div className='divBtc'>
          {pokemonIndex > 0 ? <button className='btcPS' onClick={handlePrecedent}>Precedent</button> : null}
          {pokemonIndex < pokemonList.length - 1 ? <button className='btcPS' onClick={handleSuivant}>Suivant</button> : null}
         </div>
    )
}

export default NavBar;