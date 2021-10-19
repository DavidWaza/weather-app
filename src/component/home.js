import React, { useEffect, useState } from "react";
import "./home.css";

const Home = () => {
  const [clockState, setClockState] = useState();
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  },);
  
  const d = new Date();
  const weekDay = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  const month = [
    "January",
    "February",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = weekDay[d.getDay()];
  const months = month[d.getMonth()];
  const date = d.getDate();
  const year = d.getFullYear();
  return (
    <div className="main">
      <div className="header">
        <h2>TODAY</h2>
      </div>
      <div className="todays-date">
        <div className="time-wrapper">
          <h2 className="date">{day}</h2>
          <h2 className="dates">{months}</h2>
          <h2 className="date dat">{date}</h2>
          <h2 className="date">{year}</h2>
        </div>
      </div>
      <div className="main main-bottom">
        <div className="time">{clockState}</div>
      </div>
    </div>
  );
};

export default Home;
