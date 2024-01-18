import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import arrowRight from "../../../../assets/images/svgIcons/arrow-right.svg";
import saveIcon from "../../../../assets/images/svgIcons/save-icon.svg";
import { validateText } from "../../../common/formValidation/FormValidation";

export default function BankDetailsForm({
  newTabData,
  activeTab,
  setActiveTab,
}) {
  const [borderColor, setBorderColor] = useState({});
  const [ErrorMessage, setErrorMessage] = useState({});

  const SErrorMessage = (name, Message, validate) => {
    setErrorMessage((prevData) => ({
      ...prevData,
      [name]: validate ? "" : Message,
    }));
  };
  const feildColour = (name, validate) => {
    switch (name) {
      case "lroAccountType":
        SErrorMessage(name, "Select Account type", validate);
        break;
      case "lroNameAsPerBank":
        SErrorMessage(name, "Enter valid Name As per bank Details", validate);
        break;
      case "lroBank":
        SErrorMessage(name, "Enter correct Bank name", validate);
        break;
      case "lroAccountNumber":
        SErrorMessage(name, "Enter valid Account Number", validate);
        break;
      case "lroABANumber":
        SErrorMessage(name, "Enter valid ABA Number", validate);
        break;
      default:
        break;
    }
    setBorderColor((prevData) => ({
      ...prevData,
      [name]: validate ? "#dee2e6" : "#A30000",
    }));
  };

  const handleInputChangeBlur = (event) => {
    const { name, value } = event.target;

    if (value.length === 0) {
      switch (name) {
        case "lroAccountType":
          SErrorMessage(name, "Select Account type", false);
          break;
        case "lroNameAsPerBank":
          SErrorMessage(name, "Enter the Name As per bank Details", false);
          break;
        case "lroBank":
          SErrorMessage(name, "Enter name of the Bank", false);
          break;
        case "lroAccountNumber":
          SErrorMessage(name, "Enter Account Number", false);
          break;
        case "lroABANumber":
          SErrorMessage(name, "Enter ABA Number", false);
          break;
        default:
          break;
      }

      setBorderColor((prevData) => ({
        ...prevData,
        [name]: "#A30000",
      }));
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "lroNameAsPerBank":
        feildColour(name, validateText(value, 5, 50));
        break;
      case "lroBank":
        feildColour(name, validateText(value, 5, 50));
        break;
      case "lroAccountType":
        if (value === "") {
          feildColour(name, false);
        } else {
          feildColour(name, true);
        }
        break;
      case "lroAccountNumber":
        feildColour(name, validateText(value, 9, 9));
        break;
      case "lroABANumber":
        feildColour(name, validateText(value, 9, 9));
        break;

      default:
        break;
    }
  };

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
          <Form.Control
            type="text"
            placeholder="Enter Name as per/in Bank Records"
            name="lroNameAsPerBank"
            style={{ borderColor: borderColor.lroNameAsPerBank }}
            onChange={handleInputChange}
            onBlur={handleInputChangeBlur}
          />
          {borderColor.lroNameAsPerBank === "#A30000" && (
            <span className="formWarning">{ErrorMessage.lroNameAsPerBank}</span>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Name of the Bank</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name of the Bank"
            name="lroBank"
            style={{ borderColor: borderColor.lroBank }}
            onChange={handleInputChange}
            onBlur={handleInputChangeBlur}
          />
          {borderColor.lroBank === "#A30000" && (
            <span className="formWarning">{ErrorMessage.lroBank}</span>
          )}
        </Form.Group>
        <Row>
          <Col>
            <Form.Group className="fromInput  mb-3">
              <Form.Label>Account Type</Form.Label>
              <Form.Select
                as="select"
                name="lroAccountType"
                style={{ borderColor: borderColor.lroAccountType }}
                onChange={handleInputChange}
                onBlur={handleInputChangeBlur}
              >
                <option value="">Select Account Type</option>
                <option value="S">Savings</option>
                <option value="C">Current</option>
                <option value="Null">Other</option>
              </Form.Select>
              {borderColor.lroAccountType === "#A30000" && (
                <span className="formWarning">
                  {ErrorMessage.lroAccountType}
                </span>
              )}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Account Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Account Number"
                name="lroAccountNumber"
                style={{ borderColor: borderColor.lroAccountNumber }}
                onChange={handleInputChange}
                onBlur={handleInputChangeBlur}
              />
              {borderColor.lroAccountNumber === "#A30000" && (
                <span className="formWarning">
                  {ErrorMessage.lroAccountNumber}
                </span>
              )}
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>ABA Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter ABA Number"
            name="lroABANumber"
            style={{ borderColor: borderColor.lroABANumber }}
            onChange={handleInputChange}
            onBlur={handleInputChangeBlur}
          />
          {borderColor.lroABANumber === "#A30000" && (
            <span className="formWarning">{ErrorMessage.lroABANumber}</span>
          )}
        </Form.Group>
        <div className="border-top mt-4"></div>
        <Row className="mt-4">
          <Col>
            <Button className="btn-padding" variant="secondary">
              CLEAR
            </Button>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button
              onClick={handleNext}
              className="btn-padding btn-icon"
              variant="primary"
            >
              NEXT <img src={arrowRight} alt="" />
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
