import React from 'react'
import TeachersList from '../components/TeachersList'
import useInitialState from '../hooks/useInitialState.js'
import '../assets/styles/components/TeachersManager.scss'
import Typography from '@material-ui/core/Typography';


const API = 'http://localhost:3000/initalState'

const App = () => {
  const teacher = useInitialState(API);
  console.log(teacher)
  return (
    <div className='teacherList'>
      <Typography variant='h2'>
        Teachers Manager
      </Typography>
      {
        teacher.teachers?.length > 0 &&
            <>
            {
                teacher.teachers?.map(item => 
                <TeachersList key={item.id} {...item} />
            )}
            </>
      }
    </div>
  )
}
export default App

