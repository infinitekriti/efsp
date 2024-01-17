import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import arrowRight from "../../../../assets/images/svgIcons/arrow-right.svg"
import saveIcon from "../../../../assets/images/svgIcons/save-icon.svg"

export default function AffiliationInformation(
  {
    newTabData,
    activeTab,
    setActiveTab,
  }
) {
 
  return (
    <div className="affliation-main">
       <div className="address-step-title d-flex justify-content-between mb-3">
             <h6>Step 5. Affiliation</h6>
             <div className="address-step-save ">
                <img src={saveIcon} alt="" /> 
             </div>
          </div>
          <div className="lro-name mb-3">
             <label>Local Recipient Organization Name:</label> <b>Name</b>
          </div>
          <Form>    
      <Form.Group className="fromInput mb-3">
        <Form.Label>Affiliation</Form.Label>
        <Form.Control
            type="text"
            placeholder="Enter Name as per/in Bank Records"
          />
      </Form.Group>
      <Form.Group className="fromInput  mb-3">
        <Form.Label>Target 1 </Form.Label><span className="requred">* </span>
        <Form.Control as="select">
          <option value="">Select Target</option>
        </Form.Control>
      </Form.Group>
      <Form.Group className="fromInput  mb-3">
        <Form.Label>Target 2</Form.Label><span className="requred">* </span>
        <Form.Control as="select">
          <option value="">Select Target</option>
        </Form.Control>
      </Form.Group>
      <Form.Group className="fromInput  mb-3">
        <Form.Label>Target 3</Form.Label><span className="requred">* </span>
        <Form.Control as="select">
          <option value="">Select Target</option>
        </Form.Control>
      </Form.Group>
      <div className="border-top mt-4"></div>
          <Row className="mt-4">
          <Col>
            <Button className="btn-padding" variant="secondary">CLEAR</Button>
            </Col>
            <Col className="d-flex justify-content-end">
            <Button className="btn-padding btn-icon" variant="primary">SUBMIT <img src={arrowRight} alt="" /></Button>
            </Col>
          </Row>
    </Form>
    </div>
   
  );
}
