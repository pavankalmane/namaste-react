import {render, screen,fireEvent} from "@testing-library/react";
import search from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResListData.json";
import Body from "../Body";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
test("should render search field in body component",async()=>{
    await act (async()=>render(
    <BrowserRouter>
    <Body />
</BrowserRouter>));
    const searchField = screen.getByText("Search");
    
    const searchPlaceholder = screen.getByPlaceholderText("Search for restaurants");
    

    const searchButton = screen.getByRole("button", { name: "Search" });
    
    const searchInput=screen.getByTestId("searchInput");
    fireEvent.change(searchInput,{target:{value:"Pizza"}});
    fireEvent.click(searchButton);

    const card=screen.getAllByTestId("resCard");

    expect(searchButton).toBeInTheDocument();  
    expect(searchButton).toBeInTheDocument();
    expect(searchPlaceholder).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(searchField).toBeInTheDocument();
    expect(card.length).toBe(1);
});

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        },
    });
}); 