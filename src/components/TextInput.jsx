import React from 'react'

function TextInput({ placeholder, name, value, type, onChange }) {

  return (
    <input
      type={type || 'text'}
      dir='rtl'
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  )
}

export default TextInput