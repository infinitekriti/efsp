import React, { Fragment, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import saveIcon from "../../../../assets/images/svgIcons/save-icon.svg";
import arrowRight from "../../../../assets/images/svgIcons/arrow-right.svg";
import { Button } from "react-bootstrap";
import {
  validateText,
  validatePhoneNumber,
  formatePhoneNumber,
  validateFaxNumber,
  formateFaxNumber,
  formateZip,
  validateZip,
} from "../../../common/formValidation/FormValidation";
import { useDispatch, useSelector } from "react-redux";
import {
  clearFormData,
  updateFormData,
} from "../../../../redux/reducers/HomeSlice";
import Dropdown from "../../../common/dropdown/Dropdown";
import { onStatesDataAsync } from "../../../../redux/actions/HomeActions";

export default function AddressForm({ newTabData, activeTab, setActiveTab }) {
  const [borderColor, setBorderColor] = useState({});
  const [ErrorMessage, setErrorMessage] = useState({});
  const { addressInformation, states } = useSelector(
    (state) => state.HomeReducer
  );
  const [formData, setFormData] = useState(addressInformation);
  const dispatch = useDispatch();

  useEffect(() => {
    setFormData(addressInformation);
  }, [addressInformation]);
  useEffect(() => {
    dispatch(onStatesDataAsync());
  }, []);
  const onSaveHandler = () => {
    dispatch(updateFormData({ payload: formData, name: "addressInformation" }));
  };
  const onClearData = () => {
    dispatch(clearFormData({ name: "addressInformation" }));
  };
  const SErrorMessage = (name, Message, validate) => {
    setErrorMessage((prevData) => ({
      ...prevData,
      [name]: validate ? "" : Message,
    }));
  };

  const feildColour = (name, validate) => {
    switch (name) {
      case "lroAddress1":
        SErrorMessage(name, "Enter the valid Address", validate);
        break;
      case "lroAddress2":
        SErrorMessage(name, "Enter the valid Address", validate);
        break;
      case "lroState":
        SErrorMessage(name, "Select the State", validate);
        break;
      case "lroCity":
        SErrorMessage(name, "Select the City", validate);
        break;
      case "lroZip":
        SErrorMessage(name, "Enter the Zip code", validate);
        break;
      case "lroExt":
        SErrorMessage(name, "Enter the Extention", validate);
        break;
      case "lroPhoneNumber":
        SErrorMessage(name, "Enter the Phone Number", validate);
        break;
      case "lroFaxNumber":
        SErrorMessage(name, "Enter the Fax Number", validate);
        break;
      case "lroUID":
        SErrorMessage(name, "Enter the UID", validate);
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
    if (value.length === 0 || value === "+1") {
      switch (name) {
        case "lroAddress1":
          SErrorMessage(name, "Enter the Address");
          break;
        case "lroAddress2":
          SErrorMessage(name, "Enter the Address");
          break;
        case "lroState":
          SErrorMessage(name, "Select the State");
          break;
        case "lroCity":
          SErrorMessage(name, "Select the City");
          break;
        case "lroZip":
          SErrorMessage(name, "Enter the Zip code");
          break;
        case "lroExt":
          SErrorMessage(name, "Enter the Extention");
          break;
        case "lroPhoneNumber":
          SErrorMessage(name, "Enter the Phone Number");
          break;
        case "lroFaxNumber":
          SErrorMessage(name, "Enter the Fax Number");
          break;
        case "lroUID":
          SErrorMessage(name, "Enter the UID");
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
    const exceptionNames = [
      "lroZip",
      "lroPhoneNumber",
      "lroFaxNumber",
      "lroUID",
    ];
    if (!exceptionNames.includes(name)) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
    switch (name) {
      case "lroAddress1":
        feildColour(name, validateText(value, 3, 40), value);
        break;
      case "lroAddress2":
        feildColour(name, validateText(value, 3, 40), value);
        break;
      case "lroZip":
        const zip = formateZip(value);
        setFormData((prevData) => ({
          ...prevData,
          lroZip: zip,
        }));
        feildColour(name, validateZip(zip), zip);
        break;
      case "lroExt":
        break;
      case "lroState":
        feildColour(name, validateText(value, 1), value);
        break;
      case "lroCity":
        feildColour(name, validateText(value, 1), value);
        break;
      case "lroPhoneNumber":
        const PhoneNumber = formatePhoneNumber(value);
        setFormData((prevData) => ({
          ...prevData,
          lroPhoneNumber: PhoneNumber,
        }));
        feildColour(name, validatePhoneNumber(PhoneNumber), PhoneNumber);
        break;
      case "lroFaxNumber":
        const FaxNumber = formateFaxNumber(value);
        setFormData((prevData) => ({
          ...prevData,
          lroFaxNumber: FaxNumber,
        }));
        feildColour(name, validateFaxNumber(FaxNumber), FaxNumber);
        break;
      case "lroUID":
        const UID = formateFaxNumber(value);
        setFormData((prevData) => ({
          ...prevData,
          lroUID: UID,
        }));
        feildColour(name, validateFaxNumber(UID), UID);
        break;
      default:
        break;
    }
  };

  const handleNext = () => {
    onSaveHandler();
    const currentTabIndex = newTabData.findIndex(
      (tab) => tab.id === activeTab.id
    );
    if (currentTabIndex < newTabData.length - 1) {
      setActiveTab(newTabData[currentTabIndex + 1]);
    }
  };

  const stateOptions = states;

  const handleSelect = (selectedValue, name) => {
    const value = selectedValue;
    switch (name) {
      case "lroState":
        setFormData((prevData) => ({
          ...prevData,
          lroState: value,
        }));
        console.log(value);
        break;
      case "lroCity":
        setFormData((prevData) => ({
          ...prevData,
          lroCity: value,
        }));
        console.log(value);
        break;
      default:
        break;
    }
  };
  const {
    lroAddress1,
    lroAddress2,
    lroAddress3,
    lroZip,
    lroCity,
    lroState,
    lroExt,
    lroPhoneNumber,
    lroFaxNumber,
    lroUID,
  } = formData;
  return (
    <Fragment>
      <div className="address-info-main">
        <div className="address-step-title d-flex justify-content-between mb-3">
          <h6>Step 2. Address Information</h6>
          <div className="address-step-save " onClick={onSaveHandler}>
            <img src={saveIcon} alt="" />
          </div>
        </div>
        <div className="lro-name mb-3">
          <label>Local Recipient Organization Name:</label> <b>Name</b>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="lroAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Building, Apartment, Complex"
              name="lroAddress1"
              value={lroAddress1}
              style={{ borderColor: borderColor.lroAddress1 }}
              onChange={handleInputChange}
              onBlur={handleInputChangeBlur}
            />
            {borderColor.lroAddress1 === "red" && (
              <span className="formWarning">{ErrorMessage.lroAddress1}</span>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="lroAddress2">
            <Form.Control
              type="text"
              placeholder="Flat no., Room, Office"
              name="lroAddress2"
              value={lroAddress2}
              style={{ borderColor: borderColor.lroAddress2 }}
              onChange={handleInputChange}
              onBlur={handleInputChangeBlur}
            />
            {borderColor.lroAddress2 === "red" && (
              <span className="formWarning">{ErrorMessage.lroAddress2}</span>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="lroAddress3">
            <Form.Control
              type="text"
              placeholder="More Details"
              name="lroAddress3"
              value={lroAddress3}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Row>
            <Col xs={12} sm={12} md={4} lg={4}>
              <Form.Group className="mb-3" controlId="formZip">
                <Form.Label>Zip</Form.Label>
                <span className="requred">* </span>
                <Form.Control
                  type="tel"
                  placeholder="Enter Zip"
                  name="lroZip"
                  value={lroZip}
                  style={{ borderColor: borderColor.lroZip }}
                  onChange={handleInputChange}
                  onBlur={handleInputChangeBlur}
                />
                {borderColor.lroZip === "red" && (
                  <span className="formWarning">{ErrorMessage.lroZip}</span>
                )}
              </Form.Group>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
              <Form.Group className="mb-3" controlId="formCity">
                <Dropdown
                  controlId="formCity"
                  options={stateOptions}
                  onSelect={handleSelect}
                  name="lroCity"
                  label="City"
                  value={lroCity}
                />
                {/* <Form.Label>Select City</Form.Label>
                <span className="requred">* </span>
                <Form.Select
                  name="lroCity"
                  value={lroCity}
                  style={{ borderColor: borderColor.lroCity }}
                  onChange={handleInputChange}
                  onBlur={handleInputChangeBlur}
                >
                  <option value="">select City</option>
                  <option value="S">S City</option>
                </Form.Select>
                {borderColor.lroCity === "red" && (
                  <span className="formWarning">{ErrorMessage.lroCity}</span>
                )} */}
              </Form.Group>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
              <Form.Group className="mb-3" controlId="formState">
                <Dropdown
                  options={stateOptions}
                  onSelect={handleSelect}
                  name="lroState"
                  label="State"
                  value={lroState}
                />

                {/* <Form.Label>Select State</Form.Label>
                <span className="requred">* </span>
                <Form.Select
                  name="lroState"
                  value={lroState}
                  style={{ borderColor: borderColor.lroState }}
                  onChange={handleInputChange}
                  onBlur={handleInputChangeBlur}
                >
                  <option value="">select State</option>
                  <option value="S">S</option>
                </Form.Select> */}
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              <Form.Group className="mb-3" controlId="ext">
                <Form.Label>Ext</Form.Label>
                <span className="requred">* </span>
                <Form.Control
                  type="number"
                  placeholder="Enter Ext"
                  name="lroExt"
                  value={lroExt}
                  style={{ borderColor: borderColor.lroExt }}
                  onChange={handleInputChange}
                  onBlur={handleInputChangeBlur}
                />
                {borderColor.lroExt === "red" && (
                  <span className="formWarning">{ErrorMessage.lroExt}</span>
                )}
              </Form.Group>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <Form.Group className="mb-3" controlId="phoneNumber">
                <Form.Label>Phone No.</Form.Label>
                <span className="requred">* </span>
                <Form.Control
                  type="tel"
                  name="lroPhoneNumber"
                  placeholder="Enter Phone No."
                  value={lroPhoneNumber}
                  style={{ borderColor: borderColor.lroPhoneNumber }}
                  onChange={handleInputChange}
                  onBlur={handleInputChangeBlur}
                />
                {borderColor.lroPhoneNumber === "red" && (
                  <span className="formWarning">
                    {ErrorMessage.lroPhoneNumber}
                  </span>
                )}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              <Form.Group className="mb-3" controlId="faxNumber">
                <Form.Label>Fax</Form.Label>
                <span className="requred">* </span>
                <Form.Control
                  type="tel"
                  name="lroFaxNumber"
                  placeholder="Enter Fax"
                  value={lroFaxNumber}
                  style={{ borderColor: borderColor.lroFaxNumber }}
                  onChange={handleInputChange}
                  onBlur={handleInputChangeBlur}
                />
                {borderColor.lroFaxNumber === "red" && (
                  <span className="formWarning">
                    {ErrorMessage.lroFaxNumber}
                  </span>
                )}
              </Form.Group>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <Form.Group className="mb-3" controlId="uid">
                <Form.Label>UIE ID</Form.Label>
                <span className="requred">* </span>
                <Form.Control
                  type="tel"
                  name="lroUID"
                  placeholder="Enter UID"
                  value={lroUID}
                  style={{ borderColor: borderColor.lroUID }}
                  onChange={handleInputChange}
                  onBlur={handleInputChangeBlur}
                />
                {borderColor.lroUID === "red" && (
                  <span className="formWarning">{ErrorMessage.lroUID}</span>
                )}
              </Form.Group>
            </Col>
          </Row>

          <div className="border-top mt-4"></div>
          <Row className="mt-4">
            <Col>
              <Button
                className="btn-padding"
                variant="secondary"
                type="reset"
                onClick={onClearData}
              >
                CLEAR
              </Button>
            </Col>
            <Col className="d-flex justify-content-end">
              <Button
                className="btn-padding btn-icon"
                variant="primary"
                onClick={handleNext}
              >
                NEXT <img src={arrowRight} alt="arrow-right-icon" />
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Fragment>
  );
}
