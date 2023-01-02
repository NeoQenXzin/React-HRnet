import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  // states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  //store
  const dispatch = useDispatch();

  // reducer pour test
  const {
    formData: { firstNameData, lastNameData },
  } = useSelector((state) => ({
    ...state.formReducer,
  }));

  // Fonctions
  const getDataEmployee = (e) => {
    e.preventDefault();
    dispatch({
      type: "GETFORMDATA",
      payload: [firstName, lastName],
    });
    console.log("success");
    // test du reducer
    console.log(firstNameData);
    console.log(lastNameData);
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
          action=""
          onSubmit={getDataEmployee}
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
          <input id="date-of-birth" type="text"></input>

          <label htmlFor="start-date">Start Date</label>
          <input id="start-date" type="text"></input>

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
    </div>
  );
}
