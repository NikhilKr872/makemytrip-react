import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Offer from "./Offer";

export default class Train extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookTicket: true,
      checkPnr: false,
      liveStatus: false,
    };
  }

  toggleCheck = (e) => {
    const tempObj = {
      bookTicket: false,
      checkPnr: false,
      liveStatus: false,
    };
    tempObj[e.target.id] = true;
    this.setState({ ...tempObj });
  };

  render() {
    return (
      <div className="d-flex flex-column" style={{ gap: "20px" }}>
        <Header />
        <div
          className="w-75 mx-auto d-flex flex-column bg-light rounded p-3 shadow-sm"
          style={{ gap: "10px" }}
        >
          <div className="d-flex flex-row " style={{ gap: "10px" }}>
            <label>
              <input
                type="radio"
                id="bookTicket"
                name="typeOfTravel"
                className="m-1"
                checked={this.state.bookTicket}
                onChange={this.toggleCheck}
              />
              BOOKTRAINTICKETS
            </label>
            <label>
              <input
                type="radio"
                id="checkPnr"
                name="typeOfTravel"
                className="m-1"
                checked={this.state.checkPnr}
                onChange={this.toggleCheck}
              />
              CHECK PNR STATUS
            </label>
            <label>
              <input
                type="radio"
                id="liveStatus"
                name="typeOfTravel"
                className="m-1"
                checked={this.state.liveStatus}
                onChange={this.toggleCheck}
              />
              LIVE TRAIN STATUS
            </label>
          </div>
          {this.state.bookTicket && (
            <>
              <div
                className="d-flex flex-row justify-content-start align-items-center"
                style={{ gap: "10px" }}
              >
                <textarea
                  name="From"
                  placeholder="From&#10;NEW DELHI"
                  className="form-control"
                />
                <textarea
                  name="To"
                  placeholder="To&#10;KANPUR"
                  className="form-control"
                />
                <label>
                  TRAVEL DATE
                  <input
                    type="date"
                    name="traveldate"
                    className="form-control"
                  />
                </label>

                <label>
                  CLASS
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
            </>
          )}
          {this.state.checkPnr && (
            <>
              <div className="d-flex flex-column" style={{ gap: "10px" }}>
                <textarea
                  placeholder="pnr number&#10;ENTER 10 DIGIT PNR NUMBER"
                  className="form-control"
                />
              </div>
              <div className="text-center">
                <button className="btn btn-primary">Check PNR</button>
              </div>
            </>
          )}
          {this.state.liveStatus && (
            <>
              <div className="d-flex flex-column" style={{ gap: "10px" }}>
                <textarea
                  className="form-control"
                  placeholder="ENTER TRAIN NUMBER"
                />
              </div>
              <div className="text-center">
                <button className="btn btn-primary">Check Status</button>
              </div>
            </>
          )}
        </div>
        <Offer />
        <Footer />
      </div>
    );
  }
}
