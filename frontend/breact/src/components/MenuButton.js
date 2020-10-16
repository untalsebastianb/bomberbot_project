import React from 'react';
import '../assets/styles/components/MenuButton.scss'
import { Link } from 'react-router-dom'

function MenuButton({icons, route, text}) {
    

    function handleClick(e) {
      if (text === 'Logout'){
        const url = ('http://127.0.0.1:8000/logout')
        window.open(url,"_self")
      }
    }
    return (
      <>

      <div className='Oval' onClick={handleClick}>
          <Link to={route}>
        <img className='icons' src={icons} alt='Icons'></img>
            {text}
          </Link>
      </div>
      </>
    )
}

export default MenuButton;