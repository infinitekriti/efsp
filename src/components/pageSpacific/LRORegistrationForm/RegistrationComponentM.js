import React from "react";
import AddressForm from "./addressForm/AddressForm";
import Card from "react-bootstrap/Card";

export default function RegistrationComponentM() {
  return (
    <div>
      

      <Card style={{ width: "80%", margin:"0% 7%", padding:"0% 3%" }}>
        <AddressForm />
      </Card>
    </div>
  );
}
