import { fireEvent, render,screen, } from "@testing-library/react";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { BrowserRouter }  from "react-router-dom";
import { Provider }  from "react-redux";
import "@testing-library/jest-dom"
it("should load header component",()=>{
    render(
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSSplatPath: true }}>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    
       
);
  //const logInButton=screen.getByRole("button");//better is role
  const logInButton=screen.getByText("Login");
  expect(logInButton).toBeInTheDocument();
});

it("should dispkay cart items",()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    
       
);
  const cart= screen.getByText("Cart (0 items)");
  const logInButton=screen.getByText("Login");
  fireEvent.click(logInButton);

  expect(logInButton).toBeInTheDocument();
  expect(cart).toBeInTheDocument();
});

