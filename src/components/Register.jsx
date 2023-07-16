import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function Register() {
  let navigate = useNavigate();
  const [phone,setPhone] = useState();
  const [username,setUsername] = useState();
  const [password,setPassword] = useState();
  const [cpassword,setCpassword] = useState();
  function Register()
  {
    if(password===cpassword)
    {
      axios.post('http://localhost:5000/signup', {
        phone:phone,
        username: username,
        password: password,
        cpassword:cpassword
      })
      .then(function (response) {
        console.log(response);
        // alert(response.data);
        return navigate("/login")


      })
      .catch(function (error) {
        console.log(error);
      });
    }
    else
    {
      alert("Passwords do not match");
    }
  }
  return (
    <div className='register'>
      <div className='registercard'>
        <h1>SignUp</h1>
        <form className="form">
          <input type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)} name="telphone" id="phone" placeholder='Phone Number' pattern="[0-9]{10}" required/>    
          <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} name="username" id="username" placeholder='username' required/>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" id="password" placeholder='password' required/>
          <input type="password" value={cpassword} onChange={(e)=>setCpassword(e.target.value)} name="cpassword" id="cpassword" placeholder='Confirm password' required/>
          <button type="button" id="submit" onClick={Register}>Sign In</button>
          <p id="login">Already have an account? <Link id="login" to="/login" style={{color:"red"}}>Login</Link> </p>
        </form>
      </div>
    </div>
  )
}

export default Register;
