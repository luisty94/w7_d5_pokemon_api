import React from "react";
import Skills from "./Skills";

// const PokeList = ({pokemon}) => {

//     const pokemonItems = pokemon.map((name, index) => {
//       return <Pokemon name={name} key={index} />
//     })

//   return (
//     <div className="poke-skills">
//     <h3>skills List</h3>
//     <ul>
//       {pokemonItems}
//     </ul>
//   </div>
//     )
// }
const PokeList = ({pokemons}) => {

  // const pokeItems = skills.map((skill, index) => {
  //   return <Skills pokemon={skill} key={index} />
  // })
  const pokeItems = pokemons.map((name, url, index) => {
    return <Skills pokemon={name} stats={url} key={index} />
  })


return (
  <div>
  <ul>
    {pokeItems}
  </ul>
</div>
)
}
  
export default PokeList;