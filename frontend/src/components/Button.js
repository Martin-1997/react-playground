import React from 'react'
import PropTypes from 'prop-types'

// single variable (like (probs)) -> allows arbitrary values to be received, acccessible with probs.value_name
// predefined variables (like ({color, text})) -> predetermines which
const Button = ({ color, text, onClick }) => {
  const buttonClick = (e) => {
    console.log('Button was clicked!')
    console.log(e)
  }

  return (
    <div>
      <button onClick={onClick} className='btn' style={{ color }} >{text}</button>
    </div>
  )
}

Button.defaultProps = {
  color: 'steelblue'
}

Button.protoTypes = {
  text: PropTypes.string,
  color: PropTypes.string
}

export default Button
