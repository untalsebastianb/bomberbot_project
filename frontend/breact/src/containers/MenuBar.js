import React from 'react'
import school_icon from '../assets/images/icon-school.png';
import teacher_icon from '../assets/images/icon-teacher.png';
import comunications_icon from '../assets/images/icon-comunications.png';
import buy_icon from '../assets/images/icon-buy.png';
import exit_icon from '../assets/images/icon-exit.png';
import '../assets/styles/components/MenuBar.scss'
import StatusLicense from '../components/StatusLicense';
import MenuOptions from '../components/MenuOptions';
import MenuInfo from '../components/MenuInfo';
import MenuButton from '../components/MenuButton';

function MenuBar() {
  return (
    <div className='menu'>
      <MenuInfo>
        <StatusLicense/>
      </MenuInfo>
      <MenuOptions>
        <MenuButton icons={school_icon}/>
        <MenuButton icons={teacher_icon}/>
        <MenuButton icons={comunications_icon}/>
        <MenuButton icons={buy_icon}/>
        <MenuButton icons={exit_icon}/>
      </MenuOptions>
      <div className="contact-us">
        <p id='Call-us'> Call us today! <br/>+31 (0)20 894 3044</p>
        <p id='email'>hello@bomberbot.com</p>
      </div>
    </div>
  )
}
export default MenuBar;