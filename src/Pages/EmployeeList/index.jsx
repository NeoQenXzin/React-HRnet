import React from "react";
import { Link } from "react-router-dom";

export default function EmployeeList() {
  return (
    <div>
      <div id="employee-div" class="container">
        <h1>Current Employees</h1>

        <table id="employee-table" className="display"></table>

        <div className="link-employes-list">
          <Link to="/Home">Home</Link>
        </div>
      </div>
    </div>
  );
}
