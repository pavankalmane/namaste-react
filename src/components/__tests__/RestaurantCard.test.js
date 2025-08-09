import RestaurantCard from "../RestaurantCard";
import {render, screen} from "@testing-library/react"
import MOCK_DATA from "../mocks/resCardMock.json";   
import "@testing-library/jest-dom"

test("should load restaurant card", ()=>{
    render(<RestaurantCard res={MOCK_DATA}/>);

   const restaurantName=screen.getByText("Pizza Hut");
   const restaurantCuisines=screen.getByText("Pizzas");   

   expect(restaurantName).toBeInTheDocument();
   expect(restaurantCuisines).toBeInTheDocument();
})

test("should load restaurant card with offers", ()=>{
        render(<RestaurantCard  res={MOCK_DATA} offerLabel= {MOCK_DATA.aggregatedDiscountInfoV3.header + " " + MOCK_DATA.aggregatedDiscountInfoV3.subHeader}/>);
        const restaurantOffer=screen.getByText("₹165 OFF ABOVE ₹599");
        expect(restaurantOffer).toBeInTheDocument();

})