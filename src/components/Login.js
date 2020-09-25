import React, { Component } from 'react'
import axios from 'axios'

class Login extends Component {
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
  }

  
  render () {
    return (
      <div>
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
