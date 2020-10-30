import './Pokemon.scss';

import axios from 'axios';
import { useEffect, useState } from 'react';

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const baseUrl = 'https://pokeapi.co/api/v2/';

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${baseUrl}pokemon`, {
        params: { limit: 151 },
      });
      console.log(res.data);
    };
    fetchData();
  }, []);

  return <div>hi</div>;
};

export default Pokemon;
