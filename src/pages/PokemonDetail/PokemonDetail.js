import './PokemonDetail.scss';

import { useEffect, useState } from 'react';

import pokeapi from '../../api/pokeapi';
import Loading from '../../components/Loading/Loading';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

const PokemonDetail = ({
  match: {
    params: { name },
  },
}) => {
  const [pkmn, setPkmn] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await pokeapi.get(`pokemon/${name}`);
      setPkmn(res.data);
      setLoading(false);
    };
    fetchData();
  }, [name]);

  if (loading) return <Loading loading={loading} />;

  return (
    <div className="PokemonDetail">
      <PokemonCard pokemon={pkmn} />
    </div>
  );
};

export default PokemonDetail;
