import React from 'react'
import DescriptionTeacher from '../components/DescriptionTeacher'
import InfoTeacher from '../components/InfoTeacher'
import '../assets/styles/components/TeacherProfile.scss'
import Typography from '@material-ui/core/Typography';
import useTeacherInfo from '../hooks/useTeacherInfo.js'
import { Link } from 'react-router-dom'



// containaer for teacher profile view
const TeacherProfile = (props) => {
  const teacherId = props.match.params.id
  const API = `http://127.0.0.1:8000/api/teacher_by_id/?id=${teacherId}`
  const teacherInfo = useTeacherInfo(API)
  let {email, score} = teacherInfo
  console.log(email, score)

  return (
    
    <div className='teacherProfile'>


      <Typography variant='h2'>
        Teacher Profile
      </Typography>
      <hr className="Title"/>
      <DescriptionTeacher {...teacherInfo}/>
      <InfoTeacher {...teacherInfo} />

          <Link to={`/edit_teacher/${teacherId}`}>
            <p >Edit</p>
          </Link>

    </div>
  )
}
export default TeacherProfile;

