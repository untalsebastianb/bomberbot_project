
import React from 'react'
import MenuBar from '../containers/MenuBar'
import logo from '../assets/images/bomberbotLogo.png';
// este archivo es el layout que va a seguir la aplicacion


const Layout = ({children}) => {

const handler = () => {

    // const url = (window.location.href + 'logout')
    const url = ('http://127.0.0.1:8000/logout')
    // console.log(url)
    window.open(url,"_self")
}

return(
// Aqui va el componente que hizo info / compontente/container FIJO ⚛️
<div className='parent-container'>
    <MenuBar/>
    <button onClick={handler}>Logout</button>
    <div className='right-container'>
        <div className='Logo-bomberbot'>
            <img src={logo} alt='Logo'></img>
        </div>
        {/* Aqui van todos los componentes que van a cambiar del layout */}
        {children}
    </div>
</div>
)
}
export default Layout;

