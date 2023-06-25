import React, {  useEffect } from "react";
import { Box } from "@mui/material";
import "./home.css";
import {
  PostCard,
  ServiceCard,
  ContactCard,
  CategoryCard,
  StatsCard,
} from "../../components/cards/index";
import { contactInfo, otherPostsData } from "../../dummyData/data";
import { Banner, service1 } from "../../assets";
import { FaPhoneAlt, BsArrowRightShort } from "../../assets/icons/icons";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productsQuery = useQuery({
    queryKey: ["products"],
    queryFn: async () =>
     await fetch("data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then(function (response) {
        console.log(response);
        return response.json();
      }),
  });

  useEffect(() => {

    dispatch(getProducts(productsQuery.data));
  }, []);

  const { latest_products, categories, services, stats } = productsQuery.data || {};

  return (
    <Box className="home">
      <Box className="home__stats">
        {stats?.map((stat, index) => (
          <StatsCard stat={stat} key={index} />
        ))}
      </Box>
      <Box className="home__otherPosts">
        <Box className="home__contactHeader">
          <h5 className="smallTitle">OUR SERVICES</h5>
          <h2 className="home__contactHeading">All Pet Care Services</h2>
        </Box>
        <Box className="home__servicesContainer">
          <Box className="serviceCard1">
            <Box className="serviceCard__header ">
              <Box className="serviceCard__image">
                <img src={service1} alt="other post 1" />
              </Box>
              <h6 className="serviceCard__headerTitle1">Walking & Sitting</h6>
            </Box>
            <Box className="serviceCard__details">
              <h6 className="serviceCard__text1">
                Ut tortor pretium viverra suspendisse potenti nullam ac tortor
                vitae eget dolor morbi{" "}
              </h6>
              <Box className="serviceCard__detail">
                <p className="serviceCard__price1">From $15 / hour</p>
              </Box>
            </Box>
            <Link to="/services" className="serviceCard__link">
              <h6 className="serviceCard__linkTitle1">Get Service</h6>
              <BsArrowRightShort size={20} color="#FFDA47" />
            </Link>
          </Box>
          {services?.map((item, index) => (
            <ServiceCard service={item} key={index} />
          ))}
        </Box>
      </Box>
      {/* <Box className="container">
        <Box className="container__left">
          <Box className="home__contactHeader">
            <h2 className="home__contactHeading">Check Out Our Specials</h2>
            <p className="container__leftMainText">
              Massa placerat duis ultricies lacus. Aliquet bibendum enim
              facilisis gravida neque convallis
            </p>
            <Box className="container__leftIconBox">
              <Link to="/shop" className="container__leftIcon">
                Shop Now
              </Link>
              <BsArrowRightShort size={30} color="#7C58D3" />
            </Box>
          </Box>
          <Box className="container__leftInnerRight">
            <span>Up to 40% Off</span>
            <Box className="container__leftInnerRightImage">
              <img src={luxury3} alt="before categories" />
            </Box>
          </Box>
        </Box> */}
        {/* <Box className="container__right">
          <Box className="container__rightTop">
            <Box className="container__rightTopInner">
              <Box className="container__rightTopInnerHeader">
                <h2 className="home__contactHeading">
                  Luxury Fashion Collection
                </h2>
                <Box className="container__leftIconBox">
                  <Link to="/shop" className="container__leftIcon">
                    Shop Now
                  </Link>
                  <BsArrowRightShort size={30} color="#7C58D3" />
                </Box>
              </Box>
              <img src={luxury1} alt="" className="container__rightTopImage" />
            </Box>
          </Box>
          <Box className="container__rightTop">
            <Box className="container__rightTopInner">
              <Box className="container__rightTopInnerHeader">
                <h2 className="home__contactHeading">Shop What's Trending</h2>
                <Box className="container__leftIconBox">
                  <Link to="/shop" className="container__leftIcon">
                    Shop Now
                  </Link>
                  <BsArrowRightShort size={30} color="#7C58D3" />
                </Box>
              </Box>
              <img src={luxury2} alt="" className="container__rightTopImage" />
            </Box>
          </Box>
        </Box> */}
      {/* </Box> */}
      <Box className="home__categories">
        <Box className="home__category">
          <h2 className="home__otherPostHeading">Featured Products</h2>
          {categories?.featured?.map((item, index) => (
            <CategoryCard category={item} key={index} />
          ))}
        </Box>
        <Box className="home__category">
          <h2 className="home__otherPostHeading">On Sale Products</h2>
          {categories?.on_sale?.map((item, index) => (
            <CategoryCard category={item} key={index} />
          ))}
        </Box>
        <Box className="home__category">
          <h2 className="home__otherPostHeading">Top Rated Products</h2>
          {categories?.top_rated?.map((item, index) => (
            <CategoryCard category={item} key={index} />
          ))}
        </Box>
      </Box>
      <Box className="home__bannerImage">
        <img src={Banner} alt="Banner" />
      </Box>
      <Box className="home__otherPosts">
        <Box className="home__contactHeader">
          <h5 className="smallTitle">OUR BLOG</h5>
          <h2 className="home__contactHeading">Latest Posts</h2>
        </Box>
        <Box className="home__otherPostContainer">
          {latest_products?.map((item, index) => (
            <PostCard others={item} key={index} />
          ))}
        </Box>
      </Box>
      <Box className="home__contact">
        <Box className="home__contactHeader">
          <h5 className="smallTitle">OUR CONTACTS</h5>
          <h2 className="home__contactHeading">Contact</h2>
          <p className="home__contactText">
            Massa enim nec dui nunc mattis enim ut tellus
          </p>
        </Box>
        <Box className="home_contactContainer">
          <Box className="contactCard">
            <span className="contactCard__icon1">
              {" "}
              <FaPhoneAlt size={10} color="#fff" />
            </span>
            <Box className="contactCard__detailsContainer">
              <h5 className="contactCard__title">Phone</h5>
              <Box className="contactCard__details">
                <h6 className="contactCard__detail">(913) 756-3126 </h6>
                <h6 className="contactCard__detail">(921) 557-1203</h6>
              </Box>
            </Box>
          </Box>
          {contactInfo.map((info, index) => (
            <ContactCard contactInfo={info} key={index} />
          ))}
        </Box>
      </Box>
      <Box className="home__otherPosts">
        <h2 className="home__otherPostHeading">Other Posts</h2>
        <Box className="home__otherPostContainer">
          {otherPostsData.map((item, index) => (
            <PostCard others={item} key={index} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HomeScreen;
