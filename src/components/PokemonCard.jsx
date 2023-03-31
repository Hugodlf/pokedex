import React from 'react';

const PokemonCard = ({pokemon}) => {

   
 
   // const pokemon = pokemonList[0];

    return (
        <div>
            <figure className="card">
               {pokemon.imgSrc ? <img  src={pokemon.imgSrc}  alt={pokemon.name} className="cardImg"></img> : <p>???</p>}
              
                <figcaption>{pokemon.name}</figcaption>
            </figure>

        </div>
    );
};



export default PokemonCard;




