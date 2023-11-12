import React from "react";
import ReactDOM from "react-dom/client";

// const heading= React.createElement("h1",{id:"heading"}, "Namaste React");
const Heading=()=><h1 className ="heading">Namaste React</h1>

const FComponent=()=>{
    return(
    <div> <Heading />
         <h1>this is functional component</h1> 
    </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FComponent />);