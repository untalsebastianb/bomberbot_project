import React from 'react'
import logo from '../assets/images/bomberbotLogo.png';
import '../assets/styles/components/HomePage.scss'

/**
 * Return Component HomePage
 * 
 * @component
 * return (
 *  <div className='HomePage' />
 * )
 */
function HomePage() {
    return (
        <div className='HomePage'>
            <div id='Logo-Bomberbot'>
                <img src={logo} alt='Icons' />
            </div>
            <div id='Welcome'>
                <h3>Welcome to Bomberbot School Manager</h3>
                <h4>Please select an option to continue</h4>
            </div>
        </div>
    )
}

export default HomePage;