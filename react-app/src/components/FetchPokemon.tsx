import React from "react";
import pokemones from './pokemon.json';
import 'bootstrap/dist/css/bootstrap.min.css';


interface Pokemon {
  name: string;
  imageUrl: string;
  attack: number;
  defense: number;
  hp: number;
  speed: number;
}

interface FetchPokemonProps {
  onSelect: (pokemon: Pokemon) => void;
}

function FetchPokemon({ onSelect }: FetchPokemonProps) {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {
        pokemones.pokemon.map((pokemon) => (
          <button
            key={pokemon.id}
            className="m-2 button-spacing" // Aplica espacio entre los botones
            onClick={() => onSelect({
              name: pokemon.name,
              imageUrl: pokemon.imageUrl,
                attack: pokemon.attack,
              defense: pokemon.defense,
              hp: pokemon.hp,
              speed: pokemon.speed
            })}
          >
            <img src={pokemon.imageUrl}  width={120} />
          </button>
        ))
      }
    </div>
  );
}

export default FetchPokemon;
