import React from 'react'
import { Link } from "react-router-dom";
import * as routes from "../constants/routes";

import "./Home.css"

const LandingPage = () => {
  return (
    <div className="app">
      <h1 className="white">Bem-vindo(a)!</h1>
      <Link className="white btn-start link" to={routes.HOME}>Iniciar</Link>
    </div>
  )
}

export default LandingPage
