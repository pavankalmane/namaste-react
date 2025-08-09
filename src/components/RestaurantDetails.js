import { useEffect } from "react";
import { useState } from "react";
import Menu from "./Menu";
import { useParams } from "react-router-dom";
import useRestaurantDetails from "../utils/useRestaurantDetails";





const RestaurantDetails = () => {

  const { resId } = useParams(); // Get the restaurant ID from the URL parameters
  const restaurantDetails = useRestaurantDetails(resId);
  const [showIndex, setShowIndex] = useState(0);
  if (!restaurantDetails?.cards) return null; // Handle case where data is not yet available
  const { name, cuisines, costForTwoMessage, areaName } =
    restaurantDetails?.cards?.[2]?.card?.card?.info;

  const itemCards =
    restaurantDetails?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR
      ?.cards?.[2]?.card?.card?.itemCards;

  const categories =
    restaurantDetails?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) =>
        item.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("Categories:", categories);

  return (
    <div className="category">
      <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2 text-center">
          {name}
        </h1>
        <div className="flex items-center justify-center gap-4 mb-2">
          <span className="text-yellow-500 font-bold text-lg">⭐ 4.4</span>
          <span className="text-gray-500">(14K+ ratings)</span>
        </div>
        <div className="text-gray-600 text-center mb-4">
          {cuisines.join(", ")} - {costForTwoMessage}
        </div>
        <div className="flex items-center justify-center gap-8 mb-4">
          <div className="flex items-center gap-2 text-gray-500">
            <span>📍</span>
            <span>{areaName}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <span>🕐</span>
            <span>25-30 mins</span>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-6">
          {categories.map((category, idx) => (
            <Menu key={category.card?.card?.title || idx} 
            itemCards={category.card?.card}
            showItem={ idx === showIndex ? true : false} 
            setShowIndex={()=>setShowIndex(idx)}
          />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
