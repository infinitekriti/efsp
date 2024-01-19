import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import saveIcon from "../../../../assets/images/svgIcons/save-icon.svg";
import { Button, Col, Row } from "react-bootstrap";
import arrowRight from "../../../../assets/images/svgIcons/arrow-right.svg";
import {
  validateEni,
  formatEin,
  formatExt,
  validateText,
} from "../../../common/formValidation/FormValidation";

export default function EmployeeIDForm({
  newTabData,
  activeTab,
  setActiveTab,
}) {
  const [borderColor, setBorderColor] = useState({});
  const [ErrorMessage, setErrorMessage] = useState({});
  const [lroeinextention, setlroeinextention] = useState("");
  const [lroEni, setlroEni] = useState("");
  const [lroSubOrdinateEin, setlroSubOrdinateEin] = useState("");

  const SErrorMessage = (name, Message, validate) => {
    setErrorMessage((prevData) => ({
      ...prevData,
      [name]: validate ? "" : Message,
    }));
  };
  const feildColour = (name, validate) => {
    switch (name) {
      case "lroEni":
        SErrorMessage(name, "Enter Valid Eni", false);
        break;
      case "lroSubOrdinateEin":
        SErrorMessage(name, "Enter Valid Eni", false);
        break;
      case "lroeinextention":
        SErrorMessage(name, "Enter Valid Extention", false);
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
        case "lroEni":
          SErrorMessage(name, "Enter the Eni", false);
          break;
        case "lroSubOrdinateEin":
          SErrorMessage(name, "Enter the Eni", false);
          break;
        case "lroeinextention":
          SErrorMessage(name, "Enter the Extention", false);
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
      case "lroEni":
        const Eni1 = formatEin(value);
        setlroEni(Eni1);
        feildColour(name, validateEni(Eni1), Eni1);
        SErrorMessage(name, "ENter valid Eni", validateEni(Eni1));
        break;
      case "lroSubOrdinateEin":
        const Eni2 = formatEin(value);
        setlroSubOrdinateEin(Eni2);
        feildColour(name, validateEni(Eni2), Eni2);
        SErrorMessage(name, "ENter valid Eni", validateEni(Eni2));
        break;
      case "lroeinextention":
        const Ext = formatExt(value);
        setlroeinextention(Ext);
        feildColour(name, validateText(Ext, 5, 5), Ext);
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
            name="lroEni"
            value={lroEni}
            style={{ border: borderColor.lroEni }}
            onChange={handleInputChange}
            onBlur={handleInputChangeBlur}
          />
          {borderColor.lroEni === "#A30000" && (
            <span className="formWarning">{ErrorMessage.lroEni}</span>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Subordinate (EIN)</Form.Label>
          <Form.Control
            type="text"
            className="InputFeild"
            id="name"
            placeholder="Enter Subordinate"
            name="lroSubOrdinateEin"
            value={lroSubOrdinateEin}
            style={{ border: borderColor.lroSubOrdinateEin }}
            onChange={handleInputChange}
            onBlur={handleInputChangeBlur}
          />
          {borderColor.lroSubOrdinateEin === "#A30000" && (
            <span className="formWarning">
              {ErrorMessage.lroSubOrdinateEin}
            </span>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>EIN Extention</Form.Label>
          <Form.Control
            type="text"
            className="InputFeild"
            id="name"
            placeholder="Enter EIN Extension"
            name="lroeinextention"
            value={lroeinextention}
            style={{ border: borderColor.lroeinextention }}
            onChange={handleInputChange}
            onBlur={handleInputChangeBlur}
          />
          {borderColor.lroeinextention === "#A30000" && (
            <span className="formWarning">{ErrorMessage.lroeinextention}</span>
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
