import React from 'react';

const Skills= ({pokemon}) => {
  
    // const handleClick = function() {
    //   onPokemonClicked(pokemon);
    // }
  
  
    // return <li onClick={handleClick}>{pokemon.stats.common}</li>

    return (
        <li>{pokemon.stats.common}</li>
    )
  }
  
  export default Skills;