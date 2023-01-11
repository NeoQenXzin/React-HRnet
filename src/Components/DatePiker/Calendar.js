import React, { useState, useEffect } from "react";
import * as test from "./test.js";
import * as lib from "./dycalendar.js";
import "./dycalendar.css";
import "./Calendar.css";

const Calendar = () => {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    const baliseScript = document.createElement("script");
    baliseScript.src = "./dycalendar.js";
    baliseScript.addEventListener("load", () => setLoaded(true));
    document.body.appendChild(baliseScript);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      console.log(test.tout);
      //   lib.dycalendar.draw({
      //     target: "#dycalendar",
      //   });
    }
  }, [isLoaded]);

  return (
    <section>
      <div className="box">
        <div className="container">
          <div id="dycalendar"></div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;
