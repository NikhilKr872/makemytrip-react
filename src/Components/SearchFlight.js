import React, { Component } from "react";
import AirAsia from "./images/AirAsiaIndia.png";
import AirIndia from "./images/AirIndiaIcon.jpg";
import GoFirst from "./images/Gofirstlogo.jpg";
import Indigo from "./images/indigoicon.png";
import SpiceJet from "./images/spicejeticon.webp";
import axios from "axios";
import Loader from "./Loader";
import "./css/searchFlight.css";
import Header from "./Header";
import Footer from "./Footer";
import Offer from "./Offer";

export default class SearchFlight extends Component {
  constructor(props) {
    super(props);
    this.icons = [AirIndia, Indigo, SpiceJet, AirAsia, GoFirst];
    this.state = {
      travelRoutes: [],
      recieved: false,
      from: "",
      to: "",
      details: {},
    };
  }

  componentDidMount = () => {
    document.title = "MakeMyTrip | Flight Search";
    this.getData();
  };

  getData = () => {
    axios
      .post(
        "https://api.robostack.ai/external/api/755ad6ce-dba7-404d-8268-cf2eefe93914/flights",
        {
          name: "Nikhil",
          email: "nikhil.kumar.18@mountblue.tech",
        },
        {
          headers: {
            "x-api-key": "7507bdce-65bc-411c-888b-8454988e171b",
            "x-api-secret": "a79d656d-9c39-4f67-accf-b78c2acbd4b4",
          },
        }
      )
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        let path = window.location.pathname.split("/");
        this.setState({
          travelRoutes: data["results"],
          recieved: true,
          from: path[2],
          to: path[3],
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  toggleDetails = (e) => {
    const detail = this.state.details[e.target.id];
    const tempObj = this.state.details;
    tempObj[e.target.id] = !detail;
    this.setState({ details: { ...tempObj } });
  };

  render() {
    let data = "";
    if (this.state.recieved) {
      data = this.state.travelRoutes.map((ele) => {
        if (
          ele.fromAirport === this.state.from &&
          ele.toAirport === this.state.to
        ) {
          return (
            <div
              className="d-flex flex-column shadow"
              style={{ gap: "20px", borderRadius: "5px" }}
              key={ele.id}
            >
              <div
                className="d-flex flex-row justify-content-between align-items-center p-3  flex-wrap"
                key={ele.id}
              >
                <div style={{ width: "80px", height: "50px" }}>
                  <img
                    src={this.icons[ele.carrier - 1]}
                    className="img-fluid"
                    alt="Carrier"
                  />
                </div>
                <div
                  className="d-flex flex-row justify-content-between align-items-center"
                  style={{ gap: "30px" }}
                >
                  <div>
                    <div className="text-muted">From</div>
                    <span>{ele.fromAirport_name}</span>
                  </div>
                  <div>
                    <div className="text-muted">To</div>
                    <span>{ele.toAirport_name}</span>
                  </div>
                </div>
                <div>
                  <button className="searchflight-btn">View Details</button>
                </div>
              </div>
              <div
                className="w-75 text-dark mx-auto text-center offer-search-flight"
                style={{ fontSize: "13px" }}
              >
                Use code MMTSUPER and get FLAT Rs. 260 instant discount on this
                flight
              </div>
              <div
                className="text-primary p-1"
                style={{ fontSize: "15px", textAlign: "right" }}
              >
                <span
                  className="pointer"
                  id={ele.id}
                  onClick={this.toggleDetails}
                >
                  {this.state.details[ele.id] ? "Hide" : "View"} Flight Details
                </span>
              </div>
              {this.state.details[ele.id] ? (
                <div
                  className="d-flex flex-column p-3 m-2"
                  style={{
                    border: "1px solid lightgrey",
                    backgroundColor: "white",
                  }}
                >
                  <div>
                    <h6>
                      {ele.fromAirport_name + "  "}
                      <span>to</span>
                      {"  " + ele.toAirport_name}
                    </h6>
                  </div>
                  <figure
                    className="d-flex flex-row align-items-center"
                    style={{ gap: "10px" }}
                  >
                    <img
                      src={this.icons[ele.carrier - 1]}
                      alt="Flight Details"
                      style={{ width: "80px", height: "50px" }}
                    />
                    <figcaption>
                      {ele.carrier_name}
                      <span className="text-muted">{" " + ele.plane_name}</span>
                    </figcaption>
                  </figure>
                  <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex flex-row" style={{ gap: "10px" }}>
                      <div className="d-flex flex-column align-items-center">
                        <span className="text-muted">From</span>
                        <span>{ele.fromAirport_name}</span>
                        <span>{ele.fromAirport_airport}</span>
                      </div>
                      <div className="d-flex flex-column align-items-center">
                        <span className="text-muted">To</span>
                        <span>{ele.toAirport_name}</span>
                        <span>{ele.toAirport_airport}</span>
                      </div>
                    </div>
                    <div
                      className="d-flex flex-row flex-wrap"
                      style={{ gap: "20px" }}
                    >
                      <div className="text-center">
                        <h5>BAGGAGE:</h5>
                        <span>ADULT</span>
                      </div>
                      <div className="text-center">
                        <h5>CHECK IN</h5>
                        <span>15 Kgs (1 piece only)</span>
                      </div>
                      <div className="text-center">
                        <h5>CABIN</h5>
                        <span>7 Kgs (1 piece only)</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : undefined}
            </div>
          );
        }
        return undefined;
      });
    }
    return (
      <>
        <Header />
        {this.state.recieved ? (
          <div
            className="d-flex flex-column w-75 mx-auto bg-light allflights"
            style={{ gap: "20px" }}
          >
            {data}
            {data.every((ele) => ele === undefined) ? (
              <div className="text-center">
                Sorry, No flights for this route
              </div>
            ) : undefined}
          </div>
        ) : (
          <Loader />
        )}
        <Offer />
        <Footer />
      </>
    );
  }
}
