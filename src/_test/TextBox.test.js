import React from 'react';
import {   fireEvent , render } from "@testing-library/react"
import TextBox from '../components/Auth/TextBox';

test("TextBox placeholder test ",()=>{

 const {getByPlaceholderText } = render(<TextBox type="text" placeholder="hi"/>)

 expect(getByPlaceholderText("hi")).toBeInTheDocument() ; 
 expect(getByPlaceholderText("hi")).not.toBeNull(); 
 expect(getByPlaceholderText("hi")).toContainHTML("hi")

}) ; 

test ("TextBox default value test " , ()=>{
    const {getByDisplayValue } = render(<TextBox defaultValue="hi"/>)
    expect(getByDisplayValue("hi")).toBeInTheDocument()
})

test("TExtBox change value test " , ()=>{
    const utils= render(<TextBox placeholder="email" type="email" /> )
    const input = utils.getByPlaceholderText("email"); 
    fireEvent.change(input , {target: {value:"myemail@gmail.com"}})
     expect(input.value).toBe("myemail@gmail.com")
}) 
