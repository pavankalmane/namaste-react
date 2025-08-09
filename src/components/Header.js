import { LOGO_URL } from "../utils/constant"; 
import {useState, useContext} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Grocery from "./Grocery";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header=()=>{
  const [btn,setBtn]=useState("Login");
  const  onlineStatus=useOnlineStatus();
  const data=useContext(UserContext);
  
  const cartItems= useSelector((store)=>store.cart.items);
  return(
    <div className="flex justify-between bg-pink-50 shadow-lg ">
      <div className="logo">
          <img src={LOGO_URL} alt="food image" className="w-40"/>
      </div>
      <div className="flex py-5">
         <ul className="flex space-x-4 hover:cursor-pointer text-lg font-semibold">
            <li><Link to="/home" className="hover:text-pink-600">Home</Link></li>
            <li><Link to="/about" className="hover:text-pink-600">About</Link></li>
            <li><Link to="/contact" className="hover:text-pink-600">Contact</Link></li>
            <li><Link to="/Grocery" className="hover:text-pink-600">Grocery</Link></li>
            <li><Link to="/Cart" className="hover:text-pink-600">Cart ({cartItems.length} items)</Link></li>
            <li>{onlineStatus ? "Online" : "Offline"}</li>
            <li>
              <button className="login" onClick={()=>{
              if(btn==="Login"){
                setBtn("Logout");
              }else{
                setBtn("Login");
              }
            }}>{btn}</button>
            </li>
            <li className="font-semibold">{data.loggedInUser}</li>
         </ul>
      </div>
    </div>
  )
}

export default Header;