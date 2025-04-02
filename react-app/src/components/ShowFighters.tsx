
interface Pokemon {
  name: string;
  imageUrl: string;
  attack: number;
  defense: number;
  hp: number;
  speed: number;
}

interface ShowFightersProps {
  selectedPokemon: Pokemon;
  rivalSelected: Pokemon;
}

function ShowFighters({ selectedPokemon, rivalSelected }: ShowFightersProps) {
  // Función para calcular el porcentaje de la barra basado en un valor máximo de 10
  const calculatePercentage = (value: number) => {
    return `${(value / 10) * 100}%`; // El valor máximo es 10
  };

  return (
    <div className="battle-section">
      {/* Pokémon Seleccionado */}
      <div className="pokemon-card">
        <h3>{selectedPokemon.name}</h3>
        <img src={selectedPokemon.imageUrl} alt={selectedPokemon.name} width={150} />

        <p>HP: {selectedPokemon.hp}</p>
        <div className="progress">
          <div className="progress-bar" style={{ width: calculatePercentage(selectedPokemon.hp) }}></div>
        </div>

        <p>Attack: {selectedPokemon.attack}</p>
        <div className="progress">
          <div className="progress-bar" style={{ width: calculatePercentage(selectedPokemon.attack) }}></div>
        </div>

        <p>Defense: {selectedPokemon.defense}</p>
        <div className="progress">
          <div className="progress-bar" style={{ width: calculatePercentage(selectedPokemon.defense) }}></div>
        </div>

        <p>Speed: {selectedPokemon.speed}</p>
        <div className="progress">
          <div className="progress-bar" style={{ width: calculatePercentage(selectedPokemon.speed) }}></div>
        </div>
      </div>

      {/*<div className="fight-button"></div>*/}

      {/* Pokémon Rival */}
      <div className="pokemon-card">
        <h3>{rivalSelected.name}</h3>
        <img src={rivalSelected.imageUrl} alt={rivalSelected.name} width={150} />

        <p>HP: {rivalSelected.hp}</p>
        <div className="progress">
          <div className="progress-bar" style={{ width: calculatePercentage(rivalSelected.hp) }}></div>
        </div>

        <p>Attack: {rivalSelected.attack}</p>
        <div className="progress">
          <div className="progress-bar" style={{ width: calculatePercentage(rivalSelected.attack) }}></div>
        </div>

        <p>Defense: {rivalSelected.defense}</p>
        <div className="progress">
          <div className="progress-bar" style={{ width: calculatePercentage(rivalSelected.defense) }}></div>
        </div>

        <p>Speed: {rivalSelected.speed}</p>
        <div className="progress">
          <div className="progress-bar" style={{ width: calculatePercentage(rivalSelected.speed) }}></div>
        </div>
      </div>
    </div>
  );
}

export default ShowFighters;
