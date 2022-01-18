import React, { Component } from 'react'
import { FaPlaneDeparture, FaHotel } from 'react-icons/fa'
import { MdOutlineHomeWork, MdTrain, MdDirectionsBus, MdOutlineHiking } from 'react-icons/md'
import { BiTaxi } from 'react-icons/bi'
import { GiAirBalloon } from 'react-icons/gi'
import { FaPassport } from 'react-icons/fa'
import { GiAirplane } from 'react-icons/gi'
import mmtlogo from "./images/mmtlogo.jpg"
import myicon from "./images/myicon.png"
import indiaicon from "./images/India-icon.png"
import usaicon from "./images/usaicon.ico"
import uaeicon from "./images/uaeicon.png"
import "./css/header.css"
import { Link } from "react-router-dom"


export default class Header extends Component {



    render() {
        return (
            <div className='sticky-top header-main shadow-sm '>
                <div className='d-flex flex-row justify-content-between align-items-center w-75 mx-auto flex-wrap'>
                    <img src={mmtlogo} className='mmt-icon img-fluid h-100' alt='makemytrip.com' />
                    <div className='d-flex flex-row justify-content-between icons flex-wrap'>
                        <Link to="/flight" className='d-flex flex-column align-items-center' style={{ color: "black", textDecoration: "none" }} >
                            <FaPlaneDeparture size={30} />
                            <span id='flight' onClick={this.props.onClick} className='pointer'>flights</span>
                        </Link>
                        <Link to="/hotel" className='d-flex flex-column align-items-center' style={{ color: "black", textDecoration: "none" }}>
                            <FaHotel size={30} />
                            <span>Hotels</span>
                        </Link>
                        <Link to="/homestay" className='d-flex flex-column align-items-center' style={{ color: "black", textDecoration: "none" }}>
                            <MdOutlineHomeWork size={30} />
                            <span>HomeStays</span>
                        </Link>
                        <Link to="/holiday" className='d-flex flex-column align-items-center' style={{ color: "black", textDecoration: "none" }}>
                            <GiAirBalloon size={30} />
                            <span>Holidays</span>
                        </Link>
                        <Link to="/train" className='d-flex flex-column align-items-center' style={{ color: "black", textDecoration: "none" }}>
                            <MdTrain size={30} />
                            <span>Trains</span>
                        </Link>
                        <Link to="/bus" className='d-flex flex-column align-items-center' style={{ color: "black", textDecoration: "none" }}>
                            <MdDirectionsBus size={30} />
                            <span>Buses</span>
                        </Link>
                        <Link to="/cab" className='d-flex flex-column align-items-center' style={{ color: "black", textDecoration: "none" }}>
                            <BiTaxi size={30} />
                            <span>Cab</span>
                        </Link>
                        <Link to="/visa" className='d-flex flex-column align-items-center' style={{ color: "black", textDecoration: "none" }}>
                            <FaPassport size={30} />
                            <span>Visa</span>
                        </Link>
                        <Link to="/charter" className='d-flex flex-column align-items-center' style={{ color: "black", textDecoration: "none" }}>
                            <GiAirplane size={30} />
                            <span>Charter</span>
                        </Link>
                        <Link to="/activity" className='d-flex flex-column align-items-center' style={{ color: "black", textDecoration: "none" }}>
                            <MdOutlineHiking size={30} />
                            <span>Activities</span>
                        </Link>
                    </div>
                    <div className='d-flex flex-row align-items-center header3'>
                        <img src={myicon} alt='my icon' className='img-fluid myicon' />

                        <img src={indiaicon} alt="India" className='myicon' />


                        <span className='lang d-flex flex-row align-items-center justify-content-center'>Eng</span>

                    </div>
                </div>
            </div>
        )
    }
}

