import React from 'react'

function TextInput(props) {

  return (
    <input
      type="text"
      dir="rtl"
      placeholder={props.placeholder}
      name={props.name}
      value={props.state.user}
      onChange={props.handleInputs}
    />
  )
}

export default TextInput