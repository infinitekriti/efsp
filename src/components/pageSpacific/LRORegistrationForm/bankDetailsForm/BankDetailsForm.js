import React from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export default function BankDetailsForm() {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <h4>Bank Details</h4>
            <br />
            <Form>
              <Form.Label>LRO Name </Form.Label>
              <Form.Control
                type="text"
                className="InputFeild"
                id="name"
                placeholder="300"
                readOnly
              />
              <Form.Group className="mb-3">
                <Form.Label>Name as per Bank Records</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Bank Name</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Account Type</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="S"
                        name="lroAccountType"
                        // style={{ borderColor: borderColor.lroAccountType }}
                        // onChange={handleInputChange}
                        // onFocus={handleInputChangeFocus}
                        // onBlur={handleInputChangeBlur}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Account Number</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Abano</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </Form>
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
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
