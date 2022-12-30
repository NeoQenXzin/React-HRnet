import React from "react";
import { Link } from "react-router-dom";

export default function EmployeeList() {
  return (
    <div>
      <h1>Current Employees</h1>
      <div className="link-employes-list">
        <Link to="/Home">Homes</Link>
      </div>
    </div>
  );
}
