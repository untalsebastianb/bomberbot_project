import React from 'react';
import '../assets/styles/components/MenuInfo.scss'
import { Link } from 'react-router-dom'

function MenuInfo({children, name, picture}) {
    return (
      <div className='info'>
        <Link to='/home'>
        <div id='school-logo'>
          <img src={picture} alt="imagen"/>
          <p>Home</p>
        </div>
        </Link>
        <p id='Name-School'>{name}</p>
        {children}
      </div>
    )
}
export default MenuInfo;