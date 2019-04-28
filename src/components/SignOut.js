import React from 'react'

import { auth } from "../firebase";

import './../App.css'
import "./Home.css"

const SignOutPage = () => 
    <button
      className="blue btn-out" 
      type="button"
      onClick={ auth.doSignOut }
    >
      Sair
    </button>

export default SignOutPage
