export function searchCard(inputValue,allRestaurants){
    const newData = allRestaurants.filter((obj)=>obj?.info?.name?.toLowerCase().includes(inputValue.toLowerCase()))
    return newData
}