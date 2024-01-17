import React, { useState, useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {
  validateText,
  validateSalute,
  validateEmail,
  validatePassword,
} from "../../../common/formValidation/FormValidation";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

export default function RegistrationForm({
  newTabData,
  activeTab,
  setActiveTab,
}) {
  const [LRODetails, setLRODetails] = useState({});
  const [borderColor, setBorderColor] = useState({});
  const [ErrorMessage, setErrorMessage] = useState({});

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const SErrorMessage = (name, Message) => {
    setErrorMessage((prevData) => ({
      ...prevData,
      [name]: Message,
    }));
  };
  const feildColour = (name, validate) => {
    switch (name) {
      case "lroName":
        SErrorMessage(name, "Enter Valid Name");
        break;
      case "lroSalute":
        SErrorMessage(name, "Select valid Value");
        break;
      case "lroContact":
        SErrorMessage(name, "Enter Valid Name");
        break;
      case "lroEmail":
        SErrorMessage(name, "Enter Valid Email formate");
        break;
      case "lroPassword":
        SErrorMessage(name, "Match the Password Pattern");
        break;
      case "lroCPassword":
        SErrorMessage(name, "Match the Password");
        break;
      default:
        break;
    }
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
    if (name === "lroSalute") {
      SErrorMessage(name, "Select the Salutation");
      if (value === "Select") {
        setBorderColor((prevData) => ({
          ...prevData,
          [name]: "red",
        }));
      }
    }
    if (value.length === 0 || value === "+1") {
      switch (name) {
        case "lroName":
          SErrorMessage(name, "Enter the Name");
          break;
        case "lroContact":
          SErrorMessage(name, "Enter the Name");
          break;
        case "lroEmail":
          SErrorMessage(name, "Enter the Email");
          break;
        case "lroPassword":
          SErrorMessage(name, "Match the Password");
          break;
        case "lroCPassword":
          SErrorMessage(name, "Conform the Password");
          break;
        default:
          break;
      }
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
    let userCaptcha = document.getElementById("user_captcha_input").value;
    if (!validateCaptcha(userCaptcha)) {
      alert("Enter valid captcha");
    } else {
      const currentTabIndex = newTabData.findIndex(
        (tab) => tab.id === activeTab.id
      );
      if (currentTabIndex < newTabData.length - 1) {
        setActiveTab(newTabData[currentTabIndex + 1]);
      }
    }
  };
  return (
    <div className="registration-form">
      <Form>
        <Form.Group className="mb-3" controlId="formLroName">
          <Form.Label>Local Recipient Organization Name</Form.Label>
          <span className="requred">* </span>
          <Form.Control
            type="text"
            placeholder="LRO Name"
            name="lroName"
            style={{ borderColor: borderColor.lroName }}
            onChange={handleInputChange}
            onBlur={handleInputChangeBlur}
          />
          {borderColor.lroName === "red" && (
            <span className="formWarning">{ErrorMessage.lroName}</span>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>LRO Representative Name</Form.Label>
          <span className="requred">* </span>
          <Row>
            <Col xs={3}>
              <Form.Group className="mb-3" controlId="formSalut">
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
                {borderColor.lroSalute === "red" && (
                  <span className="formWarning">{ErrorMessage.lroSalute}</span>
                )}
              </Form.Group>
            </Col>
            <Col xs={9}>
              <Form.Group className="mb-3" controlId="formLroContact">
                <Form.Control
                  type="text"
                  placeholder="contact"
                  name="lroContact"
                  style={{ borderColor: borderColor.lroContact }}
                  onChange={handleInputChange}
                  onBlur={handleInputChangeBlur}
                />
                {borderColor.lroContact === "red" && (
                  <span className="formWarning">{ErrorMessage.lroContact}</span>
                )}
              </Form.Group>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLroEmail">
          <Form.Label>Email / UserID</Form.Label>
          <span className="requred">* </span>
          <Form.Control
            type="email"
            placeholder="infinite@Alyx.com"
            name="lroEmail"
            style={{ borderColor: borderColor.lroEmail }}
            onChange={handleInputChange}
            onBlur={handleInputChangeBlur}
          />
          {borderColor.lroEmail === "red" && (
            <span className="formWarning">{ErrorMessage.lroEmail}</span>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLroPassword">
          <Form.Label>Password</Form.Label>
          <span className="requred">* </span>
          <Form.Control
            type="password"
            placeholder="xxxxxxxxx"
            name="lroPassword"
            style={{ borderColor: borderColor.lroPassword }}
            onChange={handleInputChange}
            onBlur={handleInputChangeBlur}
          />
          {borderColor.lroPassword === "red" && (
            <span className="formWarning">{ErrorMessage.lroPassword}</span>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLroCPassword">
          <Form.Label>Re-enter Password</Form.Label>
          <span className="requred">* </span>
          <Form.Control
            type="password"
            placeholder="xxxxxxxxx"
            name="lroCPassword"
            style={{ borderColor: borderColor.lroCPassword }}
            onChange={handleInputChange}
            onBlur={handleInputChangeBlur}
          />
          {borderColor.lroCPassword === "red" && (
            <span className="formWarning">{ErrorMessage.lroCPassword}</span>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLroCaptcha">
          <Form.Label>Captcha</Form.Label>
          <div style={{ display: "flex" }}>
            <div className="col mt-3">
              <LoadCanvasTemplate />
            </div>
            <div className="col mt-3">
              <div>
                <input
                  placeholder="Enter Captcha Value"
                  id="user_captcha_input"
                  name="user_captcha_input"
                  type="text"
                />
              </div>
            </div>
          </div>
        </Form.Group>
        <Button className="mt-4 w-100" type="submit" onClick={handleNext}>
          REGISTER
        </Button>
      </Form>
    </div>
  );
}
