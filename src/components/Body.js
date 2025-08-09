import RestaurantCard, {withRestaurantOffers} from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [topRatedRestaurant, setRestoCards] = useState([]);

  const [filterdRestaurant, setFilterdRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantOffers = withRestaurantOffers(RestaurantCard);
  useEffect(() => { 
    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.3357014&lng=75.1202406&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      setRestoCards(
        json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

      setFilterdRestaurant(
        json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    };
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>Looks like you are offline, please check your internet connection</h1>
    );
  }

  return topRatedRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="search-container">
        <div className="flex items-center">
          <input
            className="w-4/12 border border-black-300 rounded-md m-4 p-2"
            type="text"
            data-testid="searchInput"
            placeholder="Search for restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <div className="search-results" >
            <button
              className="ml-2 px-4 py-2 bg-pink-500 text-white rounded hover:shadow-xl text-lg font-semibold"
              data-testid="resCard"
              onClick={() => {
                const filterdRestaurant = topRatedRestaurant.filter((resto) =>
                  resto.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                );
                setFilterdRestaurant(filterdRestaurant);
              }}
            >
              Search
            </button>
          </div>

          <div className="m-5 p-2 border border-black-300 rounded-md bg-pink-500 text-white hover:shadow-xl text-lg font-semibold"
          > 
            <button
              className="top-resto"
              onClick={() => {
                const filterdRestaurant = topRatedRestaurant.filter(
                  (resto) => resto.info.avgRating > 4.5
                );
                setFilterdRestaurant(filterdRestaurant);
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          {filterdRestaurant.map((resto) => (
            <Link
              to={`/RestaurantDetails/${resto.info.id}`}
              key={resto.info.id}
            >
              {resto.info.aggregatedDiscountInfoV3 ? (
                <RestaurantOffers 
                  res={resto.info}
                  
                />
              ) : (
                <RestaurantCard
                  res={resto.info}// discount={resto.info.aggregatedDiscountInfoV3}
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
