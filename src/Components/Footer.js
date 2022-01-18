import React, { Component } from 'react'
import { MdCopyright } from "react-icons/md"

import { RiTwitterLine, RiFacebookLine } from "react-icons/ri"

export default class Footer extends Component {
    render() {
        return (

            <div className='d-flex flex-column'>
                <div className='bg-light'>
                    <div className='w-75 mx-auto'>
                        <div className='d-flex flex-row justify-content-around bg-light p-3' style={{ gap: "20px" }}>
                            <div style={{ fontSize: "0.8em" }}>
                                <h5>Why MakeMyTrip?</h5>
                                <p>Established in 2000, MakeMyTrip has since positioned itself as one of the leading companies, providing great offers, competitive airfares, exclusive discounts, and a seamless online booking experience to many of its customers. The experience of booking your flight tickets, hotel stay, and holiday package through our desktop site or mobile app can be done with complete ease and no hassles at all. We also deliver amazing offers, such as Instant Discounts, Fare Calendar, MyRewardsProgram, MyWallet, and many more while updating them from time to time to better suit our customers’ evolving needs and demands.</p>
                            </div>
                            <div style={{ fontSize: "0.8em" }}>
                                <h5>Booking Flights with MakeMyTrip</h5>
                                <p>At MakeMyTrip, you can find the best of deals and cheap air tickets to any place you want by booking your tickets on our website or app. Being India’s leading website for hotel, flight, and holiday bookings, MakeMyTrip helps you book flight tickets that are affordable and customized to your convenience. With customer satisfaction being our ultimate goal, we also have a 24/7 dedicated helpline to cater to our customer’s queries and concerns. Serving over 5 million happy customers, we at MakeMyTrip are glad to fulfill the dreams of folks who need a quick and easy means to find air tickets. You can get a hold of the cheapest flight of your choice today while also enjoying the other available options for your travel needs with us.</p>
                            </div>
                            <div style={{ fontSize: "0.8em" }}>
                                <h5>Domestic Flights with MakeMyTrip</h5>
                                <p>MakeMyTrip is India's leading player for flight bookings, and have a dominant position in the domestic flights sector. With the cheapest fare guarantee, experience great value at the lowest price. Instant notifications ensure current flight status, instant fare drops, amazing discounts, instant refunds and rebook options, price comparisons and many more interesting features.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-dark'>
                    <div className='w-75 mx-auto'>
                        <div className='d-flex flex-row justify-content-between p-3'>
                            <div className='text-light'>
                                <RiTwitterLine size={30} />
                                <RiFacebookLine size={30} />
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                <span className='font-weight-bolder text-light'>
                                    <MdCopyright size={20} />
                                    2021 MAKEMYTRIP PVT. LTD.
                                </span>
                                <span className='font-weight-bolder text-light'>
                                    Country India USA UAE
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
