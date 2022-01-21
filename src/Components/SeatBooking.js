import "./css/seatbook.css";

import React, { Component } from "react";
export default class SeatBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberofSeats: 50,
      activeSeats: Array(50).fill(false),
    };
  }

  onClickFunc = (e) => {
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

  render() {
    return (
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
              onClick={this.onClickFunc}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    );
  }
}
