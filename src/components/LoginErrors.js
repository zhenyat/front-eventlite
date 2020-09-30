import React from 'react'

const LoginErrors = (props) => (
  <div>
    {Object.keys(props.errorMessages).map(index => {
      return (
            <p key={index}>{props.errorMessages[index]}</p>
          )
    })}
  </div>
)

export default LoginErrors
