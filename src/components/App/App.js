//////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { Route } from 'react-router-dom';
//////////////////////////////////////////////////////////////////////////////
import HomeboundPage from '../../routes/HomeboundPage/HomeboundPage';
import Homepage from '../../routes/Homepage/Homepage';
//////////////////////////////////////////////////////////////////////////////

function App() {
  return (
    <>
      <Route 
        path={'/our-work/homebound'}
        component={HomeboundPage}
      />
      <Route
        exact
        path={'/'}
        component={Homepage}
      />
    </>
  );
}

export default App;