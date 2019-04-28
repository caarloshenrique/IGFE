import React from 'react'

import './../App.css'

const Button = ( props ) => {

  return (
    <button className="btn btn-default" style={ props.buttonStyle } onClick={ props.handleClick }>{ props.children }</button>
  )
}

export default Button
