import React from 'react';

import AppHeader from './components/AppHeader'
import Auth from './components/Auth'
import Eventlite from './components/Eventlite'

const currentUser = function() {
  const user = localStorage.getItem('user')
  return(user)
}

function App() {
  return (
    <div className="App">
      <AppHeader />
      {currentUser() ? <Eventlite /> : 
        <React.Fragment>
          <Auth loginMode={true} />
          <Auth loginMode={false} />
        </React.Fragment>
      }
    </div>
  );
}

export default App
