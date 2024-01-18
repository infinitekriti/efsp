import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import arrowRight from "../../../../assets/images/svgIcons/arrow-right.svg"
import saveIcon from "../../../../assets/images/svgIcons/save-icon.svg"

export default function BankDetailsForm(
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
    <div className="bank-detail-main">
       <div className="address-step-title d-flex justify-content-between mb-3">
             <h6>Step 4. Bank Details</h6>
             <div className="address-step-save ">
                <img src={saveIcon} alt="" /> 
             </div>
          </div>
          <div className="lro-name mb-3">
             <label>Local Recipient Organization Name:</label> <b>Name</b>
          </div>
          <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name as per/in Bank Records</Form.Label>
          <Form.Control type="text" placeholder="Enter Name as per/in Bank Records" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Name of the Bank</Form.Label>
          <Form.Control type="text" placeholder="Enter Name of the Bank" />
        </Form.Group>
        <Row>
           <Col>
          <Form.Group className="fromInput  mb-3">
          <Form.Label>Account Type</Form.Label>
           <Form.Select as="select">
              <option value="">Select Account Type</option>
            </Form.Select>
          </Form.Group>
           </Col>
           <Col>
                <Form.Group className="mb-3">
                <Form.Label>Account Number</Form.Label>
                <Form.Control type="text" placeholder="Enter Account Number" />
              </Form.Group>
           </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>ABA Number</Form.Label>
          <Form.Control type="text" placeholder="Enter ABA Number" />
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
