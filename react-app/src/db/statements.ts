// Assuming you are using sqlite3 for the database connection
import sqlite3 from 'sqlite3';
const db = new sqlite3.Database(':memory:');

//hago los metodos para trabajajar con la base de datos

import pokemones from '../components/pokemon.json';

export function getPokemon() {
  return pokemones.pokemon;
}

//creo la funcion para crear la tabla pokemon con los pokemones del json
export function createPokemonTable(db: any) {
  db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS pokemon (
      id INTEGER PRIMARY KEY,
      name TEXT,
      imageUrl TEXT,
      attack INTEGER,
      defense INTEGER,
      hp INTEGER,
      speed INTEGER
    )`);

    const stmt = db.prepare(`INSERT INTO pokemon VALUES (?, ?, ?, ?, ?, ?, ?)`);
    pokemones.pokemon.forEach((pokemon: any, index: number) => {
      stmt.run(
        index + 1,
        pokemon.name,
        pokemon.imageUrl,
        pokemon.attack,
        pokemon.defense,
        pokemon.hp,
        pokemon.speed
      );
    });
    stmt.finalize();
  });
}

export default createPokemonTable;