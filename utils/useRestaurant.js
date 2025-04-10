import React,{useState,useEffect} from 'react'

const useRestaurant = (resId) => {
  const [restaurant,setRestaurant] = useState(null)

  useEffect(()=>{
    async function getMenu(){
      const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.99308229999999&lng=77.0150735&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
        const data = await response.json()
        setRestaurant(data.data)
    }
    getMenu()
},[])

    return restaurant
}

export default useRestaurant