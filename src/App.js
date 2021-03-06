import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Offer from "./Components/Offer";
import Slides from "./Components/Slides";
import TravelDest from "./Components/TravelDest";

class App extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column" style={{ gap: "20px" }}>
        <Header />
        <div className="App">
          <Main />
        </div>
        
        <Offer />
        <TravelDest />
        <Slides />
        <Footer />
      </div>
    );
  }
}

export default App;
