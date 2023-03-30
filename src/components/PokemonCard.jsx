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

    const pokemon = pokemonList[1];

    return (
        <div>
            <figure>
               {pokemon.imgSrc ? <img src={pokemon.imgSrc}  alt="bulbasaur" ></img> : <p>???</p>}
                
                <figcaption>{pokemon.name}</figcaption>
            </figure>

        </div>
    );
};



export default PokemonCard;




