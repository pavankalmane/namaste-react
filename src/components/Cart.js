import ItemList from "./ItemList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart=()=>{
    const dispatch=useDispatch();
    const cartItems=useSelector((store)=>store.cart.items);

    const handleClearCart=()=>{
        dispatch(clearCart())
    }
    return(
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Shopping Cart</h2>
            <div className="bg-white rounded shadow p-4">
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors mb-4" onClick={handleClearCart}>Clear Cart</button>
                <ItemList data={cartItems} />
            </div>
        </div>
    );
}


export default Cart;