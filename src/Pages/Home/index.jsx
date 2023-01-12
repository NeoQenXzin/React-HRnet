import React from "react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
// import Calendar from "../../Components/Calendar/Calendar";
import DatePicker from "../../Components/DatePiker/DatePicker";
import "react-calendar/dist/Calendar.css";
import "./home.css";

export default function Home() {
  // states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [startDate, setStartDate] = useState("");
  //State for DatePicker
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedInput, setSelectedInput] = useState(null);
  const [inputRef, setInputRef] = useState(null);
  const [inputStart, setInputStart] = useState(null);
  //store
  const dispatch = useDispatch();

  // Fonctions
  //reset Form
  const formRef = useRef(null);

  const saveEmployee = async (e) => {
    e.preventDefault();
    console.log("Dans save employé");
    const user = { firstName, lastName, dateOfBirth, startDate };
    dispatch({
      type: "ADDEMPLOYEE",
      payload: user,
    });
    console.log(user);
    formRef.current.reset();
  };

  const DateSelector = (id) => {
    setSelectedInput(id);
    setShowCalendar(true);
  };

  const handleOnSelect = (date) => {
    if (selectedInput === "date-of-birth") {
      setDateOfBirth(date.toLocaleDateString());
      inputRef.value = date.toLocaleDateString();
    } else if (selectedInput === "start-date") {
      setStartDate(date.toLocaleDateString());
      inputStart.value = date.toLocaleDateString();
    }
    setShowCalendar(false);
  };

  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <div className="link-employes-list">
          <Link to="/employes-list">View Current Employees</Link>
        </div>

        <h2>Create Employee</h2>
        <form
          ref={formRef}
          action=""
          onSubmit={saveEmployee}
          method="post"
          id="create-employee"
        >
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            onChange={(e) => setLastName(e.target.value)}
          />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <input
            ref={(input) => setInputRef(input)}
            id="date-of-birth"
            onClick={() => DateSelector("date-of-birth")}
            type="text"
          ></input>

          <label htmlFor="start-date">Start Date</label>
          <input
            ref={(inputStart) => setInputStart(inputStart)}
            onClick={() => DateSelector("start-date")}
            id="start-date"
            type="text"
          ></input>

          <fieldset className="adress">
            <legend>Adress</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" />

            <label htmlFor="city">City</label>
            <input id="city" type="text" />

            <label htmlFor="state">State</label>
            <select name="state" id="state"></select>

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
          </fieldset>
          <label htmlFor="department">Department</label>
          <select name="department" id="department">
            <option value="sales">Sales</option>
            <option value="marketing">Marketing</option>
            <option value="engineering">Engineering</option>
            <option value="human_resources">Human Resources</option>
            <option value="legal">Legal</option>
          </select>
          <br />
          <button type="submit">Save</button>
        </form>
      </div>
      <div id="confirmation" className="modal">
        Employee Created!
      </div>

      {/* //Modale Calendrier */}
      <div className={`calendar-container ${showCalendar ? "" : "hide"}`}>
        {" "}
        <DatePicker onSelect={handleOnSelect} />
      </div>
    </div>
  );
}
