import { Route, Switch } from 'react-router-dom';

import Pokemon from './pages/Pokemon/Pokemon';
import PokemonDetail from './pages/PokemonDetail/PokemonDetail';

const App = () => {
  return (
    <Switch>
      <Route exact path="/pokemon" component={Pokemon} />
      <Route exact path="/pokemon/:name" component={PokemonDetail} />
    </Switch>
  );
};

export default App;
