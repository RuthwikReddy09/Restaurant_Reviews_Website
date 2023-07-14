import React from 'react'
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className='login'>
      <div className='logincard'>
        <h1>Login</h1>
        <form action="/" className="form">
          <input type="text" name="username" id="username" placeholder='username' required/>
          <input type="password" name="password" id="password" placeholder='password' required/>
          <button type="submit" id="submit">Sign In</button>
          <p id="signup">Don't have an account? <Link id="register" to="/register" style={{color:"red"}}>Sign Up</Link> </p>
        </form>
      </div>
    </div>
  )
}

export default Login;

/* <a href="https://storyset.com/worker">Worker illustrations by Storyset</a> */