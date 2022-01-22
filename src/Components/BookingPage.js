import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import Loader from "./Loader";
import AirAsia from "./images/AirAsiaIndia.png";
import AirIndia from "./images/AirIndiaIcon.jpg";
import GoFirst from "./images/Gofirstlogo.jpg";
import Indigo from "./images/indigoicon.png";
import SpiceJet from "./images/spicejeticon.webp";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import validator from "validator";
import "./css/seatbook.css";

export default class BookingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: "",
      to: "",
      routeId: "",
      recieved: false,
      travelRoutes: [],
      travellerDetails: [],
      showTravellerDetails: {},
      checkage: false,
      checkname: false,
      checkemail: false,
      checkgender: false,
      name: "",
      email: "",
      age: "",
      entered: false,
      activeSeats: '',
      checkBook:false
    };
    this.prices = ["₹7,999", "₹6,599", "₹7,499", "₹8,999", "₹6,999"];
    this.icons = [AirIndia, Indigo, SpiceJet, AirAsia, GoFirst];
    this.name = React.createRef();
    this.email = React.createRef();
    this.age = React.createRef();
    this.male = React.createRef();
    this.female = React.createRef();
  }

  componentDidMount = () => {
    this.runOnMount();
  };

  onClickSeatFunc = (e) => {
    const any = this.state.activeSeats.filter((ele) => ele);

    if (
      (any.length === 1 && this.state.activeSeats[e.target.id]) ||
      any.length === 0
    ) {
      let index = Number(e.target.id);
      let tempArr = this.state.activeSeats;
      tempArr[index] = !tempArr[index];
      this.setState({
        activeSeats: tempArr,
      });
    } else {
      return;
    }
  };

  //   toggleTravellerDetailsFunc=(e)=>{

  //     const tempObj=this.state.showTravellerDetails
  //     const toggle=this.state.showTravellerDetails[e.target.id]

  //     tempObj[e.target.id]=!toggle
  //     this.setState({
  //         showTravellerDetails:{...tempObj}
  //     })

  //   }

  //   addAdultFunc=()=>{
  //     const tempArr=this.state.travellerDetails
  //     const tId=`Adult ${tempArr.length+1}`
  //     const add=(<div>
  //         <label>
  //         <input type="checkbox" id={`Adult ${tempArr.length+1}`} onChange={this.toggleTravellerDetailsFunc}/>
  //         Adult {tempArr.length+1}
  //     </label>
  //     {this.state.showTravellerDetails['Adult 1'] && <div className="form-control">
  //         <label>
  //             Name:
  //             <input type="text" placeholder="Enter your name"/>
  //         </label>
  //         <div>
  //             <label>
  //                 Male:
  //                 <input type="radio" name="gender" />
  //             </label>
  //             <label>
  //                 Female:
  //                 <input type="radio" name="gender" />
  //             </label>
  //             </div>
  //         </div>}
  //     </div>)
  //     tempArr.push(add)
  //     this.setState({
  //         travellerDetails:tempArr
  //     })
  //     console.log(this.state.travellerDetails)
  //   }

  runOnMount = () => {
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
          from: Number(path[2]),
          to: Number(path[3]),
          routeId: Number(path[4]),
          activeSeats:Array(data["results"].find((ele)=>ele.id===Number(path[4])).plane_numberOfSeats).fill(false)
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  onClickFunc = (e) => {
    e.preventDefault();
    const boolBook=!this.state.activeSeats.some((ele)=>ele)

    const boolname =
      !this.state.name ||
      !validator.isAlpha(this.state.name, "en-US", { ignore: " -" });
    const boolemail = !this.state.email || !validator.isEmail(this.state.email);
    const boolage =
      !this.state.age || this.state.age <= 0 || this.state.age >= 150;
    let boolgender;

    if (this.male.current.checked || this.female.current.checked) {
      boolgender = false;
    } else {
      boolgender = true;
    }
    this.setState({
      checkname: boolname,
      checkage: boolage,
      checkemail: boolemail,
      checkgender: boolgender,
      checkBook:boolBook
    });

    if (boolage || boolname || boolemail || boolgender || boolBook) {
      return;
    }
    this.name.current.value = "";
    this.email.current.value = "";
    this.age.current.value = "";
    this.male.current.checked = false;
    this.female.current.checked = false;
    this.setState({activeSeats:Array(this.state.travelRoutes[this.state.routeId].plane_numberOfSeats).fill(false)})
    this.setState({
      entered: true,
    });
  };

  onChangeFunc = (e) => {
    const id = e.target.id;
    this.setState((state) => ({
      checkname: false,
      checkage: false,
      checkemail: false,
      checkgender: false,
      entered: false,
      checkBook:false
    }));
    if (e.target.type === "radio") {
      return;
    }
    let val;

    val = e.target.value;

    if (e.target.id === "name" || e.target.id === "email") {
      val.trim();
    }
    this.setState({ [id]: val });
  };

  render() {
    const route = this.state.travelRoutes.find(
      (ele) => ele.id === this.state.routeId
    );

    return (
      <div>
        <Header />

        {this.state.recieved ? (
          <div className="d-flex flex-column w-75 mx-auto ">
            <div className="d-flex flex-column p-2 m-2 bg-light shadow">
              <div
                className="d-flex flex-row align-items-center"
                style={{ gap: "5px" }}
              >
                <h5>{route.fromAirport_name}</h5>
                <HiOutlineArrowNarrowRight />
                <h5>{route.toAirport_name}</h5>
              </div>
              <div
                className="d-flex flex-row align-items-center"
                style={{ gap: "10px" }}
              >
                <img
                  src={this.icons[route.carrier_id - 1]}
                  alt="carrier"
                  style={{ width: "80px", height: "50px" }}
                  className="img-fluid"
                />
                <span>{route.carrier_name}</span>
                <span>{route.plane_name}</span>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <div className="d-flex flex-column">
                  <span className="d-flex flex-column">
                    <span className="text-muted">From</span>
                    {route.fromAirport_name}, {route.fromAirport_airport}
                  </span>
                  <span className="d-flex flex-column">
                    <span className="text-muted p-1">To</span>
                    {route.toAirport_name}, {route.toAirport_airport}
                  </span>
                </div>
                <div
                  className="d-flex flex-row justify-content-between align-items-center"
                  style={{ gap: "30px" }}
                >
                  <div>
                    <span>Baggage</span>
                    <h6>ADULT</h6>
                  </div>
                  <div>
                    <span>Check-in</span>
                    <h6>15 Kgs (1 piece only)</h6>
                  </div>
                  <div>
                    <span>Cabin</span>
                    <h6>7 Kgs (1 piece only)</h6>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-light shadow p-2 m-2"
              style={{ fontSize: "15px" }}
            >
              <h5>Important Information</h5>
              <span>
                Before you travel, please check these travel restrictions and
                advisories issued by your destination city:
              </span>
              <ul>
                <li>
                  <h6>COVID test/vaccination rules :</h6>
                  <span>
                    All travellers, irrespective of their vaccination status,
                    arriving from the state of Maharashtra, Kerala and Goa must
                    carry a negative RT-PCR report with a sample taken within 72
                    hours before arrival. RT-PCR test timeline starts from the
                    swab collection time. Travellers from all states will have
                    to undergo health screening at the airport. Anyone with
                    COVID-19 symptoms will not be allowed to travel. Following
                    category of travellers are exempted from the above-mentioned
                    requirement:. - Constitutional functionaries and healthcare
                    professionals. - Children below the age of 2 years. -
                    Travellers arriving in emergency situations such as a death
                    in the family, medical treatment might have to take an
                    on-arrival test at the discretion of the local airport
                    authorities.
                  </span>
                </li>
                <li>
                  <h6>Quarantine rules :</h6>
                  <span>
                    All students arriving from Kerala must undergo mandatory 7
                    days of institutional quarantine before they start their
                    studies. No quarantine for other travellers arriving in
                    Karnataka.
                  </span>
                </li>
                <li>
                  <h6>Pre-registration or e-pass rules :</h6>
                  <span>Download and update the Aarogya Setu app.</span>
                </li>
                <li>
                  <span>
                    Since guidelines are dynamic and might change regularly, we
                    strongly recommend that you check the full text of the
                    guidelines issued by the Government before travelling. We
                    accept no liability in this regard.
                  </span>
                </li>
                <li>
                  <span>
                    Remember to web check-in before arriving at the airport;
                    carry a printed or soft copy of the boarding pass.
                  </span>
                </li>
                <li>
                  <span>
                    Please reach at least 2 hours prior to flight departure.
                  </span>
                </li>
                <li>
                  <span
                    style={{ fontWeight: "bold", textDecoration: "underline" }}
                  >
                    The latest DGCA guidelines state that it is compulsory to
                    wear a mask that covers the nose and mouth properly while at
                    the airport and on the flight. Any lapse might result in
                    de-boarding.
                  </span>
                </li>
                <li>
                  <span>
                    Remember to download the baggage tag(s) and affix it on your
                    bag(s).
                  </span>
                </li>
              </ul>
              <h6>Baggage information</h6>
              <ul>
                <li>
                  <span>
                    Carry no more than 1 check-in baggage and 1 hand baggage per
                    passenger. Additional pieces of Baggage will be subject to
                    additional charges per piece in addition to the excess
                    baggage charges.
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <div className="w-100 bg-light m-2 shadow-sm p-2 d-flex flex-row">
                {/* {this.state.travellerDetails.map((ele)=>ele)}
                    <button onClick={this.addAdultFunc}>Add Adult</button> */}

                {/* <SeatBooking numOfSeats={route.plane_numberOfSeats}/> */}
                <div className="parentNumberofSeats">
                  {this.state.activeSeats.map((ele, index) => {
                    return (
                      <button
                        id={index}
                        className={
                          this.state.activeSeats[index]
                            ? "individualbutton booked"
                            : "individualbutton"
                        }
                        key={index + 1}
                        onClick={this.onClickSeatFunc}
                      >
                        {index + 1}
                      </button>
                    );
                  })}
                </div>
                <form
                  className="form-control d-flex flex-column w-25 mx-auto justify-content-center"
                  style={{ gap: "10px" }}
                >
                  {this.state.entered && (
                    <div className="text-center" style={{ color: "green" }}>
                      Flight Booked Successfully
                    </div>
                  )}
                  {this.state.checkBook && (<div className="text-center" style={{color:"red"}}>Please Select a Seat</div>)}

                  <h5>Traveller Details</h5>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    onChange={this.onChangeFunc}
                    ref={this.name}
                    className="form-control"
                  />
                  {this.state.checkname && (
                    <div style={{ color: "red" }} className="text-center">
                      Please enter a valid name
                    </div>
                  )}
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    onChange={this.onChangeFunc}
                    ref={this.email}
                    className="form-control"
                  />
                  {this.state.checkemail && (
                    <div style={{ color: "red" }} className="text-center">
                      Please Enter a valid email
                    </div>
                  )}
                  <div
                    className="form-control d-flex flex-row"
                    style={{ gap: "10px" }}
                  >
                    <label>
                      <input
                        name="gender"
                        type="radio"
                        className="m-1"
                        ref={this.male}
                        onChange={this.onChangeFunc}
                      />
                      Male
                    </label>
                    <label>
                      <input
                        name="gender"
                        type="radio"
                        className="m-1"
                        ref={this.female}
                        onChange={this.onChangeFunc}
                      />
                      Female
                    </label>
                  </div>
                  {this.state.checkgender && (
                    <div style={{ color: "red" }} className="text-center">
                      Please select your gender
                    </div>
                  )}
                  <input
                    id="age"
                    type="number"
                    placeholder="Enter your age"
                    onChange={this.onChangeFunc}
                    ref={this.age}
                    className="form-control"
                  />
                  {this.state.checkage && (
                    <div style={{ color: "red" }} className="text-center">
                      Please Enter a valid age
                    </div>
                  )}

                  <button
                    className="btn btn-primary"
                    onClick={this.onClickFunc}
                  >
                    Continue
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <Loader />
        )}

        <Footer />
      </div>
    );
  }
}
