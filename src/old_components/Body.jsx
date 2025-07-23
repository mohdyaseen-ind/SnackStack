import React,{useState , useEffect} from 'react'
import Card from './Card'
import Shimmer from './Shimmer'
import {Link} from 'react-router-dom'
import { searchCard } from '../../utils/helper'
import useOnline from '../../utils/useOnline'

const Body = () => {
    const [inputValue, setInputValue] = useState("")
    const [restaurants, setRestaurants] = useState([])
    const [allRestaurants, setAllRestaurants] = useState([])

    useEffect(()=>{
      async function fetchApi(){
        const response = await fetch("https://mocki.io/v1/593331db-4eb9-4237-af13-b7429eae2d45")
        const data = await response.json();
        setRestaurants(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
        setAllRestaurants(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
      }
      fetchApi()
    },[])

    const isOnline = useOnline()

    if(!isOnline){
      return <h1>🛜 Please Check your Internet Connection</h1>
    }

  return allRestaurants.length==0 ? (<Shimmer />) : (
    <>
      <div className='p-5 bg-pink-50 my-2'>
          <input type="text" value={inputValue} placeholder='Search...' onChange={(e)=>setInputValue(e.target.value)}/>
          <button onClick={()=>setRestaurants(searchCard(inputValue,allRestaurants))} className='p-2 m-2 bg-purple-700 hover:bg-purple-900 text-white rounded-md'>Search</button>
      </div>
      <div className='flex flex-wrap'>
          {restaurants.length>0 ? (restaurants.map((obj) => <Link to={"/restaurant/" + obj.info.id} key={obj.info.id}><Card {...obj.info} /></Link>)) : (<h1>No Restaurants Match Your Search</h1>)}
      </div>
    </>
  )
}

export default Body


