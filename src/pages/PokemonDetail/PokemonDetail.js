import './PokemonDetail.scss';

import { useEffect, useState } from 'react';

import pokeapi from '../../api/pokeapi';
import PokemonCard from '../../components/PokemonCard';

const PokemonDetail = ({
  match: {
    params: { name },
  },
}) => {
  const [pkmn, setPkmn] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await pokeapi.get(`pokemon/${name}`);
      setPkmn(res.data);
    };
    fetchData();
  }, [name]);

  return (
    <div className="PokemonDetail">
      <PokemonCard pokemon={pkmn} />
    </div>
  );
};

export default PokemonDetail;
