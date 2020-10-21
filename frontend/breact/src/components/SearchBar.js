import React from 'react'
import '../assets/styles/components/SearchBar.scss'
import { useForm } from '../hooks/useForm';

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
      
      <span className='search-icon'></span>
    </div>
  )
}

export default SearchBar