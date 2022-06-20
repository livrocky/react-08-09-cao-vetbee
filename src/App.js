import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.js';

import MedsPage from './pages/MedsPage';
import PetsPage from './pages/PetsPage';
import AddPetsPage from './pages/AddPetsPage';
import AddMedsPage from './pages/AddMedsPage';
import ViewLogsPage from './pages/ViewLogsPage';
import ThemeContext from './components/store/themeContext';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function nightMode() {
    setDarkMode(true);
  }

  const ctx = {
    nightMode,
  };

  return (
    <ThemeContext.Provider value={ctx}>
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
          <Route path='/ViewLogs'>
            <ViewLogsPage />
          </Route>
          {/* <Route path='/pets/:petId'>
          <ViewLogsPage />
        </Route> */}
        </Switch>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
