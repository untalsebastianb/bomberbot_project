import React from 'react'
import DescriptionSchool from '../components/DescriptionSchool'
import InfoSchool from '../components/InfoSchool'
import '../assets/styles/components/SchoolProfile.scss'
import Typography from '@material-ui/core/Typography';

// containaer for School profile view
const SchoolProfile = () => {
  return (
    <div className='schoolProfile'>
      <Typography variant='h3'>
        School Profile
      </Typography>
      <hr className="Title"/>
      <DescriptionSchool />
      <InfoSchool />
    </div>
  )
}
export default SchoolProfile;
