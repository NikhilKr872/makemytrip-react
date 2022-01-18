import React, { Component } from 'react'
import w1 from "./images/w1.webp"
import Wonders from './Wonders'
import w2 from "./images/w2.jpg"
import w3 from "./images/w3.jpg"
import w4 from "./images/w4.jpg"
import w5 from "./images/w5.webp"

export default class Slides extends Component {
    render() {
        return (
        <div className='w-75 mx-auto d-flex flex-row overflow-auto bg-light shadow-sm p-3'>
           
            <Wonders src={w1} text="Shimla's Best Kept Secret"/>
            <Wonders src={w2} text="Tamil Nadu's Charming Hill Town"/>
            <Wonders src={w3} text="Pictresque Gateway To Himalayas"/>
            <Wonders src={w4} text="Quaint Little Hill Station in Gujarat" />
            <Wonders src={w5} text="Hidden Gem along Maharastra's Coast"/>
       
        </div>
        )
    }
}
