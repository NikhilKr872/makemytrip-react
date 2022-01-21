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
import { Link } from "react-router-dom";


export default class SearchFlight extends Component {
  constructor(props) {
    super(props);
    this.icons = [AirIndia, Indigo, SpiceJet, AirAsia, GoFirst];
    this.prices = ["₹7,999", "₹6,599", "₹7,499", "₹8,999", "₹6,999"];
    this.state = {
      travelRoutes: [],
      recieved: false,
      from: "",
      to: "",
      details: {},
      priceDetails: {},
      filter:{
        "Air India":true,
        "Indigo":true,
        "Spice Jet":true,
        "AirAsia India":true,
        "Go First":true
      }
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
    const tempPriceObj = this.state.priceDetails;
    tempPriceObj[e.target.id] = false;
    const tempObj = this.state.details;
    tempObj[e.target.id] = !detail;
    this.setState({
      details: { ...tempObj },
      priceDetails: { ...tempPriceObj },
    });
  };

  togglePriceDetails = (e) => {
    const pDetail = this.state.priceDetails[e.target.name];
    const tempPriceObj = this.state.priceDetails;
    tempPriceObj[e.target.name] = !pDetail;
    const tempObj = this.state.details;
    tempObj[e.target.name] = false;
    this.setState({
      details: { ...tempObj },
      priceDetails: { ...tempPriceObj },
    });
  };

  filterByAirline=(e)=>{
    const tempObj=this.state.filter
    const check=this.state.filter[e.target.value]
    tempObj[e.target.value]=!check
    this.setState({filter:{...tempObj}})
    
  
  }

  render() {
    let data = "";
    let count_Carrier=this.state.travelRoutes.reduce((acc,curr)=>{
      if(this.state.from===curr.fromAirport && this.state.to===curr.toAirport){
        if(!acc[curr.carrier_name]){
          acc[curr.carrier_name]=1
        }
        else{
          acc[curr.carrier_name]+=1
        }
        
      }
      return acc;
      
    },{})
    
    
    
    if (this.state.recieved) {
      data = this.state.travelRoutes.map((ele) => {
        if (
          ele.fromAirport === this.state.from &&
          ele.toAirport === this.state.to && this.state.filter[ele.carrier_name]
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
                <div
                  className="d-flex flex-row align-items-center justify-content-center"
                  style={{ gap: "10px" }}
                >
                  <h4>{this.prices[ele.carrier - 1]}</h4>
                  <button
                    className="searchflight-btn"
                    name={ele.id}
                    onClick={this.togglePriceDetails}
                  >
                    {!this.state.priceDetails[ele.id] ? "View" : "Hide"} Prices
                  </button>
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
              {this.state.priceDetails[ele.id] ? (
                <div
                  className="d-flex flex-row justify-content-between p-1 m-1"
                  style={{
                    border: "1px solid lightgrey",
                    backgroundColor: "white",
                  }}
                >
                  <div>
                    <h5>Fares</h5>
                    <div>
                      <h6> Economy Saver</h6>
                      <span>Fare offered by airline.</span>
                    </div>
                  </div>
                  <div>
                    <h5>Cabin Bag</h5>
                    <div>
                      <span>7 Kgs</span>
                    </div>
                  </div>
                  <div>
                    <h5>Check In</h5>
                    <div>
                      <span>25 Kgs</span>
                    </div>
                  </div>
                  <div>
                    <h5>Cancellation</h5>
                    <div>
                      <span>Cancellation Fee starting ₹ 3,500</span>
                    </div>
                  </div>
                  <div>
                    <h5>Date Change</h5>
                    <div>
                      <span>Date Change Fee starting ₹ 3,000</span>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex flex-column">
                      <span>{this.prices[ele.carrier - 1]}</span>
                      <Link to={`/flight/${this.state.from}/${this.state.to}/${ele.id}/booking`}><button className="searchflight-btn">Book Now</button></Link>
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
          <div className="d-flex flex-row w-75 mx-auto" style={{gap:"10px"}}>
            <div className=" d-flex flex-column p-3 shadow-sm rounded carrierfilter" style={{gap:"10px"}}>
              <h5>Filters:-</h5>
              <span>Carrier:-</span>
              <div>
                <label>
                  <input type="checkbox" style={{marginRight:"5px"}} value="Air India" checked={this.state.filter["Air India"]} onChange={this.filterByAirline}/>
                  Air India ({!count_Carrier['Air India']?0:count_Carrier['Air India']})
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox"  style={{marginRight:"5px"}} value="Indigo" checked={this.state.filter["Indigo"]} onChange={this.filterByAirline}/>
                  Indigo ({!count_Carrier['Indigo']?0:count_Carrier['Indigo']})
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" style={{marginRight:"5px"}} value="Spice Jet" checked={this.state.filter["Spice Jet"]} onChange={this.filterByAirline}/>
                  Spice Jet ({!count_Carrier['Spice Jet']?0:count_Carrier['Spice Jet']})
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox"  style={{marginRight:"5px"}} value="AirAsia India" checked={this.state.filter["AirAsia India"]} onChange={this.filterByAirline}/>
                  AirAsia India ({!count_Carrier['AirAsia India']?0:count_Carrier['AirAsia India']})
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" style={{marginRight:"5px"}} value="Go First" checked={this.state.filter["Go First"]} onChange={this.filterByAirline}/>
                  Go First ({!count_Carrier['Go First']?0:count_Carrier['Go First']})
                </label>
              </div>
            </div>
          <div
            className="d-flex flex-column bg-light allflights "
            style={{ gap: "20px" }}
          >
            
            {data}
            {data.every((ele) => ele === undefined) ? (
              <div className="text-center">
                Sorry, No flights for this route
              </div>
            ) : undefined}
          </div>
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
