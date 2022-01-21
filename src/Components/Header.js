import React, { Component } from "react";
import { FaPlaneDeparture, FaHotel } from "react-icons/fa";
import {
  MdOutlineHomeWork,
  MdTrain,
  MdDirectionsBus,
  MdOutlineHiking,
} from "react-icons/md";
import { BiTaxi } from "react-icons/bi";
import { GiAirBalloon } from "react-icons/gi";
import { FaPassport } from "react-icons/fa";
import { GiAirplane } from "react-icons/gi";
import mmtlogo from "./images/mmtlogo.jpg";
import myicon from "./images/myicon.png";
import "./css/header.css";
import { Link } from "react-router-dom";
import ReactModal from "react-modal/lib/components/Modal";
import Signup from "./Signup";
import SignIn from "./SignIn";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {},
      toggleSignUp: false,
      toggleLogin: false,
      LoggedIn: false,
      userData: "",
    };
    this.style = {
      content: {
        top: "55%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
      },
    };
    this.loginStyle = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
      },
    };
  }

  componentDidMount = () => {
    this.isSelected();
    if (!window.localStorage["makemytrip"]) {
      return;
    }
    this.setState({
      userData: JSON.parse(window.localStorage["makemytrip"])[0],
      LoggedIn: true,
    });
  };

  isSelected = () => {
    const path = window.location.pathname.split("/");
    if (!(path.length === 2)) {
      return;
    } else {
      const curr = path[1];
      this.setState({
        selected: { [curr]: true },
      });
    }
  };

  toggleLoginFunc = () => {
    const toggle = this.state.toggleLogin;
    this.setState({ toggleLogin: !toggle });
  };

  showSignupFunc = () => {
    this.setState({
      toggleSignUp: true,
      toggleLogin: false,
    });
  };

  successfulSignUp = () => {
    this.setState({
      toggleSignUp: false,
      toggleLogin: true,
    });
  };

  closeLogin = () => {
    this.setState({ toggleLogin: false, LoggedIn: true });
  };

  saveUserData = (data) => {
    let tempData = window.localStorage["makemytrip"];
    if (!tempData) {
      tempData = [];
    } else {
      tempData = JSON.parse(tempData);
    }

    tempData.push(data);
    window.localStorage["makemytrip"] = JSON.stringify(tempData);
  };

  clickOnLoginBtn = (data) => {
    if (!window.localStorage["makemytrip"]) {
      return [false, "Account not found"];
    }
    const find = JSON.parse(window.localStorage["makemytrip"]).some(
      (ele) => ele.email === data.email && ele.pass === data.pass
    );
    if (find) {
      this.setState({
        userData: JSON.parse(window.localStorage["makemytrip"]).find(
          (ele) => ele.email === data.email && ele.pass === data.pass
        ),
      });

      return [true, ""];
    } else {
      return [false, "Account not found"];
    }
  };

  render() {
    console.log(this.state.userData);
    return (
      <div className="sticky-top header-main shadow-sm">
        <div className="header-sec">
          <img src={mmtlogo} className="mmt-icon h-100" alt="makemytrip.com" />
          <div className="navbar">
            <Link
              to="/flight"
              className={
                this.state.selected["flight"]
                  ? "d-flex flex-column align-items-center"
                  : "d-flex flex-column align-items-center color-black"
              }
              style={{ textDecoration: "none" }}
            >
              <FaPlaneDeparture size={30} name="1" />
              <span>flights</span>
            </Link>
            <Link
              to="/hotel"
              className={
                this.state.selected["hotel"]
                  ? "d-flex flex-column align-items-center"
                  : "d-flex flex-column align-items-center color-black"
              }
              style={{ textDecoration: "none" }}
            >
              <FaHotel size={30} />
              <span>Hotels</span>
            </Link>
            <Link
              to="/homestay"
              className={
                this.state.selected["homestay"]
                  ? "d-flex flex-column align-items-center"
                  : "d-flex flex-column align-items-center color-black"
              }
              style={{ textDecoration: "none" }}
            >
              <MdOutlineHomeWork size={30} />
              <span>HomeStays</span>
            </Link>
            <Link
              to="/holiday"
              className={
                this.state.selected["holiday"]
                  ? "d-flex flex-column align-items-center"
                  : "d-flex flex-column align-items-center color-black"
              }
              style={{ textDecoration: "none" }}
            >
              <GiAirBalloon size={30} />
              <span>Holidays</span>
            </Link>
            <Link
              to="/train"
              className={
                this.state.selected["train"]
                  ? "d-flex flex-column align-items-center"
                  : "d-flex flex-column align-items-center color-black"
              }
              style={{ textDecoration: "none" }}
            >
              <MdTrain size={30} />
              <span>Trains</span>
            </Link>
            <Link
              to="/bus"
              className={
                this.state.selected["bus"]
                  ? "d-flex flex-column align-items-center"
                  : "d-flex flex-column align-items-center color-black"
              }
              style={{ textDecoration: "none" }}
            >
              <MdDirectionsBus size={30} />
              <span>Buses</span>
            </Link>
            <Link
              to="/cab"
              className={
                this.state.selected["cab"]
                  ? "d-flex flex-column align-items-center"
                  : "d-flex flex-column align-items-center color-black"
              }
              style={{ textDecoration: "none" }}
            >
              <BiTaxi size={30} />
              <span>Cab</span>
            </Link>
            <Link
              to="/visa"
              className={
                this.state.selected["visa"]
                  ? "d-flex flex-column align-items-center"
                  : "d-flex flex-column align-items-center color-black"
              }
              style={{ textDecoration: "none" }}
            >
              <FaPassport size={30} />
              <span>Visa</span>
            </Link>
            <Link
              to="/charter"
              className={
                this.state.selected["charter"]
                  ? "d-flex flex-column align-items-center"
                  : "d-flex flex-column align-items-center color-black"
              }
              style={{ textDecoration: "none" }}
            >
              <GiAirplane size={30} />
              <span>Charter</span>
            </Link>
            <Link
              to="/activity"
              className={
                this.state.selected["activity"]
                  ? "d-flex flex-column align-items-center"
                  : "d-flex flex-column align-items-center color-black"
              }
              style={{ textDecoration: "none" }}
            >
              <MdOutlineHiking size={30} />
              <span>Activities</span>
            </Link>
          </div>
          <div className="d-flex flex-row align-items-center justify-content-center header3 flex-wrap">
            <img src={myicon} alt="my icon" className="img-fluid myicon" />
            <span
              onClick={this.toggleLoginFunc}
              className="pointer signuphover"
            >
              {this.state.LoggedIn ? (
                <div title={this.state.userData.email}>
                  {this.state.userData.name}
                </div>
              ) : (
                "Sign In"
              )}
            </span>
            <select defaultValue="India | Eng | INR" className="lang">
              <option>India | Eng | INR</option>
              <option>UAE | Arb | AED</option>
              <option>USA | Eng | USD</option>
            </select>
          </div>
        </div>
        <ReactModal
          style={this.style}
          isOpen={this.state.toggleSignUp}
          ariaHideApp={false}
        >
          <Signup
            toggleModal={this.successfulSignUp}
            saveData={this.saveUserData}
          />
        </ReactModal>
        <ReactModal
          style={this.loginStyle}
          isOpen={this.state.toggleLogin}
          ariaHideApp={false}
        >
          <SignIn
            onClick={this.showSignupFunc}
            onLoginBtnClick={this.clickOnLoginBtn}
            hideLogin={this.closeLogin}
          />
        </ReactModal>
      </div>
    );
  }
}
