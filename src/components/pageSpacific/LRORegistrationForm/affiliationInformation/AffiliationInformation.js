import React, { useState , useEffect } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import arrowRight from "../../../../assets/images/svgIcons/arrow-right.svg";
import saveIcon from "../../../../assets/images/svgIcons/save-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  clearFormData,
  updateFormData,
} from "../../../../redux/reducers/HomeSlice";

export default function AffiliationInformation() {
  const { AffiliationInfo } = useSelector((state) => state.HomeReducer);
  const [borderColor, setBorderColor] = useState({});
  const [ErrorMessage, setErrorMessage] = useState({});
  const [formData, setFormData] = useState(AffiliationInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    setFormData(AffiliationInfo);
  }, [AffiliationInfo]);

  const SErrorMessage = (name, Message, validate) => {
    setErrorMessage((prevData) => ({
      ...prevData,
      [name]: validate ? "" : Message,
    }));
  };
  const feildColour = (name, validate) => {
    switch (name) {
      case "lroAffiliation":
        SErrorMessage(name, "Select Affiliation ", validate);
        break;
      case "lroTarget1":
        SErrorMessage(name, "Select Target 1", validate);
        break;
      case "lroTarget2":
        SErrorMessage(name, "Select Target 2", validate);
        break;
      case "lroTarget3":
        SErrorMessage(name, "Select Target 3", validate);
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

    if (value === "") {
      switch (name) {
        case "lroAffiliation":
          SErrorMessage(name, "Select Affiliation ", false);
          break;
        case "lroTarget1":
          SErrorMessage(name, "Select Target 1 ", false);
          break;
        case "lroTarget2":
          SErrorMessage(name, "Select Target 2 ", false);
          break;
        case "lroTarget3":
          SErrorMessage(name, "Select Target 3 ", false);
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
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    switch (name) {
      case "lroAffiliation":
        if (value === "") {
          feildColour(name, false);
        } else {
          feildColour(name, true);
        }
        break;
      case "lroTarget1":
        if (value === "") {
          feildColour(name, false);
        } else {
          feildColour(name, true);
        }
        break;
      case "lroTarget2":
        if (value === "") {
          feildColour(name, false);
        } else {
          feildColour(name, true);
        }
        break;
      case "lroTarget3":
        if (value === "") {
          feildColour(name, false);
        } else {
          feildColour(name, true);
        }
        break;
      default:
        break;
    }
  };

  const onSaveHandler = () => {
    dispatch(updateFormData({ payload: formData, name: "AffiliationInfo" }));
  };
  const onClearData = () => {
    dispatch(clearFormData({ name: "AffiliationInfo" }));
  };

  return (
    <div className="affliation-main">
      <div className="address-step-title d-flex justify-content-between mb-3">
        <h6>Step 5. Affiliation</h6>
        <div className="address-step-save " onClick={onSaveHandler}>
          <img src={saveIcon} alt="" />
        </div>
      </div>
      <div className="lro-name mb-3">
        <label>Local Recipient Organization Name:</label> <b>Name</b>
      </div>
      <Form>
        <Form.Group className="fromInput mb-3">
          <Form.Label>Affiliation</Form.Label>
          <Form.Select
            as="select"
            name="lroAffiliation"
            value={formData.lroAffiliation}
            style={{ borderColor: borderColor.lroAffiliation }}
            onChange={handleInputChange}
            onBlur={handleInputChangeBlur}
          >
            <option value="">Select Name as per/in Bank Records</option>
            <option value="1">Target1</option>
          </Form.Select>
          {borderColor.lroAffiliation === "#A30000" && (
            <span className="formWarning">{ErrorMessage.lroAffiliation}</span>
          )}
        </Form.Group>
        <Form.Group className="fromInput  mb-3">
          <Form.Label>Target 1 </Form.Label>
          <span className="requred">* </span>
          <Form.Select
            as="select"
            name="lroTarget1"
            value={formData.lroTarget1}
            style={{ borderColor: borderColor.lroTarget1 }}
            onChange={handleInputChange}
            onBlur={handleInputChangeBlur}
          >
            <option value="">Select Target</option>
            <option value="1">Target1</option>
          </Form.Select>
          {borderColor.lroTarget1 === "#A30000" && (
            <span className="formWarning">{ErrorMessage.lroTarget1}</span>
          )}
        </Form.Group>
        <Form.Group className="fromInput  mb-3">
          <Form.Label>Target 2</Form.Label>
          <span className="requred">* </span>
          <Form.Select
            as="select"
            name="lroTarget2"
            value={formData.lroTarget2}
            style={{ borderColor: borderColor.lroTarget2 }}
            onChange={handleInputChange}
            onBlur={handleInputChangeBlur}
          >
            <option value="">Select Target</option>
            <option value="1">Target1</option>
          </Form.Select>
          {borderColor.lroTarget2 === "#A30000" && (
            <span className="formWarning">{ErrorMessage.lroTarget2}</span>
          )}
        </Form.Group>
        <Form.Group className="fromInput  mb-3">
          <Form.Label>Target 3</Form.Label>
          <span className="requred">* </span>
          <Form.Select
            as="select"
            name="lroTarget3"
            value={formData.lroTarget3}
            style={{ borderColor: borderColor.lroTarget3 }}
            onChange={handleInputChange}
            onBlur={handleInputChangeBlur}
          >
            <option value="">Select Target</option>
            <option value="1">Target1</option>
          </Form.Select>
          {borderColor.lroTarget3 === "#A30000" && (
            <span className="formWarning">{ErrorMessage.lroTarget3}</span>
          )}
        </Form.Group>
        <div className="border-top mt-4"></div>
        <Row className="mt-4">
          <Col>
            <Button
              className="btn-padding"
              variant="secondary"
              onClick={onClearData}
            >
              CLEAR
            </Button>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button className="btn-padding btn-icon" variant="primary">
              SUBMIT <img src={arrowRight} alt="" />
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
