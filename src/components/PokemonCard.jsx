import React from 'react';

const PokemonCard = () => {

    const pokemonList = [
        {
            name: "bulbasaur",
            imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        },
        {
            name: "mew",
        },
    ];

    const pokemon = pokemonList[0];

    return (
        <div>
            <figure className="card">
               {pokemon.imgSrc ? <img  src={pokemon.imgSrc}  alt="bulbasaur" className="cardImg"></img> : <p>???</p>}
              
                <figcaption>{pokemon.name}</figcaption>
            </figure>

        </div>
    );
};



export default PokemonCard;




