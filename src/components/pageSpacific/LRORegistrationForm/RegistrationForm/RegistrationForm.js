import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function RegistrationForm({newTabData,activeTab,setActiveTab}) {
  const handleNext = () => {
    const currentTabIndex = newTabData.findIndex(
      (tab) => tab.id === activeTab.id
    );
    if (currentTabIndex < newTabData.length - 1) {
      setActiveTab(newTabData[currentTabIndex + 1]);
    }
  };
  return (
    <div className="registration-form">
        <Form>
          <Form.Group className="mb-2" controlId="formLroName">
            <Form.Label>
              Local Recipient Organization Name
            </Form.Label>
            <Form.Control type="text" placeholder="LRO Name" />
          </Form.Group>
            <Row>
               <Col xs={3}>
                <Form.Group className="mb-2" controlId="formSalut">
                    <Form.Label>Salut</Form.Label>
                    <Form.Select>
                      <option value="">select</option>
                    </Form.Select>
                  </Form.Group>
               </Col>
               <Col xs={9}>
               <Form.Group className="mb-2" controlId="formLroContact">
                  <Form.Label>Contact</Form.Label>
                  <Form.Control type="text" placeholder="contact" />
                </Form.Group>
                </Col>
            </Row>
          <Form.Group className="mb-2" controlId="formLroEmail">
            <Form.Label>Email / UserID</Form.Label>
            <Form.Control type="email" placeholder="infinite@Alyx.com" />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formLroPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="" />
              </Form.Group>
          <Form.Group className="mb-2" controlId="formLroCPassword">
            <Form.Label>Re-enter Password</Form.Label>
            <Form.Control type="password" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formLroCaptcha">
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
          <Button className="mt-4 w-100" type="submit" onClick={handleNext}>REGISTER</Button>
          
        </Form>
    </div>
  );
}
