import {useState, useEffect} from 'react';
const useRestaurantDetails=(resId)=>{
    const[resInfo,setResInfo]=useState(null);
useEffect(()=>{
    fetchData(); 
},[])
const fetchData=async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=15.3357014&lng=75.1202406&restaurantId="+resId)
    const json=await data.json();
    setResInfo(json.data);
}

    return resInfo;
}

export default useRestaurantDetails;