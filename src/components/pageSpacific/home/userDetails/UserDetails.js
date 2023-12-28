import { useState } from "react";
import "./UserDetails.scss"
import DataTable from "react-data-table-component";

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true
    },
    {
      name: "Email",
      selector: (row) => row.mail,
      sortable: true
    },
    {
        name: "Moblie Number",
        selector: (row) => row.phoneNumber,
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
const UserDetails = ({UserDetail}) => {
    const [filterText, setFilterText] = useState("");
    const filteredItems = UserDetail.filter(
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