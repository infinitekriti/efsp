import React, { Fragment } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import saveIcon from "../../../../assets/images/svgIcons/save-icon.svg"
import arrowRight from "../../../../assets/images/svgIcons/arrow-right.svg"
import { Button } from "react-bootstrap";

export default function AddressForm() {
  return (
    <Fragment>
        <div className="address-info-main">
          <div className="address-step-title d-flex justify-content-between mb-3">
             <h6>Step 2. Address Information</h6>
             <div className="address-step-save ">
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
                  // style={{ borderColor: borderColor.lroAddress1 }}
                  // onChange={handleInputChange}
                  // onFocus={handleInputChangeFocus}
                  // onBlur={handleInputChangeBlur}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="lroAddress2">
                <Form.Control
                  type="text"
                  placeholder="Flat no., Room, Office"
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
                  placeholder="More Details"
                  name="lroAddress3"
                  // style={{ borderColor: borderColor.lroAddress3 }}
                  // onChange={handleInputChange}
                  // onFocus={handleInputChangeFocus}
                  // onBlur={handleInputChangeBlur}
                />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formCity">
                    <Form.Label>Select City</Form.Label><span className="requred">* </span>
                    <Form.Select>
                      <option value="">select City</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formState">
                    <Form.Label>Select State</Form.Label>
                    <span className="requred">* </span>
                    <Form.Select>
                      <option value="">select State</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formZip">
                    <Form.Label>Zip</Form.Label><span className="requred">* </span>
                    <Form.Control
                      type="tel"
                      placeholder="Enter Zip"
                      name="lroZip1"
                      // style={{ borderColor: borderColor.lroZip1 }}
                      // onChange={handleInputChange}
                      // onFocus={handleInputChangeFocus}
                      // onBlur={handleInputChangeBlur}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="ext">
                    <Form.Label>Ext</Form.Label><span className="requred">* </span>
                    <Form.Control
                      type="number"
                      placeholder="Enter Ext"
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
                    <Form.Label>Phone No.</Form.Label><span className="requred">* </span>
                    <Form.Control
                      type="tel"
                      name="lroPhoneNumber"
                      placeholder="Enter Phone No."
                      // value={lroPhoneNumber}
                      // style={{ borderColor: borderColor.lroPhoneNumber }}
                      // onChange={handleInputChange}
                      // onFocus={handleInputChangeFocus}
                      // onBlur={handleInputChangeBlur}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="faxNumber">
                    <Form.Label>Fax</Form.Label><span className="requred">* </span>
                    <Form.Control
                      type="tel"
                      name="lroFaxNumber"
                      placeholder="Enter Fax"
                      // value={lroFaxNumber}
                      // style={{ borderColor: borderColor.lroFaxNumber }}
                      // onChange={handleInputChange}
                      // onFocus={handleInputChangeFocus}
                      // onBlur={handleInputChangeBlur}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="uid">
                    <Form.Label>UID</Form.Label><span className="requred">* </span>
                    <Form.Control
                      type="tel"
                      name="lroFaxNumber"
                      placeholder="Enter UID"
                      // value={lroFaxNumber}
                      // style={{ borderColor: borderColor.lroFaxNumber }}
                      // onChange={handleInputChange}
                      // onFocus={handleInputChangeFocus}
                      // onBlur={handleInputChangeBlur}
                    />
                  </Form.Group>
                  <div className="border-top mt-4"></div>
                  <Row className="mt-4">
                  <Col>
                    <Button className="btn-padding" variant="secondary">CLEAR</Button>
                    </Col>
                    <Col className="d-flex justify-content-end">
                    <Button className="btn-padding btn-icon" variant="primary">NEXT <img src={arrowRight} alt="" /></Button>
                    </Col>
                  </Row>
            </Form>
        </div>
    </Fragment>
  );
}
