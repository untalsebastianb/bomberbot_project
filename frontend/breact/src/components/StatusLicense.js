// component that creates the license status
import React from 'react';
import '../assets/styles/components/StatusLicense.scss'


function StatusLicense() {
  /*
   * creates the license status subcomponent located in the information section of
   * the menu bar
   */
  return (
    <div className='Status-licence'>
      <p>Status license</p>
      <div id='icon-status'></div>
    </div>
  )
}

export default StatusLicense;
