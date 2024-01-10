import React, { Fragment, useState } from "react";
import "./LroForm.scss";
import Button from "../../common/button/Button";
// import PhoneInput from "react-phone-input-2";
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
  const [lroEni, setlroEni] = useState({
    lroEni:"",
    lroSubOrdinateEin:"",
  });
  // const [lroSubOrdinateEin , setlroSubOrdinateEin] = useState();

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
      case "lroZip1":
        // const ZipRegex = /^\d{5}$/;
        feildColour(name, /^\d{5}$/.test(value));
        break;
      case "lroZip2":
        feildColour(name, /^\d{4}$/.test(value));
        break;
      case "lroEmail":
        feildColour(name, validateEmail(value));
        break;
      case "lroPassword":
        feildColour(name, validatePassword(value, 8, 50));
        break;
      case "lroFaxNumber":
        const FaxNumber = formatePhoneNumber(value);
        setlroFaxNumber(FaxNumber);
        feildColour(name, validatePhoneNumber(FaxNumber));
        break;
      case "lroPhoneNumber":
        const PhoneNumber = formatePhoneNumber(value);
        setlroPhoneNumber(PhoneNumber);
        feildColour(name, validatePhoneNumber(PhoneNumber));
        break;
      case "lroAccountType":
        feildColour(name, /^.{1}$/.test(value));
        break;
      case "lroExt":
        feildColour(name, /^\d{2,4}$/.test(value));
        break;
      case "lroEni":
        const Eni1 = formatEin(value);
        setlroEni((prevData) => ({
          ...prevData,
          [name]: Eni1,
        }));
        // setlroEni(Eni1);
        feildColour(name, validateEni(Eni1));
        break;
      case "lroSubOrdinateEin":
        // console.log(value);
        const Eni2 = formatEin(value);
        setlroEni((prevData) => ({
          ...prevData,
          [name]: Eni2,
        }));
        // setlroSubOrdinateEin(Eni2);
        feildColour(name, validateEni(Eni2));
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
                    onBlur={handleInputChangeBlur}
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
                    onBlur={handleInputChangeBlur}
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
                    onBlur={handleInputChangeBlur}
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
                    onBlur={handleInputChangeBlur}
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
                    onBlur={handleInputChangeBlur}
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
                <div className="fromInput">
                  <label>Zip2</label>
                  <input
                    type="tel"
                    placeholder="2107"
                    name="lroZip2"
                    style={{ borderColor: borderColor.lroZip2 }}
                    onChange={handleInputChange}
                    onFocus={handleInputChangeFocus}
                    onBlur={handleInputChangeBlur}
                  />
                  {borderColor.lroZip2 === "red" && (
                    <span className="formWarning"></span>
                  )}
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Fax</label>
                  <input
                    type="tel"
                    id="phone"
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
                <div className="fromInput">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
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
                    onBlur={handleInputChangeBlur}
                  />
                  {borderColor.lroEmail === "red" && (
                    <span className="formWarning"></span>
                  )}
                </div>
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
                  <input
                    type="tel"
                    id="phone"
                    placeholder="23-7363262"
                    name="lroEni"
                    value={lroEni.lroEni}
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
                    value={lroEni.lroSubOrdinateEin}
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
