import React from 'react';
import '../assets/styles/components/MenuInfo.scss'

function MenuInfo({children}) {
    return (
      <div className='info'>
        <div id='school-logo'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/The_Woodlands_College_Park_Front_Image.jpg/220px-The_Woodlands_College_Park_Front_Image.jpg" alt="imagen"/>
        </div>
        <p id='Name-School'>Hamtons School</p>
        {children}
      </div>
    )
}
export default MenuInfo;