import React from 'react'
import {Box } from '@mui/material'
import './home.css'
import { PostCard,ContactCard }from '../../components/cards/index'
import { contactInfo } from '../../dummyData/data'
import { otherPost1, otherPost2, otherPost3 } from '../../assets'
import { FaPhoneAlt } from '../../assets/icons/icons'

const HomeScreen = () => {
  return (
    <Box className='home'>
      <Box className="">
      HomeScreen
      </Box>
      <Box className="home__contact">
      <Box className='home__contactHeader'>
        <h5 className="smallTitle">OUR CONTACTS</h5>
      <h2 className="home__contactHeading">Contact</h2>
      <p className="home__contactText">Massa enim nec dui nunc mattis enim ut tellus</p>
      </Box>
        <Box className="home_contactContainer">
        <Box className="contactCard">
  <span className="contactCard__icon1"> <FaPhoneAlt size={10} color="#fff"/></span>
    <Box className="contactCard__detailsContainer">
      <h5 className="contactCard__title">Phone</h5>
      <Box className="contactCard__details">
      <h6 className="contactCard__detail">(913) 756-3126 </h6>
      <h6 className="contactCard__detail">(921) 557-1203</h6>
        </Box>
    </Box>
  </Box>
        {
          contactInfo.map((info, index) => (
            <ContactCard contactInfo={info} key={index}/>
          ))
        }
        </Box>
      </Box>
      <Box className="home__otherPosts">
        <h2 className="home__otherPostHeading">Other Posts</h2>
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