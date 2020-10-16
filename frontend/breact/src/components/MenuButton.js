import React, { useState } from 'react';
import '../assets/styles/components/MenuButton.scss'
import { Link } from 'react-router-dom'

function MenuButton({icons, route, text}) {
    

    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }
    return (
      <>

      <div className='Oval' onClick={handleClick}>
          <Link to={route}>
        <img className='icons' src={icons} alt='Icons'></img>
            
          </Link>
      </div>
      </>
    )
}

export default MenuButton;