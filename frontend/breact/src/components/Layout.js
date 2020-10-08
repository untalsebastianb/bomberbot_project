import React from 'react'
// este archivo es el layout que va a seguir la aplicacion

const Layout = ({children}) => (
// Aqui va el componente que hizo info / compontente/container FIJO ⚛️
<div className=''>
{/* Aqui van todos los componentes que van a cambiar del layout */}
{children}
</div>
)
export default Layout