// creates all the component associated with the menu options
import React from 'react';
import '../assets/styles/components/MenuOptions.scss'


function MenuOptions({ children }) {
  /*
   * create menu options section
   * parameters:
   * children {receives the buttons that will be contained in the menu}
   * return: options section
   */
  return (
    <div className='options'>
      {children}
    </div>
  )
}

export default MenuOptions;
