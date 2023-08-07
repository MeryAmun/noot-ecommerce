import { Box } from'@mui/material'
import './serviceCard.css'



const NavBarHeader = ({stat}) => (
<Box className='stats__card'>
<Box className='stats__cardImage'>
<img src={stat?.imageUrl} alt="" />
</Box>
<Box className='stats__cardDetails'>
<h6 className="stats__numberOfClients">{stat?.number}</h6>
<h6 className="stats__numberOfClientsText">{stat?.text}</h6>
</Box>
</Box>
)
export default NavBarHeader