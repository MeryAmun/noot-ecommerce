import './postCard.css'
import { Typography } from '@mui/material'
const CategoryBadge = ({title}) => {
    return (
        <span className="postCategory">{title}</span>
    )
}

export default CategoryBadge