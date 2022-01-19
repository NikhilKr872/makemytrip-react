import React, { Component } from 'react'
import mmtqcode from './images/mmtqrcode.webp'
import appstore from './images/appstore.webp'
import googlestore from './images/googlestore.webp'


export default class Offer extends Component {
    render() {
        return (
            <div className='d-flex flex-column w-75 mx-auto bg-light rounded p-4 shadow-sm flex-wrap'>
                <div>
                    <h1>Download App Now !</h1>
                    <h5>Get India's #1 travel super app, join 100 Million+ happy travellers!</h5>
                </div>
                <div className='d-flex flex-row justify-content-between flex-wrap'>
                    <div>
                        <p>Use code WELCOMEMMT and get upto Rs 1200 off on your first domestic flight booking</p>
                        <div className='d-flex flex-row flex-wrap' style={{gap:"10px",height:"40px"}}>
                            <input type="text" className='form-control' placeholder='Enter Mobile number'/>
                            <button className='btn btn-secondary p-0' style={{width:"180px"}}>GET APP LINK</button>
                        </div>
                    </div>
                    <div className='d-flex flex-column' style={{gap:"10px"}}>
                        <div>
                            <span>MORE WAYS TO GET THE APP</span>

                        </div>
                        <div className='d-flex flex-row' style={{gap:"5px"}}>
                            <div className='d-flex flex-column' style={{gap:"5px"}}>
                                <img src={appstore} alt="Apple Store Link"/>
                                <img src={googlestore} alt="Google Play Store Link"/>
                            </div>
                            <img src={mmtqcode} alt="QR Code" className='img-fluid' style={{height:"80px",width:"80px"}}/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
