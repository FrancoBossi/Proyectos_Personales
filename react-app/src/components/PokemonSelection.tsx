import React from "react";
import FetchPokemon from "./FetchPokemon";

interface Pokemon {
  name: string;
  imageUrl: string;
  attack: number;
  defense: number;
  hp: number;
  speed: number;
}

interface PokemonSelectionProps {
  onSelect: (pokemon: Pokemon) => void;
  selectedPokemon: Pokemon | null;
}

function PokemonSelection({ onSelect, selectedPokemon }: PokemonSelectionProps) {
  return (
    <div>
      <FetchPokemon onSelect={onSelect} /> {/* Usar FetchPokemon para mostrar la lista */}
      {selectedPokemon && (
        <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img src={selectedPokemon.imageUrl} alt={selectedPokemon.name} width={120} />
        </div>
      )}
    </div>
  );
}

export default PokemonSelection;

