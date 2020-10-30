import './PokemonCard.scss';

import { useHistory } from 'react-router-dom';

const PokemonCard = ({ pokemon }) => {
  const history = useHistory();

  return (
    <div
      className="PokemonCard"
      style={pokemon.id ? { height: 'inherit' } : null}
    >
      <div
        className="PokemonCard-header"
        style={!pokemon.id ? { justifyContent: 'center' } : null}
      >
        {pokemon.id && <div className="flex-helper"></div>}
        <div className="PokemonCard-title">
          <img
            src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`}
            alt={pokemon.name}
          />
          <p>{pokemon.name}</p>
        </div>
        {pokemon.id && (
          <div
            className="PokemonCard-back"
            onClick={() => history.push('/pokemon')}
          >
            &#x2715;
          </div>
        )}
      </div>
      <div>
        {pokemon.id && (
          <div className="PokemonCard-details">
            <p>
              <strong>ID:</strong> {pokemon.id}
            </p>
            <p>
              <strong>
                {pokemon.types.length === 1 ? 'Type: ' : 'Types: '}
              </strong>
              {pokemon.types.length === 1
                ? pokemon.types[0].type.name
                : pokemon.types?.map(({ type }) => (
                    <li key={type.name}>{type.name}</li>
                  ))}
            </p>
            <p></p>
            <p className="PokemonCard-height">
              <strong>Height:</strong> {(pokemon.height / 10).toFixed(1)} m
            </p>
            <p>
              <strong>Abilities:</strong>
              {pokemon.abilities?.map(({ ability }) => (
                <li key={ability.name}>{ability.name}</li>
              ))}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonCard;
