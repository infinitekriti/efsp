
import { Col, Container, Row } from 'react-bootstrap';
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
                <Col>
                    <div className="footer-volLeft">
                        <h2>Volunteer With Us</h2>
                        <p>Share yout love to make someone's life better</p>
                    </div>
                </Col>
                <Col>
                    <div className="footer-volRight">
                        <Button title="Learn how" img={arrowRight}/>
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
                <Col xs={12} sm={3} md={3} lg={4} xl={5}>
                   <div className="footer-descrip-logo">
                        <h4>EFSP</h4>
                        <p>Our vision is to provide convenience <br/> and help 
                            increase your sales business</p>
                            <div className="footer-socialicon">
                                    <div className="icon-name">
                                       <img src={facebook} alt="" />
                                    </div>
                                    <div className="icon-name">
                                        <img src={tweeter} alt="" />
                                    </div>
                                    <div className="icon-name">
                                        <img src={instagram} alt="" />
                                    </div>
                             </div>    
                    </div>
                </Col>
                <Col xs={12} sm={3} md={3} lg={3} xl={3}>
                    <div className="footer-descrip-link">
                         <h6>About</h6>
                         <div className="footer-link">
                            <div>Founding Information</div>
                            <div>Humanitarian Founding</div>
                            <div>FAQ'S</div>
                            <div>About Us</div>
                            <div>Contact Us</div>
                        </div> 
                    </div>
                </Col>
                <Col xs={12} sm={3} md={3} lg={3} xl={3}>
                   <div className="footer-descrip-link">
                         <h6>Quick Links</h6>
                         <div className="footer-link">
                            <div>Awards</div>
                            <div>Funded Organisations</div>
                            <div>Your Community</div>
                            <div>Volunteering</div>
                            <div>Seeking Assistence </div>
                        </div> 
                    </div>
                </Col>
                <Col xs={12} sm={3} md={3} lg={2} xl={1}>
                    <div className="footer-descrip-link">
                         <h6>Socials</h6>
                         <div className="footer-link">
                            <div>Discord</div>
                            <div>Instagram</div>
                            <div>Twitter</div>
                            <div>Facebook</div>
                        </div> 
                    </div>
                </Col>
            </Row>
           </div>
           <div className="footer-descrip-copyright">
                <Row>
                    <Col>
                     <p>©1998-2023 United Way Worldwide. All reights reserved</p>
                    </Col>
                    <Col>
                        <div className="footer-termcondion">
                            <div>Privacy & Policy</div>
                            <div>Terms & Conditions</div>
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