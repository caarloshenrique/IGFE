import React from "react";
import { Link } from "react-router-dom";

import AuthUserContext from './AuthUserContext'
import SignOutButton from "./SignOut";
import * as routes from "../constants/routes";

import "./Home.css"

const Navigation = () => 
  <AuthUserContext.Consumer>
  { authUser => authUser
    ? <NavigationAuth /> 
    : <NavigationNonAuth />
  }
  </AuthUserContext.Consumer>


const NavigationAuth = () => 
  <nav className="nav">
    <Link className="white link fonte-size" to={routes.LANDING}>Início</Link>
   
    <Link className="white link fonte-size" to={routes.HOME}>Jogar</Link>
   
    <Link className="white link fonte-size" to={routes.ACCOUNT}>Conta</Link>
    <SignOutButton />
  </nav>


const NavigationNonAuth = () => 
  <nav className="nav">
    <Link className="white link fonte-size" to={routes.LANDING}>Início</Link>
    <Link className="white link fonte-size" to={routes.SIGN_IN}>Autenticar</Link>
  </nav>

export default Navigation;
