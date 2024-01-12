import React from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export default function RegistrationForm() {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={6}>
            <h4>Registration Form</h4>
            <br />
            <Form>
              <Form.Group className="mb-3" controlId="formLroName">
                <Form.Label>
                  Name of the Local Recipient Organization
                </Form.Label>
                <Form.Control type="text" placeholder="LRO Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formSalut">
                <Form.Label>Salut</Form.Label>
                <Form.Select>
                  <option value="">select</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formLroContact">
                <Form.Label>Contact</Form.Label>
                <Form.Control type="text" placeholder="contact" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formLroEmail">
                <Form.Label>Email / UserID</Form.Label>
                <Form.Control type="email" placeholder="infinite@Alyx.com" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formLroPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formLroCPassword">
                <Form.Label>Re-enter Password</Form.Label>
                <Form.Control type="password" placeholder="" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formLroCaptcha">
                <Form.Label>Captcha</Form.Label>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      // borderColor: borderColor.lroCaptcha,
                      width: "30%",
                      textAlign: "center",
                      marginRight: "10px",
                    }}
                  >
                    12 + 27
                  </div>
                  <Form.Control type="text" placeholder="" />
                </div>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
