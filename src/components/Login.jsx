import React ,{useContext, useState}from 'react'
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import UserContext from './Context';

function Login() {
  const [username, setUsername] = useState();
  const [context, setContext] = useContext(UserContext);
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  function loginUser() {
    axios.post('http://localhost:5000/login', {
      username: username,
      password: password
    })
    .then(function (response) {
        console.log(response);
        if(response.data.message==="Login Successful")
        {
          toast.success('Successfully Logged in', {
            position: "top-right",
            color:"red",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "light"
          });
          console.log(context);
          setContext(response.data.username);
        }
        else
        {
          toast.error('Invalid Credentials', {
            position: "top-right",
            color:"red",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "light"
            });
        }
    })
    .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className='login'>
      <div className='logincard'>
        <h1>Login</h1>
        <form className="form">
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} name="username" id="username" placeholder='username' required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder='password' required />
          <button type="button" id="submit" onClick={loginUser}>Sign In</button>
          <p id="signup">Don't have an account? <Link id="register" to="/register" style={{ color: "red" }}>Sign Up</Link> </p>
          <ToastContainer/>
        </form>
      </div>
    </div>
  );
}
export default Login;

/* <a href="https://storyset.com/worker">Worker illustrations by Storyset</a> */