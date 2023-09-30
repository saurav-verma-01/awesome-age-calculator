import React, { useState } from "react";
import Result from "./Result";

const App = () => {
  const [date, setDate] = useState("");
  const [day, setDay] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateAge(date);
  };

  const calculateAge = (date) => {
    let birthDate = new Date(date);
    const today = new Date();
    console.log(birthDate);

    const d1 = birthDate.getDate();
    const m1 = birthDate.getMonth() + 1;
    const y1 = birthDate.getFullYear();
    const d2 = today.getDate();
    const m2 = today.getMonth() + 1;
    const y2 = today.getFullYear();

    // Calculating Age
    let y3 = y2 - y1;
    let m3, d3;

    m2 >= m1 ? (m3 = m2 - m1) : (m3 = 12 + m2 - m1);

    if (d2 >= d1) {
      d3 = d2 - d1;
    } else {
      m3--;
      d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }
    if (m3 < 0) {
      m3 = 11;
      y3--;
    }

    if (m3 < 10) m3 = `0${m3}`;
    if (d3 < 10) d3 = `0${d3}`;
    if (y3 < 10) y3 = `0${y3}`;
    setDay(d3);
    setMonth(m3);
    setYear(y3);
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  const handleReset = () => {
    setMonth(null);
    setDay(null);
    setYear(null);
    setDate("");
  };

  return (
    <div className="app">
      <div className="calculator">
        <h1>
          Age <br /> Calculator
        </h1>
        <form className="input-form" onSubmit={handleSubmit}>
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <div className="btn-container">
            {" "}
            <button className="btn-primary" type="submit">
              Calculate!
            </button>
            <button className="btn-secondary" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
        {day || month || year ? (
          <Result day={day} month={month} year={year} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default App;
