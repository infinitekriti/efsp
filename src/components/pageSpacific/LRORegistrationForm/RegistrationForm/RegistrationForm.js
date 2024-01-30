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
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { useDispatch } from "react-redux";
import { updateFormData } from "../../../../redux/reducers/HomeSlice";

export default function RegistrationForm({ setModalShow }) {
  const [borderColor, setBorderColor] = useState({});
  const [ErrorMessage, setErrorMessage] = useState({});
  const [LRORegisterDetails, setLRORegisterDetails] = useState({
    lroName: "",
    lroSalute: "Select",
    lroContact: "",
    lroEmail: "",
    lroPassword: "",
    lroCPassword: "",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    loadCaptchaEnginge(6, "#F0F0E44D");
  }, []);
  const SErrorMessage = (name, Message, validate) => {
    setErrorMessage((prevData) => ({
      ...prevData,
      [name]: validate ? "" : Message,
    }));
  };
  const feildColour = (name, validate) => {
    switch (name) {
      case "lroName":
        SErrorMessage(name, "Enter Valid Name", validate);
        break;
      case "lroSalute":
        SErrorMessage(name, "Select valid Value", validate);
        break;
      case "lroContact":
        SErrorMessage(name, "Enter Valid Name", validate);
        break;
      case "lroEmail":
        SErrorMessage(name, "Enter Valid Email formate", validate);
        break;
      case "lroPassword":
        SErrorMessage(name, "Match the Password Pattern", validate);
        break;
      case "lroCPassword":
        SErrorMessage(name, "Match the Password", validate);
        break;
      default:
        break;
    }
    setBorderColor((prevData) => ({
      ...prevData,
      [name]: validate ? "#dee2e6" : "#A30000",
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
      if (value === "") {
        SErrorMessage(name, "Select the Salutation");
        setBorderColor((prevData) => ({
          ...prevData,
          [name]: "#A30000",
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
        [name]: "#A30000",
      }));
    }
  };
  const SetLRODetails = (name, value) => {
    setLRORegisterDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "lroName":
        SetLRODetails(name, value);
        feildColour(name, validateText(value, 3, 100), value);
        SErrorMessage(name, "Enter valid name");
        break;
      case "lroSalute":
        SetLRODetails(name, value);
        feildColour(name, validateSalute(value));
        SErrorMessage(name, "Select the salutation");
        break;
      case "lroContact":
        SetLRODetails(name, value);
        feildColour(name, validateText(value, 3, 50), value);
        SErrorMessage(name, "Enter the name");
        break;
      case "lroEmail":
        SetLRODetails(name, value);
        feildColour(name, validateEmail(value), value);
        SErrorMessage(name, "Enter Valid Email");
        break;
      case "lroPassword":
        SetLRODetails(name, value);
        feildColour(name, validatePassword(value, 8, 50), value);
        SErrorMessage(name, "Enter the correct password pattern");
        break;
      case "lroCPassword":
        const password = LRORegisterDetails.lroPassword;
        SetLRODetails(name, value);
        feildColour(name, validateCPassword(value, password));
        SErrorMessage(name, "password and Re-enter password must be same");
        break;
      default:
        break;
    }
  };

  const handleRegister = () => {
    let Message = "Enter the required feilds";
    if (LRORegisterDetails.lroName === "") {
      SErrorMessage("Register", Message);
      feildColour("lroName", false);
    } else if (LRORegisterDetails.lroSalute === "Select") {
      feildColour("lroSalute", false);
      SErrorMessage("Register", Message);
    } else if (LRORegisterDetails.lroContact === "") {
      feildColour("lroContact", false);
      SErrorMessage("Register", Message);
    } else if (LRORegisterDetails.lroEmail === "") {
      feildColour("lroEmail", false);
      SErrorMessage("Register", Message);
    } else if (LRORegisterDetails.lroPassword === "") {
      feildColour("lroPassword", false);
      SErrorMessage("Register", Message);
    } else if (LRORegisterDetails.lroCPassword === "") {
      feildColour("lroCPassword", false);
      SErrorMessage("Register", Message);
    } else {
      let userCaptcha = document.getElementById("user_captcha_input").value;
      if (!validateCaptcha(userCaptcha)) {
        SErrorMessage("user_captcha_input", "Enter the Vaild Captcha");
      } else {
        setModalShow(true);
        dispatch(
          updateFormData({
            payload: LRORegisterDetails,
            name: "lroRegisterDetails",
          })
        );
      }
    }
  };
  return (
    <div className="registration-form">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Local Recipient Organization Name</Form.Label>
          <span className="requred">* </span>
          <Form.Control
            type="text"
            placeholder="Enter Local Recipient Organization Name"
            name="lroName"
            value={LRORegisterDetails.lroName}
            style={{ borderColor: borderColor.lroName }}
            onChange={handleInputChange}
            onBlur={handleInputChangeBlur}
          />
          {borderColor.lroName === "#A30000" && (
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
                  value={LRORegisterDetails.lroSalute}
                  style={{ borderColor: borderColor.lroSalute }}
                  onChange={handleInputChange}
                  onBlur={handleInputChangeBlur}
                >
                  <option value="">Select</option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                </Form.Select>
                {borderColor.lroSalute === "#A30000" && (
                  <span className="formWarning">{ErrorMessage.lroSalute}</span>
                )}
              </Form.Group>
            </Col>
            <Col xs={9}>
              <Form.Group className="mb-3" controlId="formLroContact">
                <Form.Control
                  type="text"
                  placeholder="Enter LRO Representative Name"
                  name="lroContact"
                  value={LRORegisterDetails.lroContact}
                  style={{ borderColor: borderColor.lroContact }}
                  onChange={handleInputChange}
                  onBlur={handleInputChangeBlur}
                />
                {borderColor.lroContact === "#A30000" && (
                  <span className="formWarning">{ErrorMessage.lroContact}</span>
                )}
              </Form.Group>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email / UserID</Form.Label>
          <span className="requred">* </span>
          <Form.Control
            type="email"
            placeholder="infinite@Alyx.com"
            name="lroEmail"
            value={LRORegisterDetails.lroEmail}
            style={{ borderColor: borderColor.lroEmail }}
            onChange={handleInputChange}
            onBlur={handleInputChangeBlur}
          />
          {borderColor.lroEmail === "#A30000" && (
            <span className="formWarning">{ErrorMessage.lroEmail}</span>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <span className="requred">* </span>
          <Form.Control
            type="password"
            placeholder="xxxxxxxxx"
            name="lroPassword"
            value={LRORegisterDetails.lroPassword}
            style={{ borderColor: borderColor.lroPassword }}
            onChange={handleInputChange}
            onBlur={handleInputChangeBlur}
          />
          {borderColor.lroPassword === "#A30000" && (
            <span className="formWarning">{ErrorMessage.lroPassword}</span>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Re-enter Password</Form.Label>
          <span className="requred">* </span>
          <Form.Control
            type="password"
            placeholder="xxxxxxxxx"
            name="lroCPassword"
            value={LRORegisterDetails.lroCPassword}
            style={{ borderColor: borderColor.lroCPassword }}
            onChange={handleInputChange}
            onBlur={handleInputChangeBlur}
          />
          {borderColor.lroCPassword === "#A30000" && (
            <span className="formWarning">{ErrorMessage.lroCPassword}</span>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Captcha</Form.Label>
          <Row>
            <Col xs={6} sm={4} className="captcha">
              <LoadCanvasTemplateNoReload />
            </Col>
            <Col xs={6} sm={5}>
              <Form.Control
                placeholder="Enter Captcha Value"
                id="user_captcha_input"
                name="user_captcha_input"
                type="text"
              />
            </Col>
          </Row>
          {ErrorMessage.user_captcha_input !== "" && (
            <span className="formWarning">
              {ErrorMessage.user_captcha_input}
            </span>
          )}
        </Form.Group>
        {ErrorMessage.Register !== "" && (
          <span className="formWarning">{ErrorMessage.Register}</span>
        )}
        <Button className="mt-4 w-100" onClick={handleRegister}>
          REGISTER
        </Button>
      </Form>
    </div>
  );
}
