import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  axios  from 'axios'
function Add() {
    let navigate = useNavigate();
    const [name,setName] = useState()
    const [location,setLocation] = useState()
    const [rating,setrating] = useState(0)
    const [review,setreview] = useState()
    const [url,setUrl] = useState()
    function addNew()
    {
          axios.post('http://localhost:5000/addReview', {
            name:name,
            location: location,
            rating: rating,
            review:review,
            url:url
          })
          .then(function (response) {
            console.log(response);
            // alert(response.data);
            // return navigate("/");
            toast.success('Review Added Successfully', {
              position: "top-right",
              color:"red",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
          })
          .catch(function (error) {
            console.log(error);
          });
          
    }
    return (
        <div className='add'>
            <div className='addcard'>
            <h1>Add a Review</h1>
            <form className="addform">
                <input type="text" name="name" onChange={(e)=>setName(e.target.value)} className='addinput' placeholder='Restaurant Name' required />
                <input type="text" name="location" onChange={(e)=>setLocation(e.target.value)} className='addinput'  placeholder='Location'  required />
                <input type="number" name="rating" onChange={(e)=>setrating(e.target.value)} max='5' min='0' className='addinput'  placeholder='rating &#9733;'  required />
                <textarea name="review"  cols="30" onChange={(e)=>setreview(e.target.value)} className='addinput' id ="textarea"rows="10" placeholder='Review . . .' required></textarea>
                <input type="url" name="image" id="image" onChange={(e)=>setUrl(e.target.value)} className='addinput' placeholder='Image url'/>
                <button type="button" id="submit" onClick={addNew}>Submit</button>
                <ToastContainer />
            </form>
            </div>
        </div>
    )
}

export default Add
