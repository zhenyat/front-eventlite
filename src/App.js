import React from 'react';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom"

import AppHeader from './components/AppHeader'
import Login from './components/Login'
import Signup from './components/Signup'
import Eventlite from './components/Eventlite'
import Event from './components/Event'
import EventForm from './components/EventForm'

function App() {
  const currentUser = localStorage.getItem('user')

  return (
    <Router>
      <Route path="/">
        <AppHeader />
      </Route>
      <Route exact path="/">
        <Eventlite />
      </Route>
      <Route exact path="/login">
        {currentUser ? <Redirect to="/" /> : <Login />}
      </Route>
      <Route exact path="/signup">
        {currentUser ? <Redirect to="/" /> : <Signup />}
      </Route>
      <Route exact path="/events/:id" render={routeProps => (
        <Event {...routeProps} />
      )} />
      <Route exact path="/events/:id/edit" render={routeProps => (
        <EventForm {...routeProps} />
      )} />
      
    </Router>
  );
}

export default App
