import './PokemonDetail.scss';

import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import pokeapi from '../../api/pokeapi';
import Loading from '../../components/Loading/Loading';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

const PokemonDetail = ({
  match: {
    params: { name },
  },
}) => {
  const history = useHistory();
  const [pkmn, setPkmn] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await pokeapi.get(`pokemon/${name}`);
        setPkmn(res.data);
        setLoading(false);
      } catch (err) {
        history.push('/');
      }
    };
    fetchData();
  }, [name, history]);

  if (loading) return <Loading loading={loading} />;

  return (
    <div className="PokemonDetail">
      <PokemonCard pokemon={pkmn} />
    </div>
  );
};

export default PokemonDetail;
