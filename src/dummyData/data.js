import { otherPost1, otherPost2, otherPost3 } from '../assets'
import { MdLocationPin,MdAccessTimeFilled,MdOutlineEmail,  } from '../assets/icons/icons'

export const contactInfo = [
  
    {
        icon:MdOutlineEmail,
        contactType:"Email",
        info1:'petopia@example.com',
        info2: 'petopia@email.com'
    },
    {
        icon:MdLocationPin,
        contactType:"Address",
        info1:'17 Parkman Place, 2122',
        info2:'United States'
    },
    {
        icon:MdAccessTimeFilled,
        contactType:"Open Hours",
        info1:'Mon - Fri: 7am - 6pm',
        info2: 'Saturday: 9am - 4pm'
    },
]
export const otherPostsData = [
  
    {
        postedBy:"by Corabelle Durrad",
        postedOn:"02.01.2022",
        title:"5 Crazy Things Dogs Do When Left Alone At Home",
        text:"Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.",
        image:otherPost1,
        categoryTitle:"TRAINING"
    },
    {
        postedBy:"by Corabelle Durrad",
        postedOn:"02.01.2022",
        title:"5 Crazy Things Dogs Do When Left Alone At Home",
        text:"Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.",
        image:otherPost2,
        categoryTitle:"TRAINING"
    },
    {
        postedBy:"by Corabelle Durrad",
        postedOn:"02.01.2022",
        title:"Top Cat Foods to Consider If You Are a First Time Owner",
        text:"Vel eros donec ac odio tempor orci dapibus ultrices. Arcu felis bibendum ut tristique et egestas quis",
        image:otherPost3,
        categoryTitle:"PET DOG"
    }
]


