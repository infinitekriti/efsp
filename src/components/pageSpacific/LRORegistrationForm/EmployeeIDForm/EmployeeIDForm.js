import React from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export default function EmployeeIDForm() {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <h4>Employee Identification Information</h4>
            <br />
            <Form>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>LRO Name</Form.Label>
                <Form.Control
                  type="text"
                  className="InputFeild"
                  id="name"
                  placeholder="300"
                  readOnly
                />
              </Form.Group>
              <Row>
                <Col>
                  <div className="fromInput">
                    <Form.Label>Ein Extension</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </div>
                </Col>
                <Col>
                  <div className="fromInput">
                    <Form.Label>Ein</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="23-7363262"
                      name="lroEni"
                      // value={lroEni}
                      // style={{ borderColor: borderColor.lroEni }}
                      // onChange={handleInputChange}
                      // onFocus={handleInputChangeFocus}
                      // onBlur={handleInputChangeBlur}
                    />
                  </div>
                </Col>
                <Col>
                  <div className="fromInput">
                    <Form.Label>Sub Ordinate Ein</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="23-7363262"
                      name="lroSubOrdinateEin"
                      // value={lroSubOrdinateEin}
                      // style={{ borderColor: borderColor.lroSubOrdinateEin }}
                      // onChange={handleInputChange}
                      // onFocus={handleInputChangeFocus}
                      // onBlur={handleInputChangeBlur}
                    />
                  </div>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
