import React, { Component } from "react"

import { auth } from '../firebase'

import "./Home.css"

const byPropKey = ( propertyName, value ) => () => ({
  [ propertyName ] : value
})

const INITIAL_STATE = {
  passwordOne : '',
  passwordTwo : '',
  error : null,
}

class PasswordChangeForm extends Component {
  constructor( props ) {
    super( props )

    this.state = { ...INITIAL_STATE }
  }

  onSubmit = ( event ) => {
    const { passwordOne } = this.state

    auth.doPasswordUpdate( passwordOne )
      .then( () => {
        this.setState( { ...INITIAL_STATE } )
      })
      .catch( error => {
        this.setState( byPropKey( 'error', error ) )
      })
    
      event.preventDefault()
  }

  render() { 
    const {
      passwordOne,
      passwordTwo,
      error,
    } = this.state

    const InputStyle = {
      display: 'block',
      margin: '0',
      padding: '0.8rem; 1.6rem',
      color: 'inherit',
      width: '80%',
      'font-family': 'inherit',
      'font-size': '1.4rem',
      'font-weight': 'inherit',
      'line-height': '1.8',
      border: 'none',
      'border-radius': '0.4rem',
      transition: 'box-shadow 300ms',
      outline: 'none',
      'box-shadow': '0.2rem 0.8rem 1.6rem #5e35b1'
    }

    const ButtonStyle = {
        width: '75%',
        color: '#eee',
        'text-align': 'center',
        border: '1px solid #eee',
        'border-radius': '8px',
        'background-color': 'rgb(77, 196, 178)',
        'font-size': '1.5rem'
    }

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === ''

    return ( 
      <form className="app" onSubmit={ this.onSubmit }>
        <br></br>
        <input
          style={InputStyle}
          value={ passwordOne }
          onChange={ event => this.setState( byPropKey( 'passwordOne', event.target.value ) ) }
          type="password"
          placeholder="Nova Senha"
        />
        <br></br>
        <input
          style={InputStyle}
          value={ passwordTwo }
          onChange={ event => this.setState( byPropKey( 'passwordTwo', event.target.value ) ) }
          type="password"
          placeholder="Confirme a Nova Senha"
        />
        <br></br>
        <button disabled={ isInvalid } style={ButtonStyle} type="submit">
          Resetar Minha Senha
        </button>

        { error && <p>{ error.message }</p> }
      </form>
     )
  }
}


// const PasswordChangePage = () => (
//   <div>
//     <h1>Password Change Page</h1>
//   </div>
// )

export default PasswordChangeForm
