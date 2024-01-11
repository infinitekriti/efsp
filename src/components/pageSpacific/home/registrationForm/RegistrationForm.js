import React, { Fragment, useState } from "react";
//import Button from "../../../common/button/Button";
import UserDetails from "../userDetails/UserDetails";
import { toast } from "react-toastify";
import "./RegistrationForm.scss";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import {validateName} from "../../../common/formValidation/FormValidation"

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    phoneNumber: "",
    city: "",
    password: "",
    confirmPassword: "",
  });

  const [borderColor, setBorderColor] = useState({
    name: "",
    mail: "",
    phoneNumber: "",
    city: "",
    password: "",
    confirmPassword: "",
  });

  const [UserDetail, setUserDetail] = useState([]);

  const handleFocus = (id) => {
    setBorderColor((prevData) => ({
      ...prevData,
      [id]: "blue",
    }));
  };

  const validateName = (value) => value.length >= 7;

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const validatePhoneNumber = (value) => value.length === 10;

  const validateCity = (value) => !!value;

  const validatePassword = (value) =>
    value.length >= 8 &&
    value.length <= 15 &&
    !!value.match(/[a-z]/g) &&
    !!value.match(/[A-Z]/g) &&
    !!value.match(/[0-9]/g);

  const validateConfirmPassword = (value) => value === formData.password;

  const validateMessage = (value) => !!value;

  const handleInputChange = (event) => {
    const { id, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    switch (id) {
      case "name":
        setBorderColor((prevData) => ({
          ...prevData,
          [id]: validateName(value) ? "green" : "red",
        }));
        break;
      case "mail":
        setBorderColor((prevData) => ({
          ...prevData,
          [id]: validateEmail(value) ? "green" : "red",
        }));
        break;
      case "phoneNumber":
        setBorderColor((prevData) => ({
          ...prevData,
          [id]: validatePhoneNumber(value) ? "green" : "red",
        }));
        break;
      case "city":
        setBorderColor((prevData) => ({
          ...prevData,
          [id]: validateCity(value) ? "green" : "red",
        }));
        break;
      case "password":
        setBorderColor((prevData) => ({
          ...prevData,
          [id]: validatePassword(value) ? "green" : "red",
        }));
        break;
      case "confirmPassword":
        setBorderColor((prevData) => ({
          ...prevData,
          [id]: validateConfirmPassword(value) ? "green" : "red",
        }));
        break;
      case "message":
        setBorderColor((prevData) => ({
          ...prevData,
          [id]: validateMessage(value) ? "green" : "red",
        }));
        break;
      default:
        break;
    }
  };

  const handleSignup = () => {
    if (!validateName(formData.name)) {
      console.log("mail");
      setBorderColor((prevData) => ({
        ...prevData,
        name: "red",
      }));
      return;
    } else if (!formData.mail) {
      console.log("mail");
      setBorderColor((prevData) => ({
        ...prevData,
        mail: "red",
      }));
      return;
    } else if (!validatePhoneNumber(formData.phoneNumber)) {
      console.log("phone");
      setBorderColor((prevData) => ({
        ...prevData,
        phoneNumber: "red",
      }));
      return;
    } else if (!validateCity(formData.city)) {
      console.log("password");
      setBorderColor((prevData) => ({
        ...prevData,
        city: "red",
      }));
      return;
    } else if (!validatePassword(formData.password)) {
      console.log("password");
      setBorderColor((prevData) => ({
        ...prevData,
        password: "red",
      }));
      return;
    } else if (!validateConfirmPassword(formData.confirmPassword)) {
      setBorderColor((prevData) => ({
        ...prevData,
        confirmPassword: "red",
      }));
      return;
    } else {
      setUserDetail((prevData) => [...prevData, formData]);
      setBorderColor({
        name: "#969696",
        mail: "#969696",
        phoneNumber: "#969696",
        city: "#969696",
        password: "#969696",
        confirmPassword: "#969696",
      });
      setFormData({
        name: "",
        mail: "",
        phoneNumber: "",
        city: "",
        password: "",
        confirmPassword: "",
      });
      toast.success("Form Saved Successfully");
    }
  };

  return (
    <Fragment>
      <section className="registMain paddingTb-2em">
        <div className="pageContainer">
          <div className="registTitle">
            <h1>Registration Form</h1>
          </div>
          <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
          <Button as="a" variant="primary">
              Button as link
            </Button>
          <div className="registWrap">
            <div className="form">
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Name </label>
                  <input
                    type="text"
                    className="InputFeild"
                    id="name"
                    value={formData.name}
                    placeholder="John Doe"
                    onFocus={() => handleFocus("name")}
                    style={{ borderColor: borderColor.name }}
                    onChange={handleInputChange}
                  />
                  {borderColor.name === "red" && (
                    <span className="formWarning">
                      Minimum length of name is 7
                    </span>
                  )}
                </div>
                <div className="fromInput">
                  <label>Email</label>
                  <input
                    type="email"
                    id="mail"
                    value={formData.mail}
                    onChange={handleInputChange}
                    style={{ borderColor: borderColor.mail }}
                    placeholder="e.g.: Joe@email.com"
                  />
                  {borderColor.mail === "red" && (
                    <span className="formWarning">
                      Please enter a valid email
                    </span>
                  )}
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Phone No.</label>
                  <input
                    type="tel"
                    className="InputFeild"
                    id="phoneNumber"
                    placeholder="9876543223"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    style={{ borderColor: borderColor.phoneNumber }}
                  />
                  {borderColor.phoneNumber === "red" && (
                    <span className="formWarning">
                      Enter a valid phone number
                    </span>
                  )}
                </div>
                <div className="fromInput">
                  <label>City</label>
                  <select
                    name="City"
                    id="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    style={{ borderColor: borderColor.city }}
                  >
                    <option value="">Select</option>
                    <option value="ALABAMA">ALABAMA</option>
                    <option value="ALASKA">ALASKA</option>
                    <option value="AMERICAN SAMOA">AMERICAN SAMOA</option>
                    <option value="ARIZONA">ARIZONA</option>
                    <option value="ARKANSAS">ARKANSAS</option>
                    <option value="CALIFORNIA">CALIFORNIA</option>
                    <option value="COLORADO">COLORADO</option>
                  </select>
                  {borderColor.city === "red" && (
                    <span className="formWarning">Please select a city</span>
                  )}
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Password </label>
                  <input
                    type="password"
                    className="InputFeild"
                    id="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    style={{ borderColor: borderColor.password }}
                  />
                  {borderColor.password === "red" && (
                    <span className="formWarning">
                      Follow the pattern: length must be between 8 to 15,
                      <br /> must have at least one upper case, one lower case,
                      and one number
                    </span>
                  )}
                </div>
                <div className="fromInput">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    onChange={handleInputChange}
                    style={{ borderColor: borderColor.confirmPassword }}
                  />
                  {borderColor.confirmPassword === "red" && (
                    <span className="formWarning">
                      Please enter the same password to confirm
                    </span>
                  )}
                </div>
              </div>

              <div className="fromInput" onClick={handleSignup}>
                <Button title="Signup" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <UserDetails UserDetail={UserDetail} />
    </Fragment>
  );
};

export default RegistrationForm;
