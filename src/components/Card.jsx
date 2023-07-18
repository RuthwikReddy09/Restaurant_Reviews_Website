import React, {useState } from 'react';
import {Link} from 'react-router-dom';
import {AiOutlineHeart} from 'react-icons/ai'
import {AiFillHeart} from 'react-icons/ai'



function Card({data}) {
  // console.log(data.name);
  // const [like,setLike]=useState(false);
  // function setLiked(e)
  // {
  //   e.preventDefault();
  //   setLike(!like);
  // }
  return (
      <Link className='card' to={`/restaurant/${data.name}`} state={data}>
        <div className="cimage">
          <img src={data.url} alt="Error"/>
        </div>
        <div className="cdata">
          <h5>{data.name},{data.location}</h5>
          <div className="like" >
          {/* onClick={setLiked} */}
            <h5> &#9733; {data.rating}</h5>
            {/* {like?<AiFillHeart size={20} color='rgb(255, 56, 92)'/>:<AiOutlineHeart size={20}/>} */}
          </div>
        </div>
      </Link>
  )
}

export default Card
