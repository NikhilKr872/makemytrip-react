import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Hotels from "./Components/Hotels";
import Homestay from "./Components/Homestay";
import Holiday from "./Components/Holiday";
import Train from "./Components/Train";
import Bus from "./Components/Bus";
import Cab from "./Components/Cab";
import Visa from "./Components/Visa";
import Charter from "./Components/Charter";
import Activity from "./Activity";
import SearchFlight from "./Components/SearchFlight";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/flight" element={<App />} />
        <Route path="/hotel" element={<Hotels />} />
        <Route path="/homestay" element={<Homestay />} />
        <Route path="/holiday" element={<Holiday />} />
        <Route path="/train" element={<Train />} />
        <Route path="/bus" element={<Bus />} />
        <Route path="/cab" element={<Cab />} />
        <Route path="/visa" element={<Visa />} />
        <Route path="/charter" element={<Charter />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/flight/:from/:to" element={<SearchFlight />}/>
       
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
