import { Typography,Box } from '@mui/material'
import React from 'react'
import './home.css'
import { PostCard }from '../../components/cards/index'
import { otherPost1, otherPost2, otherPost3 } from '../../assets'

const HomeScreen = () => {
  return (
    <Box className='home'>
      <Box className="">
      HomeScreen
      </Box>
      <Box className="home__otherPosts">
        <Typography className="home__otherPostHeading">Other Posts</Typography>
        <Box className="home__otherPostContainer">
<PostCard heading="5 Crazy Things Dogs Do When Left Alone At Home" title="TRAINING" image={otherPost1} 
text="Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus."/>
<PostCard heading="5 Crazy Things Dogs Do When Left Alone At Home" title="TRAINING" image={otherPost2} 
text="Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus."/>
<PostCard heading="Top Cat Foods to Consider If You Are a First Time Owner" title="PET FOOD" image={otherPost3} 
text="Vel eros donec ac odio tempor orci dapibus ultrices. Arcu felis bibendum ut tristique et egestas quis"/>
        </Box>
      </Box>
    </Box>
  )
}

export default HomeScreen