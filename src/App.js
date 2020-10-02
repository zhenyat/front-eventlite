import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"

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
    <Router>
      <Route path="/">
        <AppHeader />
      </Route>
      <Route exact path="/">
        <Eventlite />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
    </Router>
  );
}

export default App
