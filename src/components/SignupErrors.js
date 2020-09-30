import React from 'react'

const SignupErrors = (props) => (
  <div>
    {Object.keys(props.errorMessages).map(index => {
      return (
            <p key={index}>{props.errorMessages[index]}</p>
          )
    })}
  </div>
)

export default SignupErrors
