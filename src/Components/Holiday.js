import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Offer from "./Offer";

export default class Holiday extends Component {
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
              name="from"
              placeholder="FROM CITY&#10;NEW DELHI"
              className="form-control"
            />
            <textarea
              name="to"
              placeholder="TO CITY/COUNTRY&#10;SEARCH DESTINATION"
              className="form-control"
            />
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
