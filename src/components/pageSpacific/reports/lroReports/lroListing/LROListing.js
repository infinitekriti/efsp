import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ReportCard from "../../../../common/reportCard/ReportCard";
import { useDispatch, useSelector } from "react-redux";
import { clearFormData } from "../../../../../redux/reducers/ReportsSlice";
const initialListingInformation = {
  phase: "",
  affiliation: "",
  target: "",
  funded: false,
  includeContactAddress: false,
  list: "",
};
export default function LROListing() {
  const { listingInformation } = useSelector((state) => state.ReportsReducer);
  const [formData, setFormData] = useState(listingInformation);
  const dispatch = useDispatch();
  const { phase, affiliation, target, funded, includeContactAddress, list } =
    formData;
  useEffect(() => {
    setFormData(listingInformation);
  }, [listingInformation]);
  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const submit = () => {
    console.log(formData);
  };
  const onClearData = () => {
    dispatch(clearFormData({ name: "listingInformation" }));
    setFormData(initialListingInformation);
  };
  return (
    <ReportCard>
      <div className="lro-listing">
        <h5 className="mb-3 fw-bold">LRO Reports/Labels</h5>
        <Form.Group className="mb-3">
          <Form.Label>Phase</Form.Label>
          <Form.Select
            name="phase"
            value={phase}
            onChange={({ target: { name, value } }) =>
              handleChange(name, value)
            }
          >
            <option value="">Select Phase</option>
            <option value="1">1</option>
          </Form.Select>
        </Form.Group>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Affiliation</Form.Label>
              <Form.Select
                name="affiliation"
                value={affiliation}
                onChange={({ target: { name, value } }) =>
                  handleChange(name, value)
                }
              >
                <option value="">Select Affiliation</option>
                <option value="1">1</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Target</Form.Label>
              <Form.Select
                name="target"
                value={target}
                onChange={({ target: { name, value } }) =>
                  handleChange(name, value)
                }
              >
                <option value="">Select Target</option>
                <option value="1">1</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col lg={2}>
            <Form.Group className="mb-3">
              <Form.Check
                type="radio"
                label="All States"
                name="radioGroup1"
                aria-label="radio 1"
              />
            </Form.Group>
          </Col>
          <Col lg={4}>
            <Form.Group className="mb-3">
              <Form.Check
                type="radio"
                label="Multiple States"
                name="radioGroup1"
                aria-label="radio 1"
              />
            </Form.Group>
          </Col>
          <Col lg={2}>
            <Form.Group className="mb-3">
              <Form.Check
                type="radio"
                label="Single LB"
                name="radioGroup1"
                aria-label="radio 1"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col lg={2}>
            <Form.Group className="mb-3">
              <Form.Check
                label="Funded"
                aria-label="option 1"
                name="funded"
                checked={funded}
                onChange={({ target: { name, checked } }) =>
                  handleChange(name, checked)
                }
              />
            </Form.Group>
          </Col>
          <Col lg={4}>
            <Form.Group className="mb-3">
              <Form.Check
                label="Include contact & address"
                name="includeContactAddress"
                checked={includeContactAddress}
                onChange={({ target: { name, checked } }) =>
                  handleChange(name, checked)
                }
                // aria-label="option 1"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col lg={2}>
            <Form.Group className="mb-3">
              <Form.Check
                type="radio"
                label="List"
                name="list"
                value={"list 1"}
                aria-label="radio 1"
                checked={list === "list 1"}
                onChange={({ target: { name, value } }) =>
                  handleChange(name, value)
                }
              />
            </Form.Group>
          </Col>
          <Col lg={2}>
            <Form.Group className="mb-3">
              <Form.Check
                type="radio"
                label="list 2"
                name="list"
                value={"list 2"}
                checked={list === "list 2"}
                aria-label="radio 1"
                onChange={({ target: { name, value } }) =>
                  handleChange(name, value)
                }
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <Button variant="primary">View</Button>
          </Col>
          <Col>
            <Button variant="primary" onClick={submit}>
              Print
            </Button>
          </Col>
          <Col>
            <Button variant="primary">Download Excel</Button>
          </Col>
          <Col>
            <Button variant="secondary" onClick={onClearData}>
              CLEAR
            </Button>
          </Col>
        </Row>
      </div>
    </ReportCard>
  );
}
