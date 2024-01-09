import { useState } from "react";
import DataTable from "react-data-table-component";
import "./LroUserDetails.scss"
const UserDetail = [
    {
        lbNo: "Jessamyn", 
        lroNo: "Jessamyn",
        lroName: "Jessamyn", 
        contact: "Jessamyn",
        address1: "Jessamyn",
        address2: "Jessamyn",
        address3: "Jessamyn", 
        city:"newyork",
        stateCode:"234",
        zip1:"23",
        zip2:"234",
        Fax:"2437777",
        phoneNumber: "162-166-0977",
        mail: "jespinazo0@chicagotribune.com",
        password:"2344",
        bankName:"3344",
        accountNo:"344555",
        salut:"Mrs",
        ext:"data",
        affiliate:"data",
        target1:"data",
        target2:"data",
        target3:"data",
        ein:"data",
        subOrdinateein:"data",
        websiteLink:"data",
        abaNo:"data",
        einExtension:"data",
        eftrcvd:"data"

      },
    ]
const columns = [
    {
      name: "Lb Number",
      selector: (row) => row.lbNo,
      sortable: true
    },
    {
      name: "LRO Number",
      selector: (row) => row.lroNo,
      sortable: true
    },
    {
        name: "LRO Name",
        selector: (row) => row.lroName,
        sortable: true
    },
    {
        name: "Contact",
        selector: (row) => row.contact,
        sortable: true
    },
    {
        name: "Address1",
        selector: (row) => row.address1,
        sortable: true
    },
    {
        name: "Address2",
        selector: (row) => row.address2,
        sortable: true
    },
    {
        name: "Address3",
        selector: (row) => row.address3,
        sortable: true
    },
    {
        name: "City",
        selector: (row) => row.city,
        sortable: true
    },
    {
        name: "State Code",
        selector: (row) => row.stateCode,
        sortable: true
    },
    {
        name: "Zip1",
        selector: (row) => row.zip1,
        sortable: true
    },
    {
        name: "Zip2",
        selector: (row) => row.zip2,
        sortable: true
    },
    {
        name: "Fax",
        selector: (row) => row.fax,
        sortable: true
    },
    {
        name: "phone Number",
        selector: (row) => row.phoneNumber,
        sortable: true
    },
    {
        name: "Email",
        selector: (row) => row.mail,
        sortable: true
    },
    {
        name: "Password",
        selector: (row) => row.password,
        sortable: true
    },
    {
        name: "Bank Name",
        selector: (row) => row.bankName,
        sortable: true
    },
    {
        name: "Account Number",
        selector: (row) => row.accountNo,
        sortable: true
    },
    {
        name: "Salut",
        selector: (row) => row.salut,
        sortable: true
    },
    {
        name: "Ext",
        selector: (row) => row.ext,
        sortable: true
    },
    {
        name: "Affiliate",
        selector: (row) => row.affiliate,
        sortable: true
    },
    {
        name: "Target 1",
        selector: (row) => row.target1,
        sortable: true
    },
    {
        name: "Target 2",
        selector: (row) => row.target2,
        sortable: true
    },
    {
        name: "Target 3",
        selector: (row) => row.target3,
        sortable: true
    },
    {
        name: "Ein",
        selector: (row) => row.ein,
        sortable: true
    },
    {
        name: "Sub Ordinateein",
        selector: (row) => row.subOrdinateein,
        sortable: true
    },
    {
        name: "Website Link",
        selector: (row) => row.websiteLink,
        sortable: true
    },
    {
        name: "Aba No",
        selector: (row) => row.abaNo,
        sortable: true
    },
    {
        name: "Ein Extension",
        selector: (row) => row.einExtension,
        sortable: true
    },
    {
        name: "Eftrcvd",
        selector: (row) => row.eftrcvd,
        sortable: true
    },


  ];
const LroUserDetails = () => {
    const [filterText, setFilterText] = useState("");
    const filteredItems = UserDetail.filter(
        (item) =>
        JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !==
        -1
    );
  return (
    <div className="lroDetailsMain pageContainer paddingTb-2em">
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

export default LroUserDetails