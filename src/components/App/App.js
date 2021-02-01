//////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { Route, Switch } from 'react-router-dom';
//////////////////////////////////////////////////////////////////////////////
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
//////////////////////////////////////////////////////////////////////////////
import AboutPage from '../../routes/AboutPage/AboutPage';
import BarrierPage from '../../routes/BarrierPage/BarrierPage';
import ContactUsPage from '../../routes/ContactUsPage/ContactUsPage';
import HomeboundPage from '../../routes/HomeboundPage/HomeboundPage';
import Homepage from '../../routes/Homepage/Homepage';
import JKMcLegalPage from '../../routes/JKMcLegalPage/JKMcLegalPage';
import OurWorkPage from '../../routes/OurWorkPage/OurWorkPage';
import RSNAPage from '../../routes/RSNAPage/RSNAPage';
import VidaPage from '../../routes/VidaPage/VidaPage';
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
            path={'/work/barrier'}
            component={BarrierPage}
          />

          <Route
            path={'/contact'}
            component={ContactUsPage}
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
            exact
            path={'/work'}
            component={OurWorkPage}
          />

          <Route
            path={'/work/rsna'}
            component={RSNAPage}
          />

          <Route
            path={'/work/vida'}
            component={VidaPage}
          />
        </Switch>
      </main>

      <Footer />
    </>
  );
}

export default App;