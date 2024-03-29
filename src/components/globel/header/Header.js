
import Button  from "../../common/button/Button";
import "./Header.scss";
import { Fragment } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ReactComponent as DropDownIcon } from "../../../assets/images/svgIcons/dropdown.svg"
const Header = () => {
  return (
    <Fragment>
      <header className="header-main">
      <Navbar expand="lg" className="">
        <Container className="d-flex">
          <Navbar.Brand href="/" className="logo-text">EFSP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link>Features <DropDownIcon className="px-1"/></Nav.Link>
              <Nav.Link>Funding Information</Nav.Link>
              <Nav.Link>Humanitarian</Nav.Link>
              <Nav.Link>FAQ</Nav.Link>
              <Nav.Link>About</Nav.Link>
              <Nav.Link>Contact</Nav.Link>
              <Nav.Link>News</Nav.Link>
              <div className="border"></div>
              <Nav.Link href="/">Sign Up</Nav.Link>
              <Nav.Link>
                <Button title="Log In" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </header>
    </Fragment>
  );
};

export default Header;
