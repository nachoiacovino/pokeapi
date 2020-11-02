import './Pokemon.scss';

import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import pokeapi from '../../api/pokeapi';
import logo from '../../assets/logo.png';
import Loading from '../../components/Loading/Loading';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import useInputState from '../../hooks/useInputState';

const Pokemon = () => {
  const history = useHistory();
  const [pokemon, setPokemon] = useState([]);
  const [filteredPkmn, setFilteredPkmn] = useState([]);
  const [term, setTerm] = useInputState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const navigateToDetail = (name) => history.push(`/pokemon/${name}`);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await pokeapi.get('pokemon', {
          params: { limit: 151 },
        });
        setPokemon(res.data.results);
        setFilteredPkmn(res.data.results);
        setLoading(false);
      } catch (err) {
        setError(
          'There was a problem retrieving the data. Please try again later.',
        );
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredPkmn(pokemon.filter((pkmn) => pkmn.name.includes(term)));
  }, [pokemon, term]);

  return (
    <div className="Pokemon">
      <div className="Pokemon-header">
        <img className="Pokemon-logo" src={logo} alt="Pokémon Logo" />
        <div className="Pokemon-gen">
          <strong>Generation 1</strong>
          <small className="Pokemon-number">151 Pokémon</small>
        </div>
        <div>
          <input
            type="text"
            value={term}
            onChange={setTerm}
            placeholder="Search Pokémon"
          />
        </div>
      </div>
      {error && <div className="Pokemon-error">{error}</div>}
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <div className="Pokemon-list">
          {filteredPkmn.map((pkmn) => (
            <div
              key={pkmn.name}
              className="Pokemon-cardContainer"
              onClick={() => navigateToDetail(pkmn.name)}
            >
              <PokemonCard pokemon={pkmn} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Pokemon;
