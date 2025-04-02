import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import FetchPokemon from "./components/FetchPokemon";
import { GameLogic } from "./components/GameLogic";
import pokemones from './components/pokemon.json';
import ShowFighters from "./components/ShowFighters";
import './components/styles.css'

// Import database functions
import createPokemonTable from '../src/db/statements';
//import sqlite3 from 'sqlite3';


interface Pokemon {
  name: string;
  imageUrl: string;
  attack: number;
  defense: number;
  hp: number;
  speed: number;
}

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [rivalSelected, setSelectedRival] = useState<Pokemon | null>(null);
  const [winner, setWinner] = useState<Pokemon | null>(null);

  
  

  // Función para seleccionar un rival aleatorio
  const handleRandomRivalSelection = (pokemonSelected: Pokemon) => {
    const allPokemon = pokemones.pokemon;
    if (allPokemon.length > 0) {
      let randomRival: Pokemon | null = null;
      while (!randomRival || randomRival.name === pokemonSelected.name) {
        const randomIndex = Math.floor(Math.random() * allPokemon.length);
        randomRival = allPokemon[randomIndex];
      }
      setSelectedRival(randomRival);
    }
  };

  const handlePokemonSelect = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
    handleRandomRivalSelection(pokemon);
    setWinner(null); // Reiniciar el ganador
  };

  return (
    <Card>
      <h1>Battle of Pokemon</h1>
      <div className="container text-center">
        <h2>Select your Pokemon</h2>

        {/* Componente de selección de Pokémon */}
        <FetchPokemon onSelect={handlePokemonSelect} />

        {/* Mostrar los Pokémon seleccionados y rival */}
        {selectedPokemon && rivalSelected && (
          <ShowFighters
            selectedPokemon={selectedPokemon}
            rivalSelected={rivalSelected}
          />
        )}

        {/* Botón para iniciar batalla */}
        {selectedPokemon && rivalSelected && (
          <button 
            style={{ marginTop: "-95%", backgroundColor:"green", color:"white" }} 
            onClick={() => GameLogic({ peleador: selectedPokemon, rival: rivalSelected, onWinner: setWinner })}
            disabled={!selectedPokemon || !rivalSelected}
          >
            Start Battle
          </button>
        )}

          <div className="Ganador">
            {/* Mostrar el resultado de la batalla */}
            {winner && <h3>{winner.name} wins!</h3>}  
          </div>
        
      </div>

    </Card>
  );
}

export default App;

