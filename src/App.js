import React from 'react';

import AppHeader from './components/AppHeader'
import Login from './components/Login'
import Signup from './components/Signup'
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
          <Login /> <Signup />
        </React.Fragment>
      }
    </div>
  );
}

export default App
