import React from 'react'
import TeachersList from '../components/TeachersList'
// import useInitialState from '../hooks/useInitialState.js';
import '../assets/styles/components/TeachersManager.scss'
import '../assets/styles/components/Buttonplus.scss'
import Typography from '@material-ui/core/Typography';
// import SearchBar from '../components/SearchBar'
import '../assets/styles/components/SearchBar.scss'
import { useForm } from '../hooks/useForm';
import { getTeachers } from '../search/getTeachers';
import useInitialState from '../hooks/useInitialState';
import { Link } from 'react-router-dom'


const TeacherManager = () => {
  const school_id = document.cookie
  .split('; ')
  .find(row => row.startsWith('school_id'))
  .split('=')[1];

  const [ {teacherToSearch}, handleInputChange ] = useForm('');
  
  const API = `http://127.0.0.1:8000/api/teacher/?school_id=${school_id}`
  const teachers = useInitialState(API);
  const filtered_teachers = getTeachers(teachers, teacherToSearch)
  
  const handleSearch = (e) => {
    e.preventDefault()
    console.log(filtered_teachers)
    console.log(teacherToSearch)
  }

  return (
    <div className='teacherList'>
      <Typography variant='h2'>
        Teachers Manager
      </Typography>
      <hr className="Title"/>
      <br></br>

{/* ************************************************* */}
      {/* <SearchBar/> */}
      <div className="search-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder='Search a teacher'
          name='teacherToSearch'
          value={ teacherToSearch }
          onChange={ handleInputChange }
        />
      </form>
      
      <span className='search-icon'></span>
    </div>
{/* ************************************************* */}

      <br></br>
      {
        filtered_teachers?.length > 0 &&
        <>

            
            {
              filtered_teachers?.map(item => {
                return (
                <TeachersList key={item.id} {...item} />
                )
              })
            }
        </>
      }
                <Link to={`/create_teacher/${school_id}`}>
            <p>Create</p>
          </Link>
    </div>
  )
}
export default TeacherManager

