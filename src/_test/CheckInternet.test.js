import React from 'react';
import {  render } from "@testing-library/react"
import CheckInternet from '../components/Network/CheckInternet';


test ("checkinternet component test " , ()=>{

    const {getByText} = render(<CheckInternet children={<div>hi</div>}/>)
    expect(getByText("hi")).toBeInTheDocument()
    
})   
