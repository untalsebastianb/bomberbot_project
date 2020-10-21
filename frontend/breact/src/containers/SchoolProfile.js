import React from 'react'
import DescriptionSchool from '../components/DescriptionSchool'
import InfoSchool from '../components/InfoSchool'
import '../assets/styles/components/SchoolProfile.scss'
import Typography from '@material-ui/core/Typography';
import useInitialState from '../hooks/schoolInformation.js';
 

// containaer for School profile view
const SchoolProfile = () => {
  const cK = (document.cookie).split('user=')[1].split(';')[0];
  const API = 'http://127.0.0.1:8000/api/schools/?user=' + cK;
  const school = useInitialState(API);
  console.log(school)
  return (
    <div className='schoolProfile'>
      <Typography variant='h2'>
        School Profile
      </Typography>
      <hr className="Title"/>
      <DescriptionSchool name={ school['name'] }/>
      <InfoSchool fields={ {country: school['country'], city: school['city'], address: school['address'], postal_code: school['postal_code'], email: school['email'], phone: school['phone'] } }/>
    </div>
  )
}

export default SchoolProfile;
