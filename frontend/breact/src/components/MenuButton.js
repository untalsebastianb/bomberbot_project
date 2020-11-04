// creates each of the buttons associated with the menu
import React from 'react';
import '../assets/styles/components/MenuButton.scss'
import { Link } from 'react-router-dom'


function MenuButton({ icons, route, text }) {
  /* 
   * Function that creates each of the menu buttons
   * Parameters:
   * icons {icon for each button, route}
   * route {path of the view associated with the button}
   * text {name of each button}
   * return: all buttons
  */
  function handleClick(e) {
    if (text === 'Logout') {
      const url = ('http://127.0.0.1:8000/logout')
      window.open(url, "_self")
    }
  }

  return (
    <>
      <div className='Oval' onClick={handleClick}>
        <Link to={route}>
          <img className='icons' src={icons} alt='Icons'></img>
          <div id='text-button'>
            {text}
          </div>
        </Link>
      </div>
    </>
  )
}

export default MenuButton;
