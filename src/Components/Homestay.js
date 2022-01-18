import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Offer from './Offer'

export default class Homestay extends Component {
    render() {
        return (
            <div className='d-flex flex-column' style={{gap:"20px"}}>
            <Header />
            <div className='w-75 mx-auto d-flex flex-column bg-light rounded p-3 shadow-sm' style={{ gap: "10px" }}>
                
                <div className='d-flex flex-row justify-content-start align-items-center' style={{ gap: "10px" }}>
                    <textarea name="hotel" placeholder='CITY/HOTEL/AREA/BUILDING&#10;GOA' className='form-control'/>
                    <label>
                    CHECK IN
                        <input type="date" name="departure" className='form-control'/>
                        
                    </label>
                    <label>
                    CHECK OUT
                        <input type="date" name="departure" className='form-control'/>
                       
                    </label>
                    <label>
                        Guest
                        <select className='form-control'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>
                    <label>
                    TRAVELLING
                        <select className='form-control'>
                            
                            <option value="Work">Work</option>
                            <option value="Leisure">Leisure</option>
                        </select>
                        
                    </label>
                </div>
                <div className='d-flex flex-row justify-content-start align-items-center' style={{ gap: "10px" }}>
                    <span>Choose Filter:-</span>
                    <label>
                        <input type="checkbox" name="fare" className='m-1' />
                        Kitchen
                    </label>
                    <label>
                        <input type="checkbox" name="fare" className='m-1' />
                        Pets Allowed
                    </label>
                    <label>
                        <input type="checkbox" name="fare" className='m-1' />
                        Entire Properties
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
