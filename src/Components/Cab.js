import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Offer from "./Offer";

export default class Cab extends Component {
  

  
  render() {
    return (
      <div className="d-flex flex-column" style={{ gap: "20px" }}>
        <Header />
        <div
          className="w-75 mx-auto d-flex flex-column bg-light rounded p-3 shadow-sm"
          style={{ gap: "10px" }}
        >
          
         
            <div
              className="d-flex flex-row justify-content-start align-items-center"
              style={{ gap: "10px" }}
            >
              <textarea
                name="From"
                placeholder="From&#10;Mumbai"
                className="form-control"
              />
              <textarea
                name="To"
                placeholder="To&#10;Goa"
                className="form-control"
              />
              <label>
                DEPARTURE
                <input type="date" name="departure" className="form-control" />
              </label>
              <label>
                RETURN
                <input type="date" name="departure" className="form-control" />
              </label>
              <label>
                PICKUP TIME
                <select className="form-control">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </label>
            </div>
          

          <div className="text-center">
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
        <Offer />
        <Footer />
      </div>
    );
  }
}
