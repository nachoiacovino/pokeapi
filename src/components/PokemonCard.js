import './PokemonCard.scss';

import { Link } from 'react-router-dom';

const PokemonCard = ({ pokemon }) => {
  return (
    <Link to={`/pokemon/${pokemon.name}`}>
      <div>{pokemon.name}</div>
    </Link>
  );
};

export default PokemonCard;
