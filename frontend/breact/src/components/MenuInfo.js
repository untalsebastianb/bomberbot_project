import React from 'react';
import '../assets/styles/components/MenuInfo.scss'
import { Link } from 'react-router-dom'

function MenuInfo({children, name}) {
    return (
      <div className='info'>
        <Link to='/home'>
        <div id='school-logo'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/The_Woodlands_College_Park_Front_Image.jpg/220px-The_Woodlands_College_Park_Front_Image.jpg" alt="imagen"/>
          <p>Home</p>
        </div>
        </Link>
        <p id='Name-School'>{name}</p>
        {children}
      </div>
    )
}
export default MenuInfo;