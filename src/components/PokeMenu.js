import React from 'react';
import PokeList from './PokeList';

const PokeMenu = ({handleSelectChange, pokemons, items}) =>{
//   return (
//     <div>
//       <h1>PokeCodex</h1>
//       <select onChange={handleSelectChange}>
//         {pokemons.map(pokemon => {
//           return <option key={pokemon.name} value={pokemon.url}>{pokemon.name}</option>
//         })}
//       </select>
//       <select onChange={handleSelectChange}>
//         {items.map(item => {
//           return <option key={item.name} value={item.url}>{item.name}</option>
//         })}
//       </select>
//     </div>
//   );
    const handleChange = (event) => {
      const index = event.target.value;
      handleSelectChange(pokemons[index]);
    }

    const pokemonOptions = pokemons.map((pokemon, index) => {
      return <option key={index} value={pokemon.url}>{pokemon.name}</option>
    });
    // const handleChange2 = (event) => {
    //   const index = event.target.value;
    //   handleSelectChange(pokemons[index]);
    // }

    // const itemOptions = items.map((item, index) => {
    //   return <option key={index} value={index}>{item.name}</option>
    // });

    return (
        <div>
            <h1>POKECODEX</h1>
            <select onChange={handleChange}>
                {pokemonOptions}
            </select>
        {/* <select onChange={handleChange2}>
            {itemOptions}
        </select> */}
        </div>
    )

};

export default PokeMenu;