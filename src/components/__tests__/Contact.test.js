import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Test case for contact page",()=>{
test("should load contact page", ()=>{
    render(<Contact/>);
  const heading=  screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent('Contact Us');
})
test("should have button page", ()=>{
    render(<Contact/>);

  const button=screen.getByRole('button',{name:"Send"});
  expect(button).toBeInTheDocument();
})
test("should placeholder", ()=>{
    render(<Contact/>);
  const input = screen.getByPlaceholderText("name");
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("placeholder","name");
})
test("should have email input", ()=>{
    render(<Contact/>);
  const input = screen.getByPlaceholderText("email");
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("placeholder","email");
})

test("should have all inputs",()=>{
    render(<Contact/>);
    const inputs=screen.getAllByRole("textbox");
    expect(inputs.length).toBe(3);
})
});