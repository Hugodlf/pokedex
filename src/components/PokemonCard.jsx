import React from 'react';
import PropTypes from "prop-types";


const PokemonCard = ({ pokemon }) => {

    return (
        <div>
            <figure className="card">
                {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name} className="cardImg"></img> : <p>???</p>}
                <figcaption>{pokemon.name}</figcaption>
            </figure>

        </div>
    );
};




PokemonCard.PropTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string.isRequired
    }).isRequired
};


export default PokemonCard;




