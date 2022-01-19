import React, { Component } from "react";
import "./css/wonder.css";

export default class Wonders extends Component {
  render() {
    return (
      <div className="container">
        <img
          src={this.props.src}
          alt="Wonder 1"
          className="rounded wonder-img"
        />
        <h2 className="centered text-light">{this.props.text}</h2>
      </div>
    );
  }
}
