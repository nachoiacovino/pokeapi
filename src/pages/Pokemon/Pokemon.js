import './Pokemon.scss';

import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import pokeapi from '../../api/pokeapi';
import PokemonCard from '../../components/PokemonCard';

const Pokemon = () => {
  const history = useHistory();
  const [pokemon, setPokemon] = useState([]);

  const navigateToDetail = (name) => history.push(`/pokemon/${name}`);

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
    <div className="Pokemon-list">
      {pokemon.map((pkmn) => (
        <div
          className="Pokemon-cardContainer"
          onClick={() => navigateToDetail(pkmn.name)}
        >
          <PokemonCard key={pkmn.name} pokemon={pkmn} />
        </div>
      ))}
    </div>
  );
};

export default Pokemon;
