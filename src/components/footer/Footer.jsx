import React from "react";
import { logoFooter } from "../../assets";
import { Typography, Box } from "@mui/material";
import {
  FaPhoneAlt,
  GoDotFill,
  BsArrowRightShort,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  GrFacebookOption,
} from "../../assets/icons/icons";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__head">
        <div className="footer__headItem">
          <div className="footer__logoImage">
            <img src={logoFooter} alt="footer" className="footer__logo" />
          </div>
          <span className="footer__headerText">
            Tristique nulla aliquet enim tortor at auctor urna nunc. Massa enim
            nec dui nunc mattis enim ut tellus. Sed ut perspiciatis unde ...
          </span>
          <div className="footer__phoneDetails">
            <FaPhoneAlt color="#9C5BF5" size={30} />
            <div className="footer__phoneNumber">
              <span>(913) 756-3126</span>
              <span>Got Questions? Call us 24/7</span>
            </div>
          </div>
        </div>
        <Box className="footer__headItem">
          <Typography className="footer__headTitle">Working Hours</Typography>
          <Box className="working__hours">
            <h5 className="days"> Mon - Fri</h5>
            <h5 className="time"> 7am - 6pm</h5>
          </Box>
          <Box className="working__hours">
            <h5 className="days"> Sat </h5>
            <h5 className="time"> 9am - 4pm</h5>
          </Box>
          <Box className="working__hours">
            <h5 className="days"> Sun </h5>
            <h5 className="time"> Closed </h5>
          </Box>
        </Box>
        <Box className="footer__headItem">
          <Typography className="footer__headTitle">UseFul Links</Typography>
          <Box className="footer__linksBox">
            <Box className="footer__linksContainer">
              <Box className="footer__linkContainer">
                <GoDotFill color="#FF47A2" size={15} />

                <Link to="/" className="footer__link">
                  Home
                </Link>
              </Box>
              <Box className="footer__linkContainer">
                <GoDotFill color="#FFBBDD" size={15} />

                <Link to="/about" className="footer__link">
                  About
                </Link>
              </Box>
              <Box className="footer__linkContainer">
                <GoDotFill color="#FFBBDD" size={15} />

                <Link to="/services" className="footer__link">
                  Services
                </Link>
              </Box>
              <Box className="footer__linkContainer">
                <GoDotFill color="#FFBBDD" size={15} />

                <Link to="/shop" className="footer__link">
                  Shop
                </Link>
              </Box>
            </Box>
            <Box className="footer__linksContainer">
              <Box className="footer__linkContainer">
                <GoDotFill color="#FFBBDD" size={15} />

                <Link to="/faq" className="footer__link">
                  FAQ
                </Link>
              </Box>
              <Box className="footer__linkContainer">
                <GoDotFill color="#FFBBDD" size={15} />

                <Link to="/gallery" className="footer__link">
                  Gallery
                </Link>
              </Box>
              <Box className="footer__linkContainer">
                <GoDotFill color="#FFBBDD" size={15} />

                <Link to="/delivery" className="footer__link">
                  Delivery
                </Link>
              </Box>
              <Box className="footer__linkContainer">
                <GoDotFill color="#FFBBDD" size={15} />

                <Link to="/sales" className="footer__link">
                  Sales
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
        <div className="footer__headItem">
          <Typography className="footer__headTitle">Newsletter</Typography>
          <div className="footer__newsletterContainer">
            <span className="footer__newsletterText">
              Be first in the queue! Get our latest news straight to your inbox.
            </span>
            <div className="footer__messageInput">
              <input type="text" placeholder="Email" />
              <BsArrowRightShort
                color="#fff"
                size={30}
                enableBackground={true}
                className="footer__messageInputIcon"
              />
            </div>
            <div className="footer__socialsMediaIcons">
              <GrFacebookOption
                size={25}
                color="#7C58D3"
                className="footer__socialsMediaIcon"
              />
              <FaInstagram
                size={25}
                color="#7C58D3"
                className="footer__socialsMediaIcon"
              />
              <FaTwitter
                size={25}
                color="#7C58D3"
                className="footer__socialsMediaIcon"
              />
              <FaWhatsapp
                size={25}
                color="#7C58D3"
                className="footer__socialsMediaIcon"
              />
            </div>
          </div>
        </div>
      </div>
      <h5 className="footer__copyRight">
        NOOT © All rights reserved Copyrights 2023{" "}
      </h5>
    </div>
  );
};

export default Footer;
