import React,{useState , useEffect} from 'react'
import Card from './Card'
import Shimmer from './Shimmer'

function searchCard(inputValue,allRestaurants){
    const newData = allRestaurants.filter((obj)=>obj.info.name.toLowerCase().includes(inputValue.toLowerCase()))
    return newData
}

const Body = () => {
    const [inputValue, setInputValue] = useState("")
    const [restaurants, setRestaurants] = useState([])
    const [allRestaurants, setAllRestaurants] = useState([])

    useEffect(()=>{
      async function fetchApi(){
        const response = await fetch(" https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139&lng=77.2090&page_type=DESKTOP_WEB_LISTING")
        const data = await response.json();
        setRestaurants(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
        setAllRestaurants(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
      }
      fetchApi()
    },[])

  return allRestaurants.length==0 ? (<Shimmer />) : (
    <>
    <div className='search-box'>
        <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
        <button onClick={()=>setRestaurants(searchCard(inputValue,allRestaurants))}>Search</button>
    </div>
    <div style={{display: 'flex',flexWrap: 'wrap'}}>
        {restaurants.length>0 ? (restaurants.map((obj) => <Card key={obj.info.id} {...obj.info} />)) : (<h1>No Restaurants Match Your Search</h1>)}
    </div>
    </>
  )
}

export default Body