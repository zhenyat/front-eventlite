import React from 'react'
import axios from 'axios'

import SignupErrors from './SignupErrors'

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errorMessages: {}
    }
  }

  handleSignup = (e) => {
    e.preventDefault()
    axios({
      method: 'POST',
      url: 'http://localhost:3001/auth',
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
      this.setState({errorMessages: error.response.data.errors.full_messages})
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
        <SignupErrors errorMessages = {this.state.errorMessages} />
        <h2>Sign up</h2>
        <form onSubmit={this.handleSignup} >
          <input name="email" ref={(input) => this.email = input } />
          <input name="password" type="password" ref={(input) => this.password = input } />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default Signup