import { Box } from'@mui/material'
import './serviceCard.css'
import { FaTruckMoving } from '../../../assets/icons/icons';


const BenefitsCard = ({stat}) => (
<Box className='stats__card'>
<Box className="benefitsCard__icon">
<FaTruckMoving size={20} color='#7C58D3'/>
</Box>
<Box className='stats__cardDetails'>
<h6 className="benefitsCard__title">Trust & Safety</h6>
<h6 className="benefitsCard__text">Velit euismod pellentes</h6>
</Box>
</Box>
)
export default BenefitsCard