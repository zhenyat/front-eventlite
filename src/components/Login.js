import React, { Component } from 'react'
import axios from 'axios'

import LoginErrors from './LoginErrors'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errorMessages: {}
    }
  }

  handleLogin = (e) => {
    e.preventDefault()
    axios({
      method: 'POST',
      url: 'http://localhost:3001/auth/sign_in',
      data: {
        email: this.email.value,
        password: this.password.value
      }
    })
    .then(response => {
      console.log(response)
      localStorage.setItem('user',
        JSON.stringify({
          'access-token': response.headers['access-token'],
          'client': response.headers['client'],
          'uid': response.data.data.uid
      }))
      window.location = '/'
    })
    .catch(error => {
      console.log("error.response.data:   ",error.response.data)
      this.setState({errorMessages: error.response.data.errors})
      console.log(typeof this.state.errorMessages)
      console.log("console.table: ")
      console.table(this.state.errorMessages)
      console.log("console.entries: ")
      Object.entries(this.state.errorMessages).forEach(keyValuePair => {
        console.log("zt:  ",...keyValuePair)
      })
    })
  }

  
  render () {
    return (
      <div>
        <LoginErrors errorMessages = {this.state.errorMessages} />
        <h2>Log in</h2>
        <form onSubmit={this.handleLogin}>
          <input name='email' ref={(input) => this.email = input } />
          <input name="password" type="password" ref={(input) => this.password = input } />
          <input type="submit" value="Log in" />
        </form>
      </div>
    )
  }
}
export default Login
