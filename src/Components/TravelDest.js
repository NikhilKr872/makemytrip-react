import React, { Component } from "react";
import tDest1 from "./images/tDest1.jpeg";
import tDest2 from "./images/tDest2.jpeg";
import tDest4 from "./images/tDest4.jpeg";
import tDest5 from "./images/tDest5.jpeg";

export default class TravelDest extends Component {
  render() {
    return (<div className="d-flex flex-column p-2">
        <div className="w-75 mx-auto bg-light">
            <h2>Travel Destinations for you</h2>
        </div>
      <div className="d-flex flex-row justify-content-center mx-auto w-75 flex-wrap shadow bg-light p-3 " style={{gap:"30px"}}>
        <div className="d-flex flex-column shadow" style={{width:"300px"}}>
          <figure className="w-100 h-50 text-center">
            <img
              src={tDest1}
              alt="Travel Destination 1"
              style={{height:"200px",width:"300px",gap:"10px"}}
            />
            <figcaption>Lorem Ipsum</figcaption>
          </figure>
          <div className="p-1 text-center">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              feugiat orci eget lacinia sollicitudin. Aliquam commodo, lacus ut
              tristique mattis, mi nunc posuere nunc, et ultricies risus mauris
              at dui.
            </p>
          </div>
        </div>
        <div className="d-flex flex-column shadow" style={{width:"300px",gap:"10px"}}>
          <figure className="w-100 h-50 text-center">
            <img
              src={tDest2}
              alt="Travel Destination 2"
              style={{height:"200px",width:"300px"}}            />
            <figcaption>Lorem Ipsum</figcaption>
          </figure>
          <div className="p-1 text-center">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              feugiat orci eget lacinia sollicitudin. Aliquam commodo, lacus ut
              tristique mattis, mi nunc posuere nunc, et ultricies risus mauris
              at dui.
            </p>
          </div>
        </div>
       
        <div className="d-flex flex-column shadow" style={{width:"300px",gap:"10px"}}>
          <figure className="w-100 h-50 text-center">
            <img
              src={tDest4}
              alt="Travel Destination 4"
              style={{height:"200px",width:"300px"}}            />
            <figcaption>Lorem Ipsum</figcaption>
          </figure>
          <div className="p-1 text-center">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              feugiat orci eget lacinia sollicitudin. Aliquam commodo, lacus ut
              tristique mattis, mi nunc posuere nunc, et ultricies risus mauris
              at dui.
            </p>
          </div>
        </div>
        <div className="d-flex flex-column shadow" style={{width:"300px",gap:"10px"}}>
          <figure className="w-100 h-50 text-center">
            <img
              src={tDest5}
              alt="Travel Destination 5"
              style={{height:"200px",width:"300px"}}            />
            <figcaption>Lorem Ipsum</figcaption>
          </figure>
          <div className="p-1 text-center">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              feugiat orci eget lacinia sollicitudin. Aliquam commodo, lacus ut
              tristique mattis, mi nunc posuere nunc, et ultricies risus mauris
              at dui.
            </p>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
