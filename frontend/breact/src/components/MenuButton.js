import React from 'react';
import '../assets/styles/components/MenuButton.scss'


function MenuButton({icons}) {
    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }
    return (
      <div className='Oval' onClick={handleClick}>
        <img className='icons' src={icons} alt='Icons'></img>
      </div>
    )
}

export default MenuButton;