import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function EmployeeList() {
  const { user } = useSelector((state) => ({
    ...state.boardReducer,
  }));
  console.log(user);
  return (
    <div>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>

        <div className="test-store">
          nom : {user[1].lastName}, <br></br> prenom:{user[1].firstName}
        </div>
        <table id="employee-table" className="display"></table>

        <div className="link-employes-list">
          <Link to="/Home">Home</Link>
        </div>
      </div>
    </div>
  );
}
