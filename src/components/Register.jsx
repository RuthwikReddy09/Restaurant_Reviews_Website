import React from 'react'
import { Link } from 'react-router-dom';
function Register() {
  return (
    <div className='register'>
      <div className='registercard'>
        <h1>SignUp</h1>
        <form action="/" className="form">
          <input type="tel" name="telphone" id="phone" placeholder='Phone Number' pattern="[0-9]{10}"  required/>    
          <input type="text" name="username" id="username" placeholder='username' required/>
          <input type="password" name="password" id="password" placeholder='password' required/>
          <input type="password" name="password" id="cpassword" placeholder='Confirm password' required/>
          <button type="submit" id="submit">Sign In</button>
          <p id="login">Already have an account? <Link id="login" to="/login" style={{color:"red"}}>Login</Link> </p>
        </form>
      </div>
    </div>
  )
}

export default Register;
