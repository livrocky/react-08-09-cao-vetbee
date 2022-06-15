import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.js';

import MedsPage from './pages/MedsPage';
import PetsPage from './pages/PetsPage';
import AddPetsPage from './pages/AddPetsPage';
import AddMedsPage from './pages/AddMedsPage';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/medications'>
          <MedsPage />
        </Route>
        <Route exact path='/'>
          <PetsPage />
        </Route>
        <Route path='/AddPets'>
          <AddPetsPage />
        </Route>
        <Route path='/AddMeds'>
          <AddMedsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
