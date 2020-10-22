//////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { Route, Switch } from 'react-router-dom';
//////////////////////////////////////////////////////////////////////////////
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
//////////////////////////////////////////////////////////////////////////////
import AboutPage from '../../routes/AboutPage/AboutPage';
import ContactUsPage from '../../routes/ContactUsPage/ContactUsPage';
import HomeboundPage from '../../routes/HomeboundPage/HomeboundPage';
import Homepage from '../../routes/Homepage/Homepage';
import JKMcLegalPage from '../../routes/JKMcLegalPage/JKMcLegalPage';
import OurWorkPage from '../../routes/OurWorkPage/OurWorkPage';
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
            path={'/about'}
            component={AboutPage}
          />

          <Route
            path={'/contact'}
            component={ContactUsPage}
          />

          <Route
            path={'/work/homebound'}
            component={HomeboundPage}
          />

          <Route
            exact
            path={'/'}
            component={Homepage}
          />

          <Route
            path={'/work/jkmc'}
            component={JKMcLegalPage}
          />

          <Route
            path={'/work'}
            component={OurWorkPage}
          />

          <Route
            path={'/work/rsna'}
            component={RSNAPage}
          />
        </Switch>
      </main>

      <Footer />
    </>
  );
}

export default App;