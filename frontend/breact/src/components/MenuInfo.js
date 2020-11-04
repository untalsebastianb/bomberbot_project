// Component associated with the information section in the menu header
import React from 'react';
import '../assets/styles/components/MenuInfo.scss'
import { Link } from 'react-router-dom'


function MenuInfo({ children, name, picture }) {
  /*
   * create seccion info in the menu header
   * parameters:
   * children {component status license}
   * name {name of school}
   * picture {photo associated with the school}
   * Return section info in menu bar
   */
  return (
    <div className='info'>
      <Link to='/home'>
        <div id='school-logo'>
          <img src={picture} alt="imagen" />
          <p>Home</p>
        </div>
      </Link>
      <p id='Name-School'>{name}</p>
      {children}
    </div>
  )
}

export default MenuInfo;
