import { Box } from'@mui/material'
import './navbar.css'
import { Link } from 'react-router-dom';
import { FaPhoneAlt, MdOutlineEmail,FaTwitter,FaInstagram,FaWhatsapp,GrFacebookOption  } from "../../assets/icons/icons";


const NavBarHeader = () => (
<Box className='navbarHeader'>
<Box className='navbarHeader__icons'>
  <Link to='/facebook'className='navbarHeader__icon'>
  <GrFacebookOption size={15} color='#fff'/>
  </Link>
  <Link to='/instagram'className='navbarHeader__icon'>
  <FaInstagram size={15} color='#fff'/>
  </Link>
  <Link to='/twitter'className='navbarHeader__icon'>
  <FaTwitter size={15} color='#fff'/>
  </Link>
  <Link to='/whatsapp'className='navbarHeader__icon'>
  <FaWhatsapp size={15} color='#fff'/>
  </Link>
</Box>
<Box className='navbarHeader__contacts'>
<Box className='navbarHeader__contact'>
<FaPhoneAlt size={15} color='#fff'/>
<h6 className="navbarHeader__contactItem">
0000 - 123456789
</h6>
</Box>
<Box className='navbarHeader__contact'>
<MdOutlineEmail size={20} color='#fff'/>
<h6 className="navbarHeader__contactItem">
info@example.com
</h6>
</Box>
</Box>
</Box>
)
export default NavBarHeader