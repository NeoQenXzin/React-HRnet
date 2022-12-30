import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>HRnet</h1>
      <div className="link-employes-list">
        <Link to="/employes-list">View Current Employees</Link>
      </div>
    </div>
  );
}
