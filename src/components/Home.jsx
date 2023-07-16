import React from 'react';
import Card from './Card';

import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [data,setData]=useState([{}]);
  useEffect(()=>{
    fetch("/restos").then(
      res =>res.json()
    ).then(
      data=>{
        setData(data)
        console.log(data)
      }
    )
  },[])
  return (
    <div className='home'>

      <Link id="add" to="/addReview">Add a Review</Link>
      <div className="homecards">
        {data.map(i=><Card data={i} key={`${i.key}`}/>)}
      </div>
    </div>
  )
}

export default Home;
