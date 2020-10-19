import React from 'react'
import TeachersList from '../components/TeachersList'
import useInitialState from '../hooks/useInitialState.js'
import '../assets/styles/components/TeachersManager.scss'
import '../assets/styles/components/Buttonplus.scss'
import Typography from '@material-ui/core/Typography';
import SearchBar from '../components/SearchBar'
import { Link } from 'react-router-dom'


const API = 'http://localhost:3000/initalState'

const TeacherManager = () => {
  const teacher = useInitialState(API);
  console.log(teacher)
  return (
    <div className='teacherList'>
      <Typography variant='h3'>
        Teachers Manager
      </Typography>
      <br></br>
      <SearchBar/>
      <br></br>
      {
        teacher.teachers?.length > 0 &&
        <>
            {
              teacher.teachers?.map(item => 
                <TeachersList key={item.id} {...item} />
                )}
            </>
      }

      <Link className="Button" to='/teacher_profile'>dsf</Link>
    </div>
  )
}
export default TeacherManager

