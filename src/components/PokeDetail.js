import react from 'react';
import PokeList from './PokeList';
import './PokeDetail.css';

const PokeDetail = ({pokemon, skills}) => {
  return (
    <div  id="pokeDetail">
    <div id="detailWrapper">
      <div id="flexWrapper">
        <div id="left">
          <h2>{pokemon.name}</h2>
          <p><span>Abilities</span>: {pokemon.url.abilities}</p>
          <p><span>Height</span>: {pokemon.url.height}</p>
          <p><span>Moves</span>: {pokemon.url.moves}</p>
        </div>
      </div>
    </div>

    <div id="poke-wrapper">
      <PokeList skills={skills}/>
    </div>
  </div>
  )
}

export default PokeDetail