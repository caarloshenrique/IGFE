import React, { Component } from "react"
import { Link } from "react-router-dom"

import { auth } from "../firebase"
import * as routes from '../constants/routes'

import "./Home.css"

const PasswordForgetPage = () => 
  <div>
    <h1 className="app">Password Forget Page</h1>
    <PasswordForgetForm />
  </div>

const byPropKey = ( propertyName, value ) => () => ({
  [ propertyName ] : value
})

const INITIAL_STATE = {
  email: '',
  error: null
}

class PasswordForgetForm extends Component {
  constructor( props ) {
    super( props )

    this.state = { ...INITIAL_STATE }
  }

  onSubmit = ( event ) => {
    const { email } = this.state

    auth.doPasswordReset( email )
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
      email,
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
        'font-size': '1.8rem'
    }

    const isInvalid = email === ''

    return (
      <form className="app" onSubmit={ this.onSubmit }>
        <input 
          style={InputStyle} 
          value={ this.state.email }
          onChange={ event => this.setState( byPropKey('email', event.target.value ) ) }
          type='text'
          placeholder='Endereço de Email'
        />
        <br></br>
        <button disabled={ isInvalid } style={ButtonStyle} type="submit">
          Resetar minha senha
        </button>

        { error && <p>{ error.message }</p>}
      </form>
    )
  }
}

const PasswordForgetLink = () =>
  <p>
    <Link className="app" to={ routes.PASSWORD_FORGET }>Esqueceu a senha?</Link>
  </p>

export default PasswordForgetPage

export {
  PasswordForgetForm,
  PasswordForgetLink,
}