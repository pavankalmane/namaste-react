import {useEffect} from "react";
import { useState } from "react";
import Shimmer from "./Shimmer";
import ItemList from "./ItemList";




const Menu = ({ itemCards, showItem,setShowIndex }) => {

    const handleClick=()=>{
     setShowIndex();
}
    console.log("Item Cards:", itemCards);
    if (!itemCards) return <div>No menu items available</div>;
    
    return (
       
        <div className="bg-gray-50 p-6 w-full max-w-2xl mx-auto rounded-lg shadow flex flex-col gap-6 items-center">
            <div className="font-semibold text-2xl flex justify-between w-full px-2 cursor-pointer" onClick={handleClick}>
                <span>{`${itemCards.title} (${itemCards.itemCards?.length})`}</span>
                <span className="text-2xl">^</span>
            </div>
            {showItem && <ItemList data={itemCards.itemCards} />}
        </div>
     );
};

export default Menu;