import React from 'react'
import TeachersList from '../components/TeachersList'
import useInitialState from '../hooks/useInitialState.js';
import '../assets/styles/components/TeachersManager.scss'
import '../assets/styles/components/Buttonplus.scss'
import Typography from '@material-ui/core/Typography';
import SearchBar from '../components/SearchBar'
import { Link } from 'react-router-dom'



const TeacherManager = () => {
  const school_id = document.cookie
  .split('; ')
  .find(row => row.startsWith('school_id'))
  .split('=')[1];

const API = `http://127.0.0.1:8000/api/teacher/?school_id=${school_id}`
  const teachers = useInitialState(API);
  console.log('Teacher listsss', teachers)
  return (
    <div className='teacherList'>
      <Typography variant='h3'>
        Teachers Manager
      </Typography>
      <br></br>
      <SearchBar/>
      <br></br>
      {
        teachers?.length > 0 &&
        <>
            {
              teachers?.map(item => {
                return (
                <TeachersList key={item.id} {...item} />
                )
              })
            }
        </>
      }
    </div>
  )
}
export default TeacherManager

