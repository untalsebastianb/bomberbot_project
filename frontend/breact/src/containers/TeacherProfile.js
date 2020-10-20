import React from 'react'
import DescriptionTeacher from '../components/DescriptionTeacher'
import InfoTeacher from '../components/InfoTeacher'
import '../assets/styles/components/TeacherProfile.scss'
import Typography from '@material-ui/core/Typography';
import useTeacherInfo from '../hooks/useTeacherInfo.js'


// containaer for teacher profile view
const TeacherProfile = (props) => {
  const teacherId = props.match.params.id
  const API = `http://127.0.0.1:8000/api/teacher_by_id/?id=${teacherId}`
  console.log(API)
  const teacherInfo = useTeacherInfo(API)
  console.log(teacherInfo)
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

