//////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { Route, Switch } from 'react-router-dom';
//////////////////////////////////////////////////////////////////////////////
import HomeboundPage from '../../routes/HomeboundPage/HomeboundPage';
import Homepage from '../../routes/Homepage/Homepage';
import Navigation from '../../components/Navigation/Navigation';
import JKMcLegalPage from '../../routes/JKMcLegalPage/JKMcLegalPage';
import RSNAPage from '../../routes/RSNAPage/RSNAPage';
//////////////////////////////////////////////////////////////////////////////
import './App.css';
//////////////////////////////////////////////////////////////////////////////

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>

      <main>
        <Switch>
          <Route
            path={'/our-work/homebound'}
            component={HomeboundPage}
          />

          <Route
            exact
            path={'/'}
            component={Homepage}
          />

          <Route
            path={'/our-work/jkmc'}
            component={JKMcLegalPage}
          />

          <Route
            path={'/our-work/rsna'}
            component={RSNAPage}
          />
        </Switch>
      </main>
    </>
  );
}

export default App;