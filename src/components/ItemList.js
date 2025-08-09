import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const ItemList = ({ data }) => {
const dispatch = useDispatch();
const handleAddItem = (item) => {
  dispatch(addItem(item));
}
  return (
    <div className="flex flex-col gap-4 w-full">
      {data.map((item) => (
        <div  data-testid="item" key={item.card.info.id} className="bg-white rounded shadow p-4 flex flex-row gap-4 items-start">
          <div className="flex flex-col justify-between flex-1 gap-2">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-800">{item.card.info.name}</span>
              <span className="text-green-600 font-semibold">₹{item.card.info.price ? item.card.info.price / 100 : 'N/A'}</span>
            </div>
            {item.card.info.description && (
              <p className="text-gray-500 text-sm">{item.card.info.description}</p>
            )}
          </div >
          <div className="flex flex-col items-center justify-between">
          <img 
            src={CDN_URL + item.card.info.imageId} 
            alt={item.card.info.name} 
            className="w-32 h-32 object-cover rounded-lg border border-gray-200 bg-gray-100 shadow-sm transition-transform duration-200 hover:scale-105" 
          />
          <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-200 transition-colors hover:text-blue-500 mt-2" onClick={() => handleAddItem(item)}>Add</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
