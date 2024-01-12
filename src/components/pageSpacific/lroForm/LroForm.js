import React, { Fragment, useState } from "react";
import "./LroForm.scss";
import Button from "../../common/button/Button";
import {
  validateText,
  validateEmail,
  validatePhoneNumber,
  formatePhoneNumber,
  validatePassword,
  validateEni,
  formatEin,
} from "../../common/formValidation/FormValidation";

const LroForm = () => {
  const [lroFaxNumber, setlroFaxNumber] = useState("+1");
  const [lroPhoneNumber, setlroPhoneNumber] = useState("+1");
  const [lroEni, setlroEni] = useState("");
  const [lroSubOrdinateEin, setlroSubOrdinateEin] = useState("");
  const [LRODetails, setLRODetails] = useState({});

  const [borderColor, setBorderColor] = useState({});

  const defaultInputColour = (name) => {
    setBorderColor((prevData) => ({
      ...prevData,
      [name]: "blue",
    }));
  };

  const feildColour = (name, validate) => {
    setBorderColor((prevData) => ({
      ...prevData,
      [name]: validate ? "green" : "red",
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
  const handleInputChangeFocus = (event) => {
    const { name, value } = event.target;
    if (value.length === 0 || value === "+1") {
      defaultInputColour(name);
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "lroName":
        feildColour(name, validateText(value, 3, 100), value);
        break;
      case "lroContact":
        feildColour(name, validateText(value, 3, 50), value);
        break;
      case "lroAddress1":
        feildColour(name, validateText(value, 3, 40), value);
        break;
      case "lroAddress2":
        feildColour(name, validateText(value, 3, 40), value);
        break;
      case "lroAddress3":
        feildColour(name, validateText(value, 3, 40), value);
        break;
      case "lroZip1":
        feildColour(name, /^\d{5}$/.test(value), value);
        break;
      case "lroZip2":
        feildColour(name, /^\d{4}$/.test(value), value);
        break;
      case "lroEmail":
        feildColour(name, validateEmail(value), value);
        break;
      case "lroPassword":
        feildColour(name, validatePassword(value, 8, 50), value);
        setLRODetails(name, value);
        setLRODetails((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        break;
      case "lroCPassword":
        const password = LRODetails.lroPassword;
        feildColour(name, validateCPassword(value, password));
        break;
      case "lroFaxNumber":
        const FaxNumber = formatePhoneNumber(value);
        setlroFaxNumber(FaxNumber);
        feildColour(name, validatePhoneNumber(FaxNumber), FaxNumber);
        break;
      case "lroPhoneNumber":
        const PhoneNumber = formatePhoneNumber(value);
        setlroPhoneNumber(PhoneNumber);
        feildColour(name, validatePhoneNumber(PhoneNumber), PhoneNumber);
        break;
      case "lroAccountType":
        feildColour(name, /^.{1}$/.test(value));
        break;
      case "lroExt":
        feildColour(name, /^\d{2,4}$/.test(value), value);
        break;
      case "lroEni":
        const Eni1 = formatEin(value);
        setlroEni(Eni1);
        feildColour(name, validateEni(Eni1), Eni1);
        break;
      case "lroSubOrdinateEin":
        const Eni2 = formatEin(value);
        setlroSubOrdinateEin(Eni2);
        feildColour(name, validateEni(Eni2), Eni2);
        break;
      default:
        break;
    }
  };
  return (
    <Fragment>
      <section className="lroMain paddingTb-2em">
        <div className="pageContainer">
          <div className="lroTitle">
            <h1>LRO Registration Form</h1>
          </div>
          <div className="lroWrap">
            <div className="form">
              <div className="lroSubTitle">
                <h5>Registration Details</h5>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Name of the Local Recipient Organization</label>
                  <input
                    type="text"
                    name="lroName"
                    placeholder="LRO Name"
                    style={{ borderColor: borderColor.lroName }}
                    onFocus={handleInputChangeFocus}
                    onChange={handleInputChange}
                    onBlur={handleInputChangeBlur}
                  />
                  {borderColor.lroName === "red" && (
                    <span className="formWarning"></span>
                  )}
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput" style={{ width: "auto" }}>
                  <label>Salut</label>
                  <select>
                    <option value="">select</option>
                  </select>
                </div>
                <div className="fromInput">
                  <label>Contact</label>
                  <input
                    type="text"
                    className="InputFeild"
                    name="lroContact"
                    placeholder="contact"
                    style={{ borderColor: borderColor.lroContact }}
                    onChange={handleInputChange}
                    onFocus={handleInputChangeFocus}
                    onBlur={handleInputChangeBlur}
                  />
                  {borderColor.lroContact === "red" && (
                    <span className="formWarning"></span>
                  )}
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Email / UserID</label>
                  <input
                    type="email"
                    placeholder="infinite@Alyx.com"
                    name="lroEmail"
                    style={{ borderColor: borderColor.lroEmail }}
                    onChange={handleInputChange}
                    onFocus={handleInputChangeFocus}
                    onBlur={handleInputChangeBlur}
                  />
                  {borderColor.lroEmail === "red" && (
                    <span className="formWarning"></span>
                  )}
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder=""
                    name="lroPassword"
                    style={{ borderColor: borderColor.lroPassword }}
                    onChange={handleInputChange}
                    onFocus={handleInputChangeFocus}
                    onBlur={handleInputChangeBlur}
                  />
                  {borderColor.lroPassword === "red" && (
                    <span className="formWarning"></span>
                  )}
                </div>
                <div className="fromInput">
                  <label>Re-enter Password</label>
                  <input
                    type="password"
                    placeholder=""
                    name="lroCPassword"
                    style={{ borderColor: borderColor.lroCPassword }}
                    onChange={handleInputChange}
                    onFocus={handleInputChangeFocus}
                    onBlur={handleInputChangeBlur}
                  />
                  {borderColor.lroPassword === "red" && (
                    <span className="formWarning"></span>
                  )}
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Captcha</label>
                  <div
                    className="fromInput"
                    style={{
                      flexDirection: "row",
                      margin: "0",
                      padding: "0",
                    }}
                  >
                    <div
                      style={{
                        borderColor: borderColor.lroCaptcha,
                        width: "30%",
                        textAlign: "center",
                      }}
                    >
                      12 + 27{" "}
                    </div>
                    <input
                      type="text"
                      placeholder=""
                      name="lroCaptcha"
                      style={{
                        borderColor: borderColor.lroCaptcha,
                        width: "80%",
                      }}
                      onChange={handleInputChange}
                      onFocus={handleInputChangeFocus}
                      onBlur={handleInputChangeBlur}
                    />
                  </div>
                  {borderColor.lroCaptchas === "red" && (
                    <span className="formWarning"></span>
                  )}
                </div>
              </div>
              <br />
              <div className="lroSubTitle">
                <h5>Address Information</h5>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>LRO Name </label>
                  <input
                    type="text"
                    className="InputFeild"
                    id="name"
                    placeholder="300"
                    readOnly
                  />
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Address1</label>
                  <input
                    type="text"
                    placeholder="address1"
                    name="lroAddress1"
                    style={{ borderColor: borderColor.lroAddress1 }}
                    onChange={handleInputChange}
                    onFocus={handleInputChangeFocus}
                    onBlur={handleInputChangeBlur}
                  />
                  {borderColor.lroAddress1 === "red" && (
                    <span className="formWarning"></span>
                  )}
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <input
                    type="text"
                    placeholder="address2"
                    name="lroAddress2"
                    style={{ borderColor: borderColor.lroAddress2 }}
                    onChange={handleInputChange}
                    onFocus={handleInputChangeFocus}
                    onBlur={handleInputChangeBlur}
                  />
                  {borderColor.lroAddress2 === "red" && (
                    <span className="formWarning"></span>
                  )}
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <input
                    type="text"
                    placeholder="address3"
                    name="lroAddress3"
                    style={{ borderColor: borderColor.lroAddress3 }}
                    onChange={handleInputChange}
                    onFocus={handleInputChangeFocus}
                    onBlur={handleInputChangeBlur}
                  />
                  {borderColor.lroAddress3 === "red" && (
                    <span className="formWarning"></span>
                  )}
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>State Code</label>
                  <select>
                    <option>Select</option>
                  </select>
                </div>
                <div className="fromInput">
                  <label>City</label>
                  <select>
                    <option>Select</option>
                  </select>
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput" style={{ width: "35%" }}>
                  <label>Zip Code</label>
                  <input
                    type="tel"
                    placeholder="36092"
                    name="lroZip1"
                    style={{ borderColor: borderColor.lroZip1 }}
                    onChange={handleInputChange}
                    onFocus={handleInputChangeFocus}
                    onBlur={handleInputChangeBlur}
                  />
                  {borderColor.lroZip1 === "red" && (
                    <span className="formWarning"></span>
                  )}
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput" style={{ width: "15%" }}>
                  <label>Ext</label>
                  <input
                    type="number"
                    placeholder=""
                    name="lroExt"
                    style={{ borderColor: borderColor.lroExt }}
                    onChange={handleInputChange}
                    onFocus={handleInputChangeFocus}
                    onBlur={handleInputChangeBlur}
                  />
                  {borderColor.lroExt === "red" && (
                    <span className="formWarning"></span>
                  )}
                </div>
                <div className="fromInput">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="lroPhoneNumber"
                    value={lroPhoneNumber}
                    style={{ borderColor: borderColor.lroPhoneNumber }}
                    onChange={handleInputChange}
                    onFocus={handleInputChangeFocus}
                    onBlur={handleInputChangeBlur}
                  />
                  {borderColor.lroFaxNumber === "red" && (
                    <span className="formWarning"></span>
                  )}
                </div>
                <div className="fromInput">
                  <label>Fax</label>
                  <input
                    type="tel"
                    name="lroFaxNumber"
                    value={lroFaxNumber}
                    style={{ borderColor: borderColor.lroFaxNumber }}
                    onChange={handleInputChange}
                    onFocus={handleInputChangeFocus}
                    onBlur={handleInputChangeBlur}
                  />
                  {borderColor.lroFaxNumber === "red" && (
                    <span className="formWarning"></span>
                  )}
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Website Link</label>
                  <input type="text" placeholder="" />
                </div>
              </div>

              <br />
              <div className="lroSubTitle">
                <h5>Employee Identification Information</h5>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>LRO Name </label>
                  <input
                    type="text"
                    className="InputFeild"
                    id="name"
                    placeholder="300"
                    readOnly
                  />
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput" style={{ width: "15%" }}>
                  <label>Ein Extension</label>
                  <input type="text" placeholder="" />
                </div>
                <div className="fromInput">
                  <label>Ein</label>
                  <input
                    type="tel"
                    placeholder="23-7363262"
                    name="lroEni"
                    value={lroEni}
                    style={{ borderColor: borderColor.lroEni }}
                    onChange={handleInputChange}
                    onFocus={handleInputChangeFocus}
                    onBlur={handleInputChangeBlur}
                  />
                  {borderColor.lroEni === "red" && (
                    <span className="formWarning"></span>
                  )}
                </div>
                <div className="fromInput">
                  <label>Sub Ordinate Ein</label>
                  <input
                    type="text"
                    placeholder="23-7363262"
                    name="lroSubOrdinateEin"
                    value={lroSubOrdinateEin}
                    style={{ borderColor: borderColor.lroSubOrdinateEin }}
                    onChange={handleInputChange}
                    onFocus={handleInputChangeFocus}
                    onBlur={handleInputChangeBlur}
                  />
                  {borderColor.lroSubOrdinateEin === "red" && (
                    <span className="formWarning"></span>
                  )}
                </div>
              </div>
              <br />
              <div className="lroSubTitle">
                <h5>Bank Details</h5>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>LRO Name </label>
                  <input
                    type="text"
                    className="InputFeild"
                    id="name"
                    placeholder="300"
                    readOnly
                  />
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Name as per Bank Records</label>
                  <input type="text" placeholder="" />
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Bank Name</label>
                  <input type="text" placeholder="" />
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput" style={{ width: "20%" }}>
                  <label>Account Type</label>
                  <input
                    type="text"
                    placeholder="S"
                    name="lroAccountType"
                    style={{ borderColor: borderColor.lroAccountType }}
                    onChange={handleInputChange}
                    onFocus={handleInputChangeFocus}
                    onBlur={handleInputChangeBlur}
                  />
                  {borderColor.lroAccountType === "red" && (
                    <span className="formWarning"></span>
                  )}
                </div>
                <div className="fromInput">
                  <label>Account Number</label>
                  <input type="text" placeholder="" />
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Abano</label>
                  <input type="text" placeholder="" />
                </div>
              </div>

              <br />
              <div className="lroSubTitle">
                <h5>Afiliation Details</h5>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Affiliate</label>
                  <select>
                    <option value="">select</option>
                  </select>
                </div>
                <div className="fromInput">
                  <label>Target 1</label>
                  <select>
                    <option value="">select</option>
                  </select>
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Target 2</label>
                  <select>
                    <option value="">select</option>
                  </select>
                </div>
                <div className="fromInput">
                  <label>Target 3</label>
                  <select>
                    <option value="">select</option>
                  </select>
                </div>
              </div>

              <br />
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Eftrcvd</label>
                  <input type="date" id="eftrcvd" name="eftrcvd" />
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput formCheck">
                  <div className="checkBoxContainer">
                    <input type="checkbox" id="super1" name="super1" />
                    <label>Super1 </label>
                  </div>
                  <div className="checkBoxContainer">
                    <input type="checkbox" id="super2" name="super2" />
                    <label> Super2 </label>
                  </div>
                  <div className="checkBoxContainer">
                    <input
                      type="checkbox"
                      id="fiscalagent"
                      name="fiscalagent"
                    />
                    <label> Fiscalagent </label>
                  </div>
                </div>
              </div>
              <div className="fromInput">
                <Button title="Signup" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default LroForm;
