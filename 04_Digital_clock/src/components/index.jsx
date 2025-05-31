import React, { useState, useEffect } from "react";
import "./style.css";

const index = () => {
    
  const [months] = useState([
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]);

  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [weekDay, setweekDay] = useState("");

  const currentTime = () => {
    let currTime = new Date();
    setHours(currTime.getHours());
    setMinutes(currTime.getMinutes().toString().padStart(2, "0"));
    setSeconds(currTime.getSeconds().toString().padStart(2, "0"));
    setDate(currTime.getDate());
    setMonth(months[currTime.getMonth()]);
    setYear(currTime.getFullYear());
    setweekDay(currTime.getDay());
  };

  useEffect(() => {
    currentTime();
    const interval = setInterval(currentTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="clock-container">
        <div className="weekdays">
          <span className={weekDay === 0 ? "active" : ""}>Sun</span>
          <span className={weekDay === 1 ? "active" : ""}>Mon</span>
          <span className={weekDay === 2 ? "active" : ""}>Tue</span>
          <span className={weekDay === 3 ? "active" : ""}>Wed</span>
          <span className={weekDay === 4 ? "active" : ""}>Thu</span>
          <span className={weekDay === 5 ? "active" : ""}>Fri</span>
          <span className={weekDay === 6 ? "active" : ""}>Sat</span>
        </div>
        <div className="date">
          <span>{date}</span>
          <span>{month}</span>
          <span>{year}</span>
        </div>
        <div className="display">
          <div className="time">
            <span>
              {hours > 12
                ? (hours - 12).toString().padStart(2, "0")
                : hours.toString().padStart(2, "0")}
            </span>
            <span className="colon">:</span>
            <span>{minutes}</span>
            <span className="colon">:</span>
            <span>{seconds}</span>
          </div>
          <div className="period">
            <span>{hours > 12 ? "PM" : "AM"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
