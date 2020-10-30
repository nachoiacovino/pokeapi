import './PokemonCard.scss';

import { useHistory } from 'react-router-dom';

const PokemonCard = ({ pokemon: { name } }) => {
  const history = useHistory();

  const navigateToDetail = () => history.push(`/pokemon/${name}`);

  return (
    <div class="PokemonCard" onClick={navigateToDetail}>
      <img
        src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`}
        alt={name}
      />
      {name}
    </div>
  );
};

export default PokemonCard;
