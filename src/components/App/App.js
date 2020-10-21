//////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { Route, Switch } from 'react-router-dom';
//////////////////////////////////////////////////////////////////////////////
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
//////////////////////////////////////////////////////////////////////////////
import ContactUsPage from '../../routes/ContactUsPage/ContactUsPage';
import HomeboundPage from '../../routes/HomeboundPage/HomeboundPage';
import Homepage from '../../routes/Homepage/Homepage';
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
            path={'/contact'}
            component={ContactUsPage}
          />

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

      <Footer />
    </>
  );
}

export default App;