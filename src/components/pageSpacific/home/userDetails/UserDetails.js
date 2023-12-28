import { useState } from "react";
import "./UserDetails.scss"
import DataTable from "react-data-table-component";
const userData = [
    {
      id: 1,
      name: "Jhon",
      email: "jhon@gmail.com",
      city: "usa",
      password: "*****"
    },
    {
        id: 2,
        name: "Raman",
        email: "raman@gmail.com",
        city: "usa",
        password: "*****"
      },
      {
        id: 3,
        name: "akhil",
        email: "akhil@gmail.com",
        city: "usa",
        password: "*****"
      },
      {
        id: 4,
        name: "marck",
        email: "marck@gmail.com",
        city: "usa",
        password: "*****"
      },
    
  ];

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true
    },
    {
        name: "City",
        selector: (row) => row.city,
        sortable: true
    },
    {
        name: "Password",
        selector: (row) => row.password,
        sortable: true
    }


  ];
const UserDetails = () => {
    const [filterText, setFilterText] = useState("");
    const filteredItems = userData.filter(
        (item) =>
        JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !==
        -1
    );
  return (
    <div className="userDetailsMain pageContainer paddingTb-2em">
        <div className="userDetailsHeading">
            <h2>User Details</h2>
            <input
                type="search"
                placeholder="Search"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
                className={"searchFilter"}
            />
        </div>
        <div className="userDetailsData">
            <DataTable
            columns={columns}
             data={filteredItems}
             className="userData"
             //selectableRows
            // onSelectedRowsChange={handleRowSelected}
            // clearSelectedRows={toggleCleared}
            pagination
            defaultSortFieldId={3}
        />
        </div>
    </div>
  )
}

export default UserDetails