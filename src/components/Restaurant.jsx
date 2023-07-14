import React from 'react';
import { useParams } from 'react-router-dom';

function Restaurant() {
    const params=useParams();
    console.log(params);
  return (
    <div className='restaurant'>
      <h1>{params.resto}</h1>
    </div>
  )
}

export default Restaurant;
