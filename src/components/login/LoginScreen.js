import React from 'react'
import { useNavigate } from "react-router-dom";
import "./LoginScreen.css"

const LoginScreen = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/accion", {replace:true});
  };

  return (
    <div className='container-login'>
        <h1>Login - App de películas</h1>
        <hr />

        <button 
        className='btn-login'
        onClick={handleLogin}
        >Login</button>
    </div>
  )
}

export default LoginScreen;