import React from "react";
import Form from "react-bootstrap/Form";
import saveIcon from "../../../../assets/images/svgIcons/save-icon.svg"
import { Button, Col, Row } from "react-bootstrap";
import arrowRight from "../../../../assets/images/svgIcons/arrow-right.svg"

export default function EmployeeIDForm(
  {
    newTabData,
    activeTab,
    setActiveTab,
  }
) {
  const handleNext = () => {
    const currentTabIndex = newTabData.findIndex(
      (tab) => tab.id === activeTab.id
    );
    if (currentTabIndex < newTabData.length - 1) {
      setActiveTab(newTabData[currentTabIndex + 1]);
    }
  };
  return (
    <div className="employee-id-form">
         <div className="address-step-title d-flex justify-content-between mb-3">
             <h6>Step 3. Employer Identification Information</h6>
             <div className="address-step-save ">
                <img src={saveIcon} alt="" /> 
             </div>
          </div>
          <div className="lro-name mb-3">
             <label>Local Recipient Organization Name:</label> <b>Name</b>
          </div>
        <Form>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Employer Identification Number (EIN)</Form.Label>
                <Form.Control
                  type="text"
                  className="InputFeild"
                  id="name"
                  placeholder="Enter user ID"
                  readOnly
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Subordinate (EIN)</Form.Label>
                <Form.Control
                  type="text"
                  className="InputFeild"
                  id="name"
                  placeholder="Enter Subordinate"
                  readOnly
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>EIN Extention</Form.Label>
                <Form.Control
                  type="text"
                  className="InputFeild"
                  id="name"
                  placeholder="Enter EIN Extension"
                  readOnly
                />
              </Form.Group>   
              <div className="border-top mt-4"></div>
              <Row className="mt-4">
                  <Col>
                    <Button className="btn-padding" variant="secondary">CLEAR</Button>
                    </Col>
                    <Col className="d-flex justify-content-end">
                    <Button onClick={handleNext} className="btn-padding btn-icon" variant="primary">NEXT <img src={arrowRight} alt="" /></Button>
                    </Col>
                  </Row>
            </Form>
    </div>
  );
}
