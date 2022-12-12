import React, { useEffect, useState } from "react";
import PokeMenu from "../components/PokeMenu";
import PokeDetail from "../components/PokeDetail";

const PokeContainer = () => {
    const [pokemons, setPokemons] = useState([]);
    // const [items, setItems] = useState([]);
    const [ selectedPokemon, setSelectedPokemon ] = useState( null )
    const [ skills, setSkills ] = useState([])


    
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=150/')
        .then(res => res.json())
        .then(data => setPokemons (data.results))
    }, [] )

    const handleSelectChange = ( index ) => {
        console.log(pokemons)
        const pokemon = pokemons[index];
        const skillsPromises = pokemon.stats.map((pokemon) => {
            return fetch(pokemon).then(res => res.json());
        })
        Promise.all(skillsPromises)
        .then((data)=>{
            setSkills(data);
            setSelectedPokemon(pokemon);
        })

        setSelectedPokemon( pokemon );
    }
        //     const pokeDataPromises = data.results.map((pokemon) => {
        //     return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        //     .then(res => res.json());
        //   })  
        //   Promise.all(pokeDataPromises)
        //   .then((results) => {
        //     setPokemons(results);
        //   });
        // });
    
            // .catch(err => console.error);
    // useEffect(() => {
    //     loadItems(item[0].url)
    //   }, [items])
    // const loadItems = url => {
    //     fetch('https://pokeapi.co/api/v2/item')
    //         .then(res => res.json())
    //         .then(itemsList => setItems(itemsList.map.entry))
    //         // .catch(err => console.error);
    // // }

    // const handleSelectChange = event => {
    //     loadPokemons(event.target.value);
    // }

    // const handleSelectChange2 = event => {
    //     loadItems(event.target.value);
    // }

    return (
        <div>
            <PokeMenu pokemons ={pokemons}
            handleSelectChange={handleSelectChange} />
            { selectedPokemon ? <PokeDetail pokemon={ selectedPokemon } skills={skills} /> : null }

            
        </div>
            // handleSelectChange2={handleSelectChange2}
            // pokemons={pokemon}
            // items={item}
      )
    }

export default PokeContainer