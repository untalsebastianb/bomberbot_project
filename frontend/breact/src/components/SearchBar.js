import React from 'react'
import '../assets/styles/components/SearchBar.scss'
import { useForm } from '../hooks/useForm';
import { Link } from 'react-router-dom';

const SearchBar = () => {

  const [ {teacherToSearch}, handleInputChange ] = useForm('');

  const handleSearch = (e) => {
    e.preventDefault()
    console.log(teacherToSearch)
  }

  return (
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
      <Link to={`/create_teacher/${school_id}`}>
            <p>Createghgjhgjhgjhgjhgjhgjhgjhghjgjh</p>
        </Link>
      <span className='search-icon'></span>
     
    </div>
  )
}

export default SearchBar