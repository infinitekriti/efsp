import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {
  validateText,
  validateSalute,
  validateEmail,
  validatePassword,
} from "../../../common/formValidation/FormValidation";

export default function RegistrationForm({
  newTabData,
  activeTab,
  setActiveTab,
}) {
  const [LRODetails, setLRODetails] = useState({});
  const [borderColor, setBorderColor] = useState({});

  const feildColour = (name, validate) => {
    setBorderColor((prevData) => ({
      ...prevData,
      [name]: validate ? "#dee2e6" : "red",
    }));
  };

  const validateCPassword = (value, check) => {
    if (value !== check) {
      return false;
    } else {
      return true;
    }
  };

  const handleInputChangeBlur = (event) => {
    const { name, value } = event.target;
    if (value.length === 0 || value === "+1") {
      setBorderColor((prevData) => ({
        ...prevData,
        [name]: "red",
      }));
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "lroName":
        feildColour(name, validateText(value, 3, 100), value);
        break;
      case "lroSalute":
        feildColour(name, validateSalute(value));
        break;
      case "lroContact":
        feildColour(name, validateText(value, 3, 50), value);
        break;
      case "lroEmail":
        feildColour(name, validateEmail(value), value);
        break;
      case "lroPassword":
        feildColour(name, validatePassword(value, 8, 50), value);
        setLRODetails((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        break;
      case "lroCPassword":
        const password = LRODetails.lroPassword;
        feildColour(name, validateCPassword(value, password));
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
    <div className="registration-form">
      <Form>
        <Form.Group className="mb-2" controlId="formLroName">
          <Form.Label>Local Recipient Organization Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="LRO Name"
            name="lroName"
            style={{ borderColor: borderColor.lroName }}
            onChange={handleInputChange}
            onBlur={handleInputChangeBlur}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>LRO Representative Name</Form.Label>
          <Row>
            <Col xs={3}>
              <Form.Group className="mb-2" controlId="formSalut">
                <Form.Select
                  name="lroSalute"
                  style={{ borderColor: borderColor.lroSalute }}
                  onChange={handleInputChange}
                  onBlur={handleInputChangeBlur}
                >
                  <option value="Select">Select</option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={9}>
              <Form.Group className="mb-2" controlId="formLroContact">
                <Form.Control
                  type="text"
                  placeholder="contact"
                  name="lroContact"
                  style={{ borderColor: borderColor.lroContact }}
                  onChange={handleInputChange}
                  onBlur={handleInputChangeBlur}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-2" controlId="formLroEmail">
          <Form.Label>Email / UserID</Form.Label>
          <Form.Control
            type="email"
            placeholder="infinite@Alyx.com"
            name="lroEmail"
            style={{ borderColor: borderColor.lroEmail }}
            onChange={handleInputChange}
            onBlur={handleInputChangeBlur}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formLroPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder=""
            name="lroPassword"
            style={{ borderColor: borderColor.lroPassword }}
            onChange={handleInputChange}
            onBlur={handleInputChangeBlur}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formLroCPassword">
          <Form.Label>Re-enter Password</Form.Label>
          <Form.Control
            type="password"
            placeholder=""
            name="lroCPassword"
            style={{ borderColor: borderColor.lroCPassword }}
            onChange={handleInputChange}
            onBlur={handleInputChangeBlur}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formLroCaptcha">
          <Form.Label>Captcha</Form.Label>
          <div style={{ display: "flex" }}>
            <div
              style={{
                // borderColor: borderColor.lroCaptcha,
                width: "30%",
                textAlign: "center",
                marginRight: "10px",
              }}
            >
              12 + 27
            </div>
            <Form.Control type="text" placeholder="" />
          </div>
        </Form.Group>
        <Button className="mt-4 w-100" type="submit" onClick={handleNext}>
          REGISTER
        </Button>
      </Form>
    </div>
  );
}
