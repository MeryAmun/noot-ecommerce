import { Box } from "@mui/material";
import "./contactCard.css";

const ContactCard = ({ contactInfo }) => (
  <Box className="contactCard">
    <span className="contactCard__icon">
      {" "}
      <contactInfo.icon size={15} color="#7C58D3" />
    </span>
    <Box className="contactCard__detailsContainer">
      <h5 className="contactCard__title">{contactInfo.contactType}</h5>
      <Box className="contactCard__details">
        <h6 className="contactCard__detail">{contactInfo.info1} </h6>
        <h6 className="contactCard__detail">{contactInfo.info2} </h6>
      </Box>
    </Box>
  </Box>
);

export default ContactCard;
