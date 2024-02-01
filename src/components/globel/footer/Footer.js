
import { Col, Container, Nav, Row } from 'react-bootstrap';
import Button from '../../common/button/Button';
import arrowRight from "../../../assets/images/svgIcons/arrow-right.svg"
import facebook from "../../../assets/images/svgIcons/facebook.svg"
import tweeter from "../../../assets/images/svgIcons/tweeter.svg"
import instagram from "../../../assets/images/svgIcons/instagram.svg"
import "./Footer.scss"
const Footer = () => {
  return (
    <div className="footer-main">
        <div className="footer-volunter-main">
         <Container>
        <div className="footer-volunteer">
            <Row>
                <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                    <div className="footer-volLeft">
                        <h2>Volunteer With Us</h2>
                        <p>Share yout love to make someone's life better</p>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                    <div className="footer-volRight">
                        <Button title="Learn how" img={arrowRight} alt="arrowRight"/>
                    </div>
                </Col>
            </Row>
        </div>
        </Container>
        </div>
        <div className="footer-description">
            <Container>
            <div className="footer-descrip-inner">
            <Row>
                <Col xs={12} sm={12} md={3} lg={4} xl={5}>
                   <div className="footer-descrip-logo">
                        <h4>EFSP</h4>
                        <p>Our vision is to provide convenience  and help 
                            increase your sales business</p>
                            <div className="footer-socialicon">
                                    <div className="icon-name">
                                    <Nav.Link><img src={facebook} alt="facebookIcon" /> </Nav.Link>
                                    </div>
                                    <div className="icon-name">
                                    <Nav.Link><img src={tweeter} alt="tweeterIcon" /></Nav.Link>
                                    </div>
                                    <div className="icon-name">
                                    <Nav.Link><img src={instagram} alt="instagramIcon" /> </Nav.Link>
                                    </div>
                             </div>    
                    </div>
                </Col>
                <Col xs={12} sm={4} md={3} lg={3} xl={3}>
                    <div className="footer-descrip-link">
                         <h6>About</h6>
                         <div className="footer-link">
                         <Nav.Link>Founding Information</Nav.Link>
                         <Nav.Link>Humanitarian Founding</Nav.Link>
                         <Nav.Link>FAQ'S</Nav.Link>
                         <Nav.Link>About Us</Nav.Link>
                         <Nav.Link>Contact Us</Nav.Link>
                        </div> 
                    </div>
                </Col>
                <Col xs={12} sm={4} md={3} lg={3} xl={3}>
                   <div className="footer-descrip-link">
                         <h6>Quick Links</h6>
                         <div className="footer-link">
                         <Nav.Link>Awards</Nav.Link>
                         <Nav.Link>Funded Organisations</Nav.Link>
                         <Nav.Link>Your Community </Nav.Link>
                         <Nav.Link>Volunteering </Nav.Link>
                         <Nav.Link>Seeking Assistence </Nav.Link>
                        </div> 
                    </div>
                </Col>
                <Col xs={12} sm={4} md={3} lg={2} xl={1}>
                    <div className="footer-descrip-link">
                         <h6>Socials</h6>
                         <div className="footer-link">
                         <Nav.Link>Discord</Nav.Link>
                         <Nav.Link>Instagram</Nav.Link>
                         <Nav.Link>Twitter </Nav.Link>
                         <Nav.Link>Facebook </Nav.Link>
                        </div> 
                    </div>
                </Col>
            </Row>
           </div>
           <div className="footer-descrip-copyright">
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                     <p>©1998-2023 United Way Worldwide. All reights reserved</p>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <div className="footer-termcondion">
                        <Nav.Link>Privacy & Policy </Nav.Link>
                        <Nav.Link>Terms & Conditions</Nav.Link>
                        </div>
                    </Col>
                </Row>
            </div>
           </Container>   
        </div>
    </div>
  )
}

export default Footer