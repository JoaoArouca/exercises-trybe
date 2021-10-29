import React from "react";
import pokemons from "./data";
import './pokedex.css'

class Pokedex extends React.Component {
  render() {
    return (
      pokemons.map((pokemon) =>
      <section className='margens container'>
          <div> 
            {pokemon.name}
          </div>
          <div> 
            {pokemon.type}
          </div>
          <div> 
            {pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}
          </div>
          <img src={pokemon.image} alt={pokemon.name}></img>
      </section>
      ) 
    );
  }
}

export default Pokedex;
