import React, { useContext } from 'react';
import Card from './Card';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserContext from './Context';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import "../styles/loading.scss"
function Home() {
  const navigate=useNavigate();
  const [data,setData]=useState([{}]);
  const [context, setContext] = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    if(context==="")return navigate("/login");
    setIsLoading(true);
    fetch("/restos").then(
      res =>res.json()
      ).then(
        data=>{
          setData(data)
          setIsLoading(false)
        }
        )
      },[])
      return (
    <div className='home'>
        {isLoading && <Loading />}
      <Link id="add" to="/addReview">Add a Review</Link>
      <div className="homecards">
        {data.map(i=><Card data={i} key={`${i.key}`}/>)}
      </div>
    </div>
  )
}

export default Home;
