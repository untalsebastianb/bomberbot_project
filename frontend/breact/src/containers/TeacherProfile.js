import React from 'react'
import DescriptionTeacher from '../components/DescriptionTeacher'
import InfoTeacher from '../components/InfoTeacher'
import '../assets/styles/components/TeacherProfile.scss'
import Typography from '@material-ui/core/Typography';


// containaer for teacher profile view
const TeacherProfile = () => {
  return (
    <div className='teacherProfile'>
      <Typography variant='h3'>
        Teacher Profile
      </Typography>
      <hr className="Title"/>
      <DescriptionTeacher />
      <InfoTeacher />


    </div>
  )
}
export default TeacherProfile;

