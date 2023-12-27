
import "./Header.scss";
import { Fragment } from "react";
import logo from "../../../assets/images/EFSPLogo.png";
import arrowDown from "../../../assets/images/svgIcons/angledown.svg";
import MenuList from "../header/MenuList"
const Header = () => {
  return (
    <Fragment>
      <header className="headerMain">
        <div className="headerWrap">
            <div className="headerTop">
                <div className="HeadTopIn pageContainer">
                  <div className="hTopRight">
                    <div className="hTopRightItem">
                      <p>English</p>
                    </div>
                    <div className="hTopRightItem">
                      <p>Notification</p>
                    </div>
                    <div className="hTopRightItem">
                      <p>Volunteer</p>
                    </div>
                    <div className="hTopRightItem">
                      <p>Careers</p>
                    </div>
                  </div>
                </div>
              </div>
          <div className="headerLogo pageContainer">
            <div className="headerLogoIn">
                    <div className="headerLogo">
                        <img
                          src={logo}
                          alt="logo"
                        />
                        <div className="logoContent">
                          <h1>EFSP</h1>
                          <p>Emergency Food and Shelter Program</p>
                        </div>
                    </div>
                    <div className="headerLogoRight">
                        <div className="headerLogoRightContent">
                              <h1>Arneeya Deerings </h1>
                              <p>Contact</p>
                        </div>
                        <div className="headerLogoIcon">
                          <img src={arrowDown} alt="arrow down" />
                        </div>
                    </div>
            </div>
          </div>
          <div className="headerNav">
              <div className="headerNavigation pageContainer">
                  <MenuList />
              </div>
          </div>
        </div> 
      </header>
    </Fragment>
  );
};

export default Header;
