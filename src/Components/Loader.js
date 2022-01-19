import React, { Component } from 'react'
import "./css/loader.css"

export default class Loader extends Component {
    render() {
        return (
            <div className='text-center'>
                <div className="lds-dual-ring"></div>
            </div>
        )
    }
}
