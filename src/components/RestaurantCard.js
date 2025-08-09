import { CDN_URL } from "../utils/constant";
const RestaurantCard = (props) => {
  return (
    <div
      className="bg-white border w-72 m-4 flex flex-col items-center
  rounded-xl shadow-xl hover:shadow-2xl items-center border-gray-200"
    >
      <div className="relative w-full">
        <img
          className="w-full h-44 rounded-t-xl object-cover"
          alt="foodImage"
          src={CDN_URL + props.res.cloudinaryImageId}
        />
        {props.offerLabel && (
          <div className="absolute bottom-0 left-0 w-full text-center py-1">
            {props.offerLabel}
          </div>
        )}
      </div>
      <div className="px-4 pb-2 w-full flex flex-col gap-1">
        <h3 className="text-lg font-bold text-gray-800 truncate">
          {props.res.name}
        </h3>
        <h4 className="text-sm text-gray-500 truncate">
          {props.res.cuisines.join(",")}
        </h4>
        <h4 className="text-sm text-gray-500">⭐ {props.res.avgRating}</h4>
        <h4 className="text-sm text-gray-500">💰 {props.res.costForTwo}</h4>
      </div>
    </div>
  );
};
export const withRestaurantOffers = (RestaurantCard) => {
  return (props) => {
    const offerLabel = props.res.aggregatedDiscountInfoV3 ? (
      <label className="text-2xl font-extrabold text-white block mb-1 text-center tracking-wide drop-shadow-md">
        {props.res.aggregatedDiscountInfoV3?.header}{" "}
        {props.res.aggregatedDiscountInfoV3?.subHeader}
      </label>
    ) : null;
    return <RestaurantCard {...props} offerLabel={offerLabel} />;
  };
};
export default RestaurantCard;
