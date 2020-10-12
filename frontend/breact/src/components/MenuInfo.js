import React from 'react';
import '../assets/styles/components/MenuInfo.scss'

function MenuInfo({children}) {
    return (
      <div className='info'>
        <div id='school-logo'> </div>
        <p id='Name-School'>Hamtons School</p>
        {children}
      </div>
    )
}
export default MenuInfo;