import { useEffect,useState } from "react"

const useRestaurants=()=>{
    const [restaurants, setRestaurants] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])
    const fetchData=async()=>{
            const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.3357014&lng=75.1202406&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            const json=await data.json();
            console.log("API response:", json);
            setRestaurants(json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants||[]);
    }
    return restaurants;
}

export default useRestaurants;