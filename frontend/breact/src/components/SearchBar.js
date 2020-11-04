// component that creates the teachers search bar
import React from 'react'
import '../assets/styles/components/SearchBar.scss'
import { useForm } from '../hooks/useForm';
import { Link } from 'react-router-dom';


const SearchBar = () => {
  /*
   * Create search bar for teachers
   * Return: component search bar with filters
   */

  // catch data to form, save in teacherToSearch
  const [{ teacherToSearch }, handleInputChange] = useForm('');

  return (
    <div className="search-container">
      <form>
        <input
          type="text"
          placeholder='Search a teacher'
          name='teacherToSearch'
          value={teacherToSearch}
          onChange={handleInputChange}
        />
      </form>
      <Link to={`/create_teacher/${school_id}`}>
        <p>Create</p>
      </Link>
      <span className='search-icon'></span>
    </div>
  )
}

export default SearchBar
