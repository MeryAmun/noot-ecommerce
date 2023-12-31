import CategoryBadge from './categoryBadge'
import { FaUser,FaCalendarDay } from '../../../assets/icons/icons'
import { Box } from '@mui/material'
import './postCard.css'

const PostCard = ({others}) => (
    //badgeTitle,creatorIcon,creatorName,createdOn,image,calenderIcon,title,text 
    <Box className='postCard'>
        <Box className="postCard__categoryBadge">
            <CategoryBadge name={others?.categoryTitle}/>
        </Box>
        <Box className="postCard__image">
        <img src={others?.imageUrl ?  others?.imageUrl  : others.image} alt="other post 1" />
        </Box>
        <Box className='postCard__details'>
<Box className='postCard__detail'>
    <FaUser size={10} color='#7C58D3'/>
    <h6 className="createdOnAndBy">{others?.postedBy}</h6>
</Box>
<Box className='postCard__detail'>
<FaCalendarDay size={10} color='#7C58D3'/>
<h6 className="createdOnAndBy">{others?.postedOn}</h6>
</Box>
</Box>
<h4 className="postCard__title">{others?.title}</h4>
<p className="postCard__text">
{others?.text}
</p>
    </Box>
  )


export default PostCard