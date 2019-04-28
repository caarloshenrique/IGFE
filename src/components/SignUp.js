import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'


import { auth } from '../firebase'
import * as routes from '../constants/routes'

import "./Home.css"

const SignUpPage = ({ history }) =>
  <div className="flex column vertical-center">
    <h1>Sign Up</h1>
    <SignUpForm history={history} />
  </div>

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
}

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
})

class SignUpForm extends Component {
  constructor(props) {
    super(props)

    this.state = { ...INITIAL_STATE }
  }

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
    } = this.state

    const { history, } = this.props

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE })
        history.push(routes.HOME)
      })
      .catch(error => {
        this.setState(byPropKey('error', error))
      })

    event.preventDefault()
  }

  render() {

    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === ''

    const cssInput = { ...inputs.bases, ...inputs["input:focus"] }

    return (

      <form className={`flex column vertical-center`} style={base} onSubmit={this.onSubmit}>

        <input
          style={cssInput}
          value={username}
          onChange={event => this.setState(byPropKey('username', event.target.value))}
          type='text'
          placeholder='Nome Completo'
        />

        <input
          style={cssInput}
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type='text'
          placeholder='Endereço de Email'
        />

        <input
          style={cssInput}
          value={passwordOne}
          onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
          type='password'
          placeholder='Senha'
        />

        <input
          style={cssInput}
          value={passwordTwo}
          onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          type='password'
          placeholder='Confirme a Senha'
        />

        <button style={cssInput} disabled={isInvalid} type="submit">Registre-se</button>

        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

const SignUpLink = () =>
  <p className="app">
    Não tem uma conta?
    {' '}
    <Link className="app" to={routes.SIGN_UP}>Sign Up</Link>
  </p>

export default withRouter(SignUpPage)

export {
  SignUpForm,
  SignUpLink,
}


const base = {
  boxSizing: 'border-box',
  width: '100%',
  padding: 20,
}
const inputs = {
  bases: {
    boxSizing: 'border-box',
    border: '1px solid #333',
    borderRadius: 50,
    width: '100%',
    marginTop: 30,
    padding: 10
  },
  "input:focus": {
    outline: 'none'
  },
  bgGreen : {
    background: ''
  }
}