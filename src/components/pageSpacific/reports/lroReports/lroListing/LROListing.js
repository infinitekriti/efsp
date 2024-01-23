import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ReportCard from "../../../../common/reportCard/ReportCard";

export default function LROListing() {
  return (
    <ReportCard>
      <div className="lro-listing">
        <h5 className="mb-3 fw-bold">LRO Reports/Labels</h5>
        <Form.Group className="mb-3">
          <Form.Label>Phase</Form.Label>
          <Form.Select name="phase">
            <option value="">Select Phase</option>
            <option value="1">1</option>
          </Form.Select>
        </Form.Group>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Affiliation</Form.Label>
              <Form.Select name="phase">
                <option value="">Select Affiliation</option>
                <option value="1">1</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Target</Form.Label>
              <Form.Select name="target">
                <option value="">Select Target</option>
                <option value="1">1</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Check label="Funded" aria-label="option 1" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Check
                label="Include contact & address"
                // aria-label="option 1"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Check
                type="radio"
                label="List"
                name="radioGroup"
                aria-label="radio 1"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Check
                type="radio"
                label="Labels"
                name="radioGroup"
                aria-label="radio 1"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <Button variant="primary">View</Button>
          </Col>
          <Col>
            <Button variant="primary">Print</Button>
          </Col>
          <Col>
            <Button variant="primary">Download Excel</Button>
          </Col>
          <Col>
            <Button variant="secondary">CLEAR</Button>
          </Col>
        </Row>
      </div>
    </ReportCard>
  );
}
