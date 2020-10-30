import { Route, Switch } from 'react-router-dom';

import Pokemon from './pages/Pokemon/Pokemon';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Pokemon} />
    </Switch>
  );
};

export default App;
