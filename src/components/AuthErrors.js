import React from 'react'

const AuthErrors = (props) => (
  <div>
    {Object.keys(props.errorMessages).map(index => {
      return (
            <p key={index}>{props.errorMessages[index]}</p>
          )
    })}
  </div>
)

export default AuthErrors
