import React from 'react'
import '../assets/styles/components/SearchBar.scss'

const SearchBar = () => {

  return (
    <div className="search-container">
    
    <input type="text" placeholder='Search a teacher' />
    <span className='search-icon'>
    </span>
  </div>
  )
}

export default SearchBar