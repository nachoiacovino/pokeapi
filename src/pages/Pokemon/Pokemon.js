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
    };
    fetchData();
  }, []);

  return (
    <div className="Pokemon">
      <div className="Pokemon-header">
        <img
          className="Pokemon-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
          alt="Pokémon Logo"
        />
        <div className="Pokemon-gen">
          <strong>Generation 1</strong>
          <small className="Pokemon-number">151 Pokémon</small>
        </div>
      </div>
      <div className="Pokemon-list">
        {pokemon.map((pkmn) => (
          <div
            key={pkmn.name}
            className="Pokemon-cardContainer"
            onClick={() => navigateToDetail(pkmn.name)}
          >
            <PokemonCard pokemon={pkmn} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pokemon;
