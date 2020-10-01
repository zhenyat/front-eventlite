import React from 'react'
import axios from 'axios'

import AuthErrors from './AuthErrors'

class Auth extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // loginMode: true,
      errorMessages: {}
    }
    if (this.props.loginMode) {
      this.url = "http://localhost:3001/auth/sign_in"
      this.header = "Sign in"
    } else {
      this.url = "http://localhost:3001/auth"
      this.header = "Sign up"
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios({
      method: 'POST',
      url: this.url,
      data: {
        email: this.email.value,
        password: this.password.value
      }
    })
    .then(response => {
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
      if (this.props.loginMode) {
        this.setState({errorMessages: error.response.data.errors})
      } else {
        this.setState({errorMessages: error.response.data.errors.full_messages})
      }
      console.log(typeof this.state.errorMessages)
      console.log("console.table: ")
      console.table(this.state.errorMessages)
      console.log("console.entries: ")
      Object.entries(this.state.errorMessages).forEach(keyValuePair => {
        console.log("zt:  ",...keyValuePair)
      })
    })
  }

  render() { 
    return (
      <div>
        <AuthErrors errorMessages = {this.state.errorMessages} />
        <h2>{this.header}</h2>
        <form onSubmit={this.handleSubmit} >
          <input name="email" ref={(input) => this.email = input } />
          <input name="password" type="password" ref={(input) => this.password = input } />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default Auth