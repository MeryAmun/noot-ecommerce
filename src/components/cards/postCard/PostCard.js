import CategoryBadge from './categoryBadge'
import { FaUser,FaCalendarDay } from '../../../assets/icons/icons'
import { Box } from '@mui/material'
import { otherPost1 } from '../../../assets'
import './postCard.css'

const PostCard = ({title, image,text,heading}) => (
    //badgeTitle,creatorIcon,creatorName,createdOn,image,calenderIcon,title,text 
    <Box className='postCard'>
        <Box className="postCard__categoryBadge">
            <CategoryBadge title={title}/>
        </Box>
        <Box className="postCard__image">
        <img src={image} alt="other post 1" />
        </Box>
        <Box className='postCard__details'>
<Box className='postCard__detail'>
    <FaUser size={10} color='#7C58D3'/>
    <h6 className="createdOnAndBy">by Corabelle Durrad</h6>
</Box>
<Box className='postCard__detail'>
<FaCalendarDay size={10} color='#7C58D3'/>
<h6 className="createdOnAndBy">02.01.2022</h6>
</Box>
</Box>
<h4 className="postCard__title">{heading}</h4>
<p className="postCard__text">
{text}
</p>
    </Box>
  )


export default PostCard