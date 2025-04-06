import React,{useState , useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Shimmer from './Shimmer'
import { IMG_CDN_URL } from './config'

const RestaurantMenu = () => {
    const params = useParams()
    const [restaurant , setRestaurant] = useState(null) //We pass null here because null is a falsy value and it will render shimmer whereas {} is a truthy value so it will render the component

    useEffect(()=>{
        async function getMenu(){
            const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.99308229999999&lng=77.0150735&restaurantId=${params.resId}&catalog_qa=undefined&submitAction=ENTER`)
            const data = await response.json()
            console.log(data.data)
            setRestaurant(data.data)
        }
        getMenu()
    },[])

  return (!restaurant) ? <Shimmer /> : (
    <>
    <div>
        <h1>Name: {restaurant.cards[0]?.card?.card?.text}</h1>
        <img src={IMG_CDN_URL + restaurant.cards[2]?.card?.card?.info?.cloudinaryImageId} alt="img" />
        <h1>Rating: {restaurant.cards[2]?.card?.card?.info?.avgRating}</h1>
    </div>
    <div>
        
    </div>
    </>
  )
}

export default RestaurantMenu