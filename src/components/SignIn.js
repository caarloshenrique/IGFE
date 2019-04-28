import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { SignUpLink } from './SignUp'
import { PasswordForgetLink } from './PasswordForget'
import { auth } from '../firebase'
import * as routes from "../constants/routes"



const SignInPage = ( { history } ) => 
    <div>
      <h1 className="app white">Sign In Page</h1>
      <SignInForm history={ history } />
      <PasswordForgetLink />
      <SignUpLink />
    </div>

const byPropKey = ( propertyName, value ) => () => ({
  [propertyName]: value,
})

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
}

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE }
  }

  onSubmit = ( event ) => {
    const {
      email,
      password,
    } = this.state

    const {
      history,
    } = this.props

    auth.doSignInWithEmailAndPassword( email, password )
      .then( () => {
        this.setState( { ...INITIAL_STATE } )
        history.push( routes.HOME )
      })
      .catch( error => {
        this.setState( byPropKey('error', error))
      })

    event.preventDefault()
  }
  render() { 
    const {
      email,
      password,
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
        width: '60%',
        color: '#eee',
        'text-align': 'center',
        border: '1px solid #eee',
        'border-radius': '8px',
        'background-color': 'rgb(77, 196, 178)',
        'font-size': '1.8rem'
    }
 

    const isInvalid =
      password === '' ||
      email === ''
      
    return (
      <form className="app" onSubmit={ this.onSubmit }>

        <input 
          style={InputStyle}
          value={ email }
          onChange={ event => this.setState( byPropKey( 'email', event.target.value ) ) }
          type="text"
          placeholder="Endereço de Email"
        />
        <br></br>
        <input
          style={InputStyle}
          value={ password }
          onChange={ event => this.setState( byPropKey( 'password', event.target.value ) ) }
          type="password"
          placeholder="Senha"
        />
        <br></br>
        <button disabled={ isInvalid } style={ButtonStyle} type="submit">
          Entrar
        </button>

        { error && <p>{ `${error.code} - ${error.message}` }</p> }
      </form>
    )
  }
}

export default withRouter( SignInPage )

export {
  SignInForm,
}