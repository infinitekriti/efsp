import React from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export default function AddressForm() {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <h4>Address Information</h4>
            <br />
            <Form>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>LRO Name</Form.Label>
                <Form.Control
                  type="text"
                  className="InputFeild"
                  placeholder="300"
                  readOnly
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="lroAddress1">
                <Form.Label>Address1</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="address1"
                  name="lroAddress1"
                  // style={{ borderColor: borderColor.lroAddress1 }}
                  // onChange={handleInputChange}
                  // onFocus={handleInputChangeFocus}
                  // onBlur={handleInputChangeBlur}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="lroAddress2">
                <Form.Control
                  type="text"
                  placeholder="address2"
                  name="lroAddress2"
                  // style={{ borderColor: borderColor.lroAddress2 }}
                  // onChange={handleInputChange}
                  // onFocus={handleInputChangeFocus}
                  // onBlur={handleInputChangeBlur}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="lroAddress3">
                <Form.Control
                  type="text"
                  placeholder="address3"
                  name="lroAddress3"
                  // style={{ borderColor: borderColor.lroAddress3 }}
                  // onChange={handleInputChange}
                  // onFocus={handleInputChangeFocus}
                  // onBlur={handleInputChangeBlur}
                />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="stateCode">
                    <Form.Label>State Code</Form.Label>
                    <Form.Control as="select">
                      <option>Select</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control as="select">
                      <option>Select</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="zipCode">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="36092"
                  name="lroZip1"
                  // style={{ borderColor: borderColor.lroZip1 }}
                  // onChange={handleInputChange}
                  // onFocus={handleInputChangeFocus}
                  // onBlur={handleInputChangeBlur}
                />
              </Form.Group>

              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="ext">
                    <Form.Label>Ext</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder=""
                      name="lroExt"
                      // style={{ borderColor: borderColor.lroExt }}
                      // onChange={handleInputChange}
                      // onFocus={handleInputChangeFocus}
                      // onBlur={handleInputChangeBlur}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="phoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      name="lroPhoneNumber"
                      // value={lroPhoneNumber}
                      // style={{ borderColor: borderColor.lroPhoneNumber }}
                      // onChange={handleInputChange}
                      // onFocus={handleInputChangeFocus}
                      // onBlur={handleInputChangeBlur}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="faxNumber">
                    <Form.Label>Fax</Form.Label>
                    <Form.Control
                      type="tel"
                      name="lroFaxNumber"
                      // value={lroFaxNumber}
                      // style={{ borderColor: borderColor.lroFaxNumber }}
                      // onChange={handleInputChange}
                      // onFocus={handleInputChangeFocus}
                      // onBlur={handleInputChangeBlur}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="websiteLink">
                <Form.Label>Website Link</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
