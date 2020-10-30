import './Pokemon.scss';

import { useEffect, useState } from 'react';

import pokeapi from '../../api/pokeapi';
import PokemonCard from '../../components/PokemonCard';

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await pokeapi.get('pokemon', {
        params: { limit: 151 },
      });
      setPokemon(res.data.results);
      console.log(res.data.results);
    };
    fetchData();
  }, []);

  return (
    <div>
      {pokemon.map((pkmn) => (
        <PokemonCard key={pkmn.name} pokemon={pkmn} />
      ))}
    </div>
  );
};

export default Pokemon;
