import React, { Fragment, useState } from "react";
import "./LroForm.scss";
import Button from "../../common/button/Button";
import PhoneInput from "react-phone-input-2";
import {
  validateText,
  validateEmail,
  validatePhoneNumber,
} from "../../common/formValidation/FormValidation";

const LroForm = () => {
  const [lrocontacts , setlrocontacts] = useState({
    lroFaxNumber:"+1"
  });
  const [borderColor, setBorderColor] = useState({
    lroName: "",
    lroContact: "",
    lroAddress1: "",
    lroAddress2: "",
    lroAddress3: "",
    lroFaxNumber: "",
    lroEmail: "",
  });

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
  const handleInputChangeFocus = (event) => {
    const { name } = event.target;
    defaultInputColour(name);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "lroName":
        feildColour(name, validateText(value, 3, 100));
        break;
      case "lroContact":
        feildColour(name, validateText(value, 3, 50));
        break;
      case "lroAddress1":
        feildColour(name, validateText(value, 3, 40));
        break;
      case "lroAddress2":
        feildColour(name, validateText(value, 3, 40));
        break;
      case "lroAddress3":
        feildColour(name, validateText(value, 3, 40));
        break;
      case "lroFaxNumber":
        setlrocontacts((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        feildColour(name, validatePhoneNumber(value));
        break;
      case "lroEmail":
        feildColour(name, validateEmail(value));
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
            <h1>Lro Form</h1>
          </div>
          <div className="lroWrap">
            <div className="form">
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Lb Number </label>
                  <select>
                    <option>Select</option>
                  </select>
                </div>
                <div className="fromInput">
                  <label>LRO Number </label>
                  <input
                    type="text"
                    className="InputFeild"
                    id="name"
                    placeholder="300"
                    readOnly
                  />
                </div>
                <div className="fromInput">
                  <label>LRO Name</label>
                  <input
                    type="text"
                    name="lroName"
                    placeholder="jhon Deo"
                    style={{ borderColor: borderColor.lroName }}
                    onFocus={handleInputChangeFocus}
                    onChange={handleInputChange}
                  />
                  {borderColor.lroName === "red" && (
                    <span className="formWarning"></span>
                  )}
                </div>
              </div>
              <div className="formWrapIn">
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
                  />
                  {borderColor.lroContact === "red" && (
                    <span className="formWarning"></span>
                  )}
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Address1</label>
                  <textarea
                    rows="2"
                    placeholder="address1"
                    name="lroAddress1"
                    style={{ borderColor: borderColor.lroAddress1 }}
                    onChange={handleInputChange}
                    onFocus={handleInputChangeFocus}
                  />
                  {borderColor.lroAddress1 === "red" && (
                    <span className="formWarning"></span>
                  )}
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Address2</label>
                  <textarea
                    rows="2"
                    placeholder="address2"
                    name="lroAddress2"
                    style={{ borderColor: borderColor.lroAddress2 }}
                    onChange={handleInputChange}
                    onFocus={handleInputChangeFocus}
                  />
                  {borderColor.lroAddress2 === "red" && (
                    <span className="formWarning"></span>
                  )}
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Address3</label>
                  <textarea
                    rows="2"
                    placeholder="address3"
                    name="lroAddress3"
                    style={{ borderColor: borderColor.lroAddress3 }}
                    onChange={handleInputChange}
                    onFocus={handleInputChangeFocus}
                  />
                  {borderColor.lroAddress3 === "red" && (
                    <span className="formWarning"></span>
                  )}
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>City</label>
                  <select>
                    <option>Select</option>
                  </select>
                </div>
                <div className="fromInput">
                  <label>State Code</label>
                  <select>
                    <option>Select</option>
                  </select>
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Zip1</label>
                  <input type="number" placeholder="123456" />
                </div>
                <div className="fromInput">
                  <label>Zip2</label>
                  <input type="number" placeholder="123456" />
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Fax</label>
                  {/* <PhoneInput
                    name="phoneNumber"
                    type="text"
                    country={"us"}
                    enableAreaCodes={true}
                    onlyCountries={["us"]}
                    areaCodes={{ us: ["332"] }}
                    inputProps={{
                      country: "us",
                      required: true,
                      autoFocus: true,
                    }}
                  /> */}
                  <input
                    type="tel"
                    id="phone"
                    name="lroFaxNumber"
                    value={lrocontacts.lroFaxNumber}
                    style={{ borderColor: borderColor.lroFaxNumber }}
                    onChange={handleInputChange}
                    onFocus={handleInputChangeFocus}
                  />
                  {borderColor.lroFaxNumber === "red" && (
                    <span className="formWarning"></span>
                  )}
                </div>
                <div className="fromInput">
                  <label>Phone Number</label>
                  <PhoneInput
                    name="phoneNumber"
                    type="text"
                    country={"us"}
                    enableAreaCodes={true}
                    onlyCountries={["us"]}
                    areaCodes={{ us: ["332"] }}
                    inputProps={{
                      country: "us",
                      required: true,
                      autoFocus: true,
                    }}
                  />
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="infinite@Alyx.com"
                    name="lroEmail"
                    style={{ borderColor: borderColor.lroEmail }}
                    onChange={handleInputChange}
                    onFocus={handleInputChangeFocus}
                  />
                  {borderColor.lroEmail === "red" && (
                    <span className="formWarning"></span>
                  )}
                </div>
                <div className="fromInput">
                  <label>Password</label>
                  <input type="password" placeholder="" />
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Bank Name</label>
                  <input type="text" placeholder="" />
                </div>
                <div className="fromInput">
                  <label>Account Number</label>
                  <input type="text" placeholder="" />
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Account Type</label>
                  <input type="text" placeholder="" />
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Salut</label>
                  <select>
                    <option value="">select</option>
                  </select>
                </div>
                <div className="fromInput">
                  <label>Ext</label>
                  <input type="number" placeholder="" />
                </div>
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
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Ein</label>
                  <input type="text" placeholder="" />
                </div>
                <div className="fromInput">
                  <label>Subordinateein</label>
                  <input type="text" placeholder="" />
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Website Link</label>
                  <input type="text" placeholder="" />
                </div>
                <div className="fromInput">
                  <label>Abano</label>
                  <input type="text" placeholder="" />
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Einextension</label>
                  <input type="text" placeholder="" />
                </div>
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
