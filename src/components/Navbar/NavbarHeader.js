import { Box } from'@babel/core'
import './navbar.css'
import { Link } from 'react-router-dom';
import { FaPhoneAlt, GoDotFill,BsArrowRightShort,FaTwitter,FaInstagram,FaWhatsapp,GrFacebookOption  } from "../../assets/icons/icons";


const NavBarHeader = () => (
<Box className='navbarHeader'>
<Box className='navbarHeader__icons'>
    <GrFacebookOption size={20} color='#fff'/>
    <FaInstagram size={20} color='#fff'/>
    <FaTwitter size={20} color='#fff'/>
    <Fa size={20} color='#fff'/>
</Box>
<Box className='navbarHeader__contact'>

</Box>
</Box>
)