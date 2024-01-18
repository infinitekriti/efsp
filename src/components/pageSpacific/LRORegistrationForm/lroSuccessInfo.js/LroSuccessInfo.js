import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./LroSuccessInfo.scss";
import { Col, Row } from "react-bootstrap";
import arrowRight from "../../../../assets/images/svgIcons/arrow-right.svg"
const LroSuccessInfo = (props) => {
const {newTabData,setActiveTab,activeTab,setModalShow}=props
  const handleNext = () => {
    const currentTabIndex = newTabData.findIndex(
      (tab) => tab.id === activeTab.id
    );
    if (currentTabIndex < newTabData.length - 1) {
      setActiveTab(newTabData[currentTabIndex + 1]);
    }
    setModalShow(false)
  };
  return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="lro-success-modal"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <h6 className="mb-3">Congratulations, Your account has been created.</h6>
            <p className="mb-3">
              You may click PROCEED to fill-in the Address, bank and other
              details for EFSP Staff to verify and approve OR you can come at a
              later time and complete the registration.
            </p>
          </div>
          <Row>
            <Col>
              <Button className="btn-padding" onClick={props.onHide} variant="secondary">
                LATER
              </Button>
            </Col>
            <Col className="d-flex justify-content-end">
              <Button onClick={handleNext} className="btn-padding btn-icon" variant="primary">
                PROCEED <img src={arrowRight} alt="" />
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
  );
};

export default LroSuccessInfo;
