import React, { Component } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Offer from "./Components/Offer";

export default class Activity extends Component {
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
              name="activity"
              placeholder="Acitvities&#10;Tours and Destination"
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
