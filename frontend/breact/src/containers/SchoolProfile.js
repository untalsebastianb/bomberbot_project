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
  const teacher = useInitialState(API);
  console.log(teacher)
  return (
    <div className='schoolProfile'>
      <Typography variant='h3'>
        School Profile
      </Typography>
      <hr className="Title"/>
      <DescriptionSchool name={ teacher['name'] }/>
      <InfoSchool fields={ {country: teacher['country'], city: teacher['city'], address: teacher['address'], email: teacher['email'], phone: teacher['phone'] } }/>
    </div>
  )
}

export default SchoolProfile;
