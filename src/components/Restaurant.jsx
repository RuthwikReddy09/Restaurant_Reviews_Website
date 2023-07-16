import React from 'react';
import { useParams,useLocation } from 'react-router-dom';

function Restaurant() {
    const params=useParams();
    // console.log(params);
    const location = useLocation();
    const data=location.state
  return (
    <div className='restaurant'>
      <div className="restodata">
      <h1 id="heading"> {params.resto} </h1>
      <img src={data.url} id="restoimage" alt="Error" />
      <p><b>Name :</b> {data.name}</p>
      <p><b>Location :</b> {data.location}</p>
      <p><b>Rating :</b> {data.rating}&#9733;</p>
      <p><b>Reviews :</b> {data.review}</p>
      </div>
    </div>
  )
}

export default Restaurant;
