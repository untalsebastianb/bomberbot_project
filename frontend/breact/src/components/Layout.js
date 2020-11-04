import React from 'react'
import MenuBar from '../containers/MenuBar'
import logo from '../assets/images/bomberbotLogo.png';


/**
 * Layout component that defines the layout of the SPA
 *
 * @component
 * @example
 * 
 * return (
 *   <Layout>
 *      <MenuBar/> <-- Fixed components along app
 *      {children components} <-- no fixed components
 *   </Layout>
 * )
 */


const Layout = ({ children }) => {

    return (
        <div className='parent-container'>
            <MenuBar />
            <div></div>
            <div className='right-container'>
                <div className='Logo-bomberbot'>
                    <img src={logo} alt='Logo'></img>
                </div>
                {children}
            </div>
        </div>
    )
}
export default Layout;

