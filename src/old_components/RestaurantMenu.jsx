import React from 'react'
import {useParams} from 'react-router-dom'
import Shimmer from './Shimmer'
import { IMG_CDN_URL } from './config'
import useRestaurant from '../../utils/useRestaurant'

const RestaurantMenu = () => {
    const params = useParams()
    const restaurant = useRestaurant(params.resId) // This hook is to fetch the data using the resId

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