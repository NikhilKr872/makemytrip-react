import React, { Component } from "react";
import axios from "axios";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import { CgArrowsExchange } from "react-icons/cg";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      from: 1,
      to: 2,
      search: false,
      Airports: [],
      recieved: false,
    };
    this.fromRef = React.createRef();
    this.toRef = React.createRef();
  }

  componentDidMount = () => {
    document.title = "MakeMyTrip | Flights";

    this.getData();
  };

  getData = () => {
    axios
      .post(
        "https://api.robostack.ai/external/api/755ad6ce-dba7-404d-8268-cf2eefe93914/airports",
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
        this.setState({
          Airports: data["results"],
          recieved: true,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  onChangeFunc = (e) => {
    const data = this.state.Airports.find((ele) => ele.name === e.target.value);
    if (!data) {
      return;
    }
    this.setState({
      [e.target.name]: data.id,
    });
  };

  searchToggle = () => {
    const toggle = this.state.search;
    this.setState({ search: !toggle });
  };

  onClickExchangeFunc = () => {
    let tempFrom = this.fromRef.current.value;
    let tempTo = this.toRef.current.value;
    this.fromRef.current.value = null;
    this.toRef.current.value = null;
    this.toRef.current.value = tempFrom;
    this.fromRef.current.value = tempTo;
    tempFrom = this.state.from;
    tempTo = this.state.to;
    this.setState({
      from: tempTo,
      to: tempFrom,
    });
  };

  render() {
    const date = new Date();
    const today =
      String(date.getFullYear()) +
      "-" +
      "0" +
      String(date.getMonth() + 1) +
      "-" +
      String(date.getDate());
    return this.state.recieved ? (
      <div style={{ gap: "10px" }} className="d-flex flex-column">
        <div
          className="w-75 mx-auto d-flex flex-column bg-light rounded p-3 shadow-sm"
          style={{ gap: "10px" }}
        >
          {/* <div className='d-flex flex-row ' style={{ gap: "10px" }}>

                    <label>
                        <input type="checkbox" className='m-1' />
                        MULTI CITY
                    </label>
                </div> */}
          <div
            className="d-flex flex-row justify-content-center align-items-center flex-wrap"
            style={{ gap: "10px" }}
          >
            <label className="form-control" style={{ width: "200px" }}>
              From
              <input
                list="ide"
                className="form-control"
                defaultValue="New Delhi"
                name="from"
                onChange={this.onChangeFunc}
                ref={this.fromRef}
              />
              <datalist id="from">
                {this.state.Airports.map((ele) => {
                  return <option key={ele.id} value={ele.name} />;
                })}
              </datalist>
            </label>
            <CgArrowsExchange
              size={30}
              onClick={this.onClickExchangeFunc}
              className="pointer"
            />
            <label className="form-control" style={{ width: "200px" }}>
              To
              <input
                list="ide"
                className="form-control"
                defaultValue="Mumbai"
                name="to"
                onChange={this.onChangeFunc}
                ref={this.toRef}
              />
              <datalist id="ide">
                {this.state.Airports.map((ele) => {
                  return <option key={ele.id} value={ele.name} />;
                })}
              </datalist>
            </label>
            <label className="form-control" style={{ width: "200px" }}>
              DEPARTURE
              <input
                type="date"
                name="departure"
                className="form-control"
                min={today}
                defaultValue={today}
              />
            </label>
            <label className="form-control" style={{ width: "200px" }}>
              RETURN
              <input type="date" name="departure" className="form-control" />
            </label>
            <label className="form-control" style={{ width: "200px" }}>
              CLASS
              <select className="form-control">
                <option value="Economy">Economy</option>
                <option value="Economy Premium">Economy Premium</option>
                <option value="Business">Business</option>
              </select>
            </label>
          </div>
          {/* <div className='d-flex flex-row justify-content-start align-items-center' style={{ gap: "10px" }}>
                    <span>Fare type:-</span>
                    <label>
                        <input type="radio" name="fare" className='m-1' />
                        Regular Fares
                    </label>
                    <label>
                        <input type="radio" name="fare" className='m-1' />
                        Armed Forces Fares
                    </label>
                    <label>
                        <input type="radio" name="fare" className='m-1' />
                        Student Fares
                    </label>
                    <label>
                        <input type="radio" name="fare" className='m-1' />
                        Senior Citizen Fares
                    </label>
                    <label>
                        <input type="radio" name="fare" className='m-1' />
                        Double Seat Fares
                    </label>
                </div> */}

          <Link
            className="text-center"
            to={`/flight/${this.state.from}/${this.state.to}`}
          >
            <button className="btn btn-primary">Submit</button>
          </Link>
        </div>
      </div>
    ) : (
      <Loader />
    );
  }
}
