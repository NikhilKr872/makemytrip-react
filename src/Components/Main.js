import React, { Component } from 'react'

export default class Main extends Component {
    render() {
        return (
            <div className='w-75 mx-auto d-flex flex-column bg-light rounded p-3 shadow-sm' style={{ gap: "10px" }}>
                <div className='d-flex flex-row ' style={{ gap: "10px" }}>
                   
                    <label>
                        <input type="checkbox" className='m-1'/>
                        MULTI CITY
                    </label>
                </div>
                <div className='d-flex flex-row justify-content-start align-items-center' style={{ gap: "10px" }}>
                    <textarea name="From" placeholder='From&#10;Mumbai' className='form-control'/>
                    <textarea name="To" placeholder='To&#10;Bengaluru' className='form-control'/>
                    <label>
                    DEPARTURE
                        <input type="date" name="departure" className='form-control'/>
                       
                    </label>
                    <label>
                    RETURN
                        <input type="date" name="departure" className='form-control'/>
                        
                    </label>
                    <label>
                        CLASS
                        <select className='form-control'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        
                    </label>
                </div>
                <div className='d-flex flex-row justify-content-start align-items-center' style={{gap:"10px"}}>
                    <span>Fare type:-</span>
                    <label>
                        <input type="radio" name="fare" className='m-1'/>
                        Regular Fares
                    </label>
                    <label>
                        <input type="radio" name="fare" className='m-1'/>
                        Armed Forces Fares
                    </label>
                    <label>
                        <input type="radio" name="fare" className='m-1'/>
                        Student Fares
                    </label>
                    <label>
                        <input type="radio" name="fare" className='m-1'/>
                        Senior Citizen Fares
                    </label>
                    <label>
                        <input type="radio" name="fare" className='m-1'/>
                        Double Seat Fares
                    </label>
                </div>
                <div className='text-center'>
                    <button className='btn btn-primary'>
                        Submit
                    </button>
                </div>
                
            </div>
        )
    }
}
