import {render,screen,fireEvent} from "@testing-library/react";
import RestaurantDetails from "../RestaurantDetails";
import MOCK_RESTAURANT from "../mocks/mockRestaurantDetail.json";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import appStore  from "../../utils/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_RESTAURANT);
        }
    })
});

test ("should load restaurant details",async()=>{
    await act(async()=>render(
   <BrowserRouter>    
    <Provider store={appStore}>
        <Header />
        <RestaurantDetails restaurant={MOCK_RESTAURANT} />
    </Provider>
        </BrowserRouter> 
    ))

    const accordianHeader=screen.getByText("Mexican Range & New Offerings (32)")
    fireEvent.click(accordianHeader);
    const item=screen.getAllByTestId("item");
    expect(item.length).toBe(32);
    const addBtn=screen.getAllByRole("button", { name: "Add" });
    fireEvent.click(addBtn[0]);

    expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();



})