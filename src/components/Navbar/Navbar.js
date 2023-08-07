import React from "react";
import NavBarHeader from "./NavbarHeader";
import { Box } from "@mui/material";
import { logoNav , dogHero} from "../../assets";
import { FaShoppingCart,
  FaTruckMoving,
  BiSolidCheckShield,
  MdSupportAgent,
  TbDiscount2} from "../../assets/icons/icons";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <Box className="navbar">
      <NavBarHeader />
      <Box className="home__heroSection">
      <Box className="navbar__bottom">
        <Box className="navbarHeader__logo">
          <img src={logoNav} alt="" />
          <Link to="/home" className="navbar__logoTitle">Petopia</Link>
        </Box>
      
        <Box className="navbarBottom__links">
          <Link to="/home" className="navbarBottom__link">Home</Link>
          <Link to="/services" className="navbarBottom__link">Services</Link>
          <Link to="/shop" className="navbarBottom__link">Shop</Link>
          <Link to="/blog" className="navbarBottom__link">Blog</Link>
          <Link to="/pages" className="navbarBottom__link">Pages</Link>
        </Box>
        <Box className="navbarBottom__cartContainer">
          <FaShoppingCart size={15} color='#7C58D3'/>
          <span>(1 item)</span>
        </Box>
      </Box>
        <Box className='heroDetails'>
        <Box className="home__heroHeader">
          <h5 className="smallTitle">WE CARE FOR YOUR PETS  </h5>
          <h2 className="home__heroHeading">
            We Help You Care for Animals with Nutrition
          </h2>
          <p className="home__contactText">
            All offers are subject to availability. Ut tortor pretium viverra
            suspendisse potenti nullam ac tortor vitae. Consectetur a erat nam
            at. Potenti nullam ac tortor vitae purus faucibus ornare.
          </p>

          <Box className="home__benefits">
            {/* <BenefitsCard /> */}
            <Box className="benefits__card">
              <Box className="benefitsCard__icon">
                <FaTruckMoving size={20} color="#7C58D3" />
              </Box>
              <Box className="stats__cardDetails">
                <h6 className="benefitsCard__title">Trust & Safety</h6>
                <h6 className="benefitsCard__text">Velit euismod pellentes</h6>
              </Box>
            </Box>
            <Box className="benefits__card">
              <Box className="benefitsCard__icon">
                <TbDiscount2  size={20} color="#7C58D3" />
              </Box>
              <Box className="stats__cardDetails">
                <h6 className="benefitsCard__title">Discount</h6>
                <h6 className="benefitsCard__text">Bibendum ut tristique </h6>
              </Box>
            </Box>
            <Box className="benefits__card">
              <Box className="benefitsCard__icon">
                <MdSupportAgent size={20} color="#7C58D3" />
              </Box>
              <Box className="stats__cardDetails">
                <h6 className="benefitsCard__title">Support</h6>
                <h6 className="benefitsCard__text">Egestas quis ipsum velit</h6>
              </Box>
            </Box>
            <Box className="benefits__card">
              <Box className="benefitsCard__icon">
                <BiSolidCheckShield size={20} color="#7C58D3" />
              </Box>
              <Box className="stats__cardDetails">
                <h6 className="benefitsCard__title">Guarantee</h6>
                <h6 className="benefitsCard__text">BiSolidCheckShield</h6>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="home__heroDog">
          <img src={dogHero} alt="" />
        </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
