import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Offer from './Offer'


export default class Bus extends Component {
    render() {
        return (
            <div className='d-flex flex-column' style={{gap:"20px"}}>
            <Header />
            <div className='w-75 mx-auto d-flex flex-column bg-light rounded p-3 shadow-sm' style={{ gap: "10px" }}>
                
                <div className='d-flex flex-row justify-content-start align-items-center' style={{ gap: "10px" }}>
                    <textarea name="From" placeholder='From&#10;NEW DELHI' className='form-control' />
                    <textarea name="To" placeholder='To&#10;KANPUR' className='form-control' />
                    <label>
                        TRAVEL DATE
                        <input type="date" name="traveldate" className='form-control' />

                    </label>

                    
                </div>

                <div className='text-center'>
                    <button className='btn btn-primary'>
                        Submit
                    </button>
                </div>

            </div>
            <Offer />
            <Footer />
            </div>
        )
    }
}
