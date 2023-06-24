import { BsArrowRightShort } from "../../../assets/icons/icons";
import { Box } from "@mui/material";
import "./serviceCard.css";
import { Link } from "react-router-dom";
import { service1 } from "../../../assets";

const ServiceCard = ({service}) => (
  <Box className="serviceCard">
    <Box className="serviceCard__header ">
      <Box className="serviceCard__image">
        <img src={service?.iconUrl} alt="other post 1" />
      </Box>
      <h6 className="serviceCard__headerTitle">{service?.title}</h6>
    </Box>
    <Box className="serviceCard__details">
      <h6 className="serviceCard__text">
       {service.text}
      </h6>
      <Box className="serviceCard__detail">
        <p className="serviceCard__price">  {service.price}</p>
      </Box>
    </Box>
    <Link to=  {`/${service.link}`} className="serviceCard__link">
      <h6 className="serviceCard__linkTitle">Get Service</h6>
      <BsArrowRightShort size={20} color="#7C58D3" />
    </Link>
  </Box>
);

export default ServiceCard;
