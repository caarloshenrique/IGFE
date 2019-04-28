import React from 'react'

import AuthUserContext from './AuthUserContext'
//import { PasswordForgetForm } from './PasswordForget'
import PasswordChangeForm from './PasswordChange'
import withAuthorization from './withAuthorization'

import "./Home.css"

const AccountPage = () => 
  <AuthUserContext.Consumer>
    { authUser =>
      <div>
        <h1 className="app font">Conta: { authUser.email }</h1>
        <PasswordChangeForm />
      </div>
    }
  </AuthUserContext.Consumer>

const authCondition = ( authUser ) => !!authUser

export default withAuthorization( authCondition )( AccountPage )

// h1 <PasswordForgetForm />