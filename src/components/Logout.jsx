import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserContext from './Context';
import { useContext } from 'react';
import Loading from './Loading';
import "../styles/loading.scss"
function Logout() {
    const navigate=useNavigate();
    const [context, setContext] = useContext(UserContext);
    axios.post('http://localhost:5000/logout', {
            data:"logout"
      })
      .then(function (response) {
        console.log(response);
        // alert(response.data);
        setContext("")
        return navigate("/login")
      })
      .catch(function (error) {
        alert("error");
        // console.log(error);
      });
  return (
   
    <div className="logout">
      <Loading/>
    </div>
 
 
  )
}

export default Logout
