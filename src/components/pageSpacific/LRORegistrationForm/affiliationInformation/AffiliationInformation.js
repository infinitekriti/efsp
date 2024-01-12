import React from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export default function AffiliationInformation() {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <h4>Affiliate Information</h4>
            <br />
            <Form>
              <Row>
                <Col>
                  <Form.Group className="fromInput">
                    <Form.Label>Affiliate</Form.Label>
                    <Form.Control as="select">
                      <option value="">select</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="fromInput">
                    <Form.Label>Target 1</Form.Label>
                    <Form.Control as="select">
                      <option value="">select</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="fromInput">
                    <Form.Label>Target 2</Form.Label>
                    <Form.Control as="select">
                      <option value="">select</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="fromInput">
                    <Form.Label>Target 3</Form.Label>
                    <Form.Control as="select">
                      <option value="">select</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
