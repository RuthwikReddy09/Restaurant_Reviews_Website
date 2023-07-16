import React ,{useState}from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  function loginUser() {
    axios.post('http://localhost:5000/login', {
      username: username,
      password: password
    })
    .then(function (response) {
        console.log(response);
        alert(response.data);
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
        </form>
      </div>
    </div>
  );
}
export default Login;

/* <a href="https://storyset.com/worker">Worker illustrations by Storyset</a> */