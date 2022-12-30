import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import EmployeeList from "./Pages/EmployeeList";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employes-list" element={<EmployeeList />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
