import React, {useEffect, useState} from 'react';
import axios from "axios";
import './pokemon.css'
const PokemonPage = () => {
    const[datePokemon, setDatePokemon]= useState([])
    const getDatePokemon= async () =>{
        const response= await axios.get('https://pokeapi.co/api/v2/pokemon/ ')
        setDatePokemon(response.data.results)
    }
    console.log(datePokemon)
    useEffect(() => {
        getDatePokemon()
    }, []);
    return (
        <div className='pokemonPage'>
            {
                datePokemon.map((e, index) =>(
                    <div key={index} className='blockPokemon' >
                        <h2>{e.name}</h2>
                        <img src={e.url} alt={e.name}/>
                    </div>
                ))
            }
        </div>
    );
};

export default PokemonPage;