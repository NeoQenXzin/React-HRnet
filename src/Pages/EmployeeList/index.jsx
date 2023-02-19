import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// *Prime React Library (board)
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";

export default function EmployeeList() {
  //State
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });
  // Change ID in simple Number
  const { users } = useSelector((state) => ({
    ...state.boardReducer,
  }));
  users.forEach((user, index) => {
    user.id = index + 1;
  });

  console.log(users);

  return (
    <div>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>

        <div className="test-store">
          <InputText
            onInput={(e) =>
              setFilters({
                global: {
                  value: e.target.value,
                  matchMode: FilterMatchMode.CONTAINS,
                },
              })
            }
          />
          <DataTable
            value={users}
            sortMode="multiple"
            filters={filters}
            paginator
            rows={2}
            rowsPerPageOptions={[1, 2, 3]}
            totalRecords={3}
          >
            <Column field="id" header="ID" sortable></Column>
            <Column field="firstName" header="Firstname" sortable></Column>
            <Column field="lastName" header="Lastname" sortable></Column>
            <Column field="startDate" header="Start date" sortable></Column>
            <Column field="department" header="Department" sortable></Column>
            <Column
              field="dateOfBirth"
              header="Date of birth"
              sortable
            ></Column>
            <Column
              field="adress.adress.street"
              header="Street"
              sortable
            ></Column>
            <Column field="adress.adress.city" header="City" sortable></Column>
            <Column
              field="adress.adress.state"
              header="State"
              sortable
            ></Column>
            <Column
              field="adress.adress.zipCode"
              header="Zip Code"
              sortable
            ></Column>
          </DataTable>
        </div>
        <table id="employee-table" className="display"></table>

        <div className="link-employes-list">
          <Link to="/Home">Home</Link>
        </div>
      </div>
    </div>
  );
}
