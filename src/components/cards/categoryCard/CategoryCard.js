import {FaStar} from '../../../assets/icons/icons'
import './categoryCard.css'
import { Box } from '@mui/material'

const CategoryCard = ({category}) => (
    <Box className='categoryCard'>
<Box className='categoryCardImage'>
    <img src={category?.imageUrl} alt="" />
</Box>
<Box className='categoryCardDetails'>
<h6 className="categoryCardDetail" style={{width:'120px'}}>{category?.detail}</h6>
<h6 className="categoryRating">
<FaStar size={10} color="#FFDA47"/>
<FaStar size={10} color="#FFDA47"/>
<FaStar size={10} color="#FFDA47"/>
<FaStar size={10} color="#FFDA47"/>
</h6>
<h6 className="categoryCardDetailPrice">{category?.price}</h6>
    </Box>
    </Box>
)
export default CategoryCard