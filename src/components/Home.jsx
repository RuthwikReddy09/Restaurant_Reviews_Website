import React from 'react';
import Card from './Card';




function Home() {

   const resto = [
    {
      name:"Tulips Restaurant",
      location:"India",
      rating:5
    },
    {
      name:"Hotel Vivera",
      location:"India",
      rating:4.5
    },
    {
      name:"Tulips Restaurant",
      location:"India",
      rating:5
    },
    {
      name:"Mehfil",
      location:"India",
      rating:5
    },
    {
      name:"Sampoorna Hotel",
      location:"India",
      rating:4
    },
    {
      name:"Santosh Dabha",
      location:"India",
      rating:4.5
    },
    {
      name:"Tulips Restaurant",
      location:"India",
      rating:5
    },
    {
      name:"Hotel Vivera",
      location:"India",
      rating:4.5
    },
    {
      name:"Tulips Restaurant",
      location:"India",
      rating:5
    },
    {
      name:"Mehfil",
      location:"India",
      rating:5
    },
    {
      name:"Sampoorna Hotel",
      location:"India",
      rating:4
    },
    {
      name:"Santosh Dabha",
      location:"India",
      rating:4.5
    },
    {
      name:"Tulips Restaurant",
      location:"India",
      rating:5
    },
    {
      name:"Hotel Vivera",
      location:"India",
      rating:4.5
    },
    {
      name:"Tulips Restaurant",
      location:"India",
      rating:5
    },
    {
      name:"Mehfil",
      location:"India",
      rating:5
    },
    {
      name:"Sampoorna Hotel",
      location:"India",
      rating:4
    },
    {
      name:"Santosh Dabha",
      location:"India",
      rating:4.5
    },
    {
      name:"Tulips Restaurant",
      location:"India",
      rating:5
    },
    {
      name:"Hotel Vivera",
      location:"India",
      rating:4.5
    },
    {
      name:"Tulips Restaurant",
      location:"India",
      rating:5
    },
    {
      name:"Mehfil",
      location:"India",
      rating:5
    },
    {
      name:"Sampoorna Hotel",
      location:"India",
      rating:4
    },
    {
      name:"Santosh Dabha",
      location:"India",
      rating:4.5
    }
  ]
  return (
    <div className='home'>


      {resto.map(i=><Card data={i}/>)}

    </div>
  )
}

export default Home;
