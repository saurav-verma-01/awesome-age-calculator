import React from "react";

const Result = ({ day, month, year }) => {
  return (
    <div className="result">
      <div className="year">
        <span className="data">{year}</span>
        <span>years</span>
      </div>
      <div className="month">
        <span className="data">{month}</span>
        <span>months</span>
      </div>
      <div className="day">
        {" "}
        <span className="data">{day}</span>
        <span>days</span>
      </div>
    </div>
  );
};

export default Result;
