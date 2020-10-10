import React from 'react'
import MenuBar from '../containers/MenuBar'
// este archivo es el layout que va a seguir la aplicacion

const Layout = ({children}) => (
<>
<MenuBar/>
{/* Aqui van todos los componentes que van a cambiar del layout */}
{children}
</>
)
export default Layout