import { useRouteError }  from "react-router-dom";
const Error=()=>{
     console.log(useRouteError());
    return(
       
        <div className="error">
            <h1>Ooops!!! Something went wrong</h1>
            <h2>404 Not Found</h2>
            
        </div>
    )
}

export default Error;