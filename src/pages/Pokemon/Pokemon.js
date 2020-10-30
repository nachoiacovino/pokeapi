import './Pokemon.scss';

import { useEffect, useState } from 'react';

import pokeapi from '../../api/pokeapi';

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await pokeapi.get('pokemon', {
        params: { limit: 151 },
      });
      console.log(res.data);
    };
    fetchData();
  }, []);

  return <div>hi</div>;
};

export default Pokemon;
