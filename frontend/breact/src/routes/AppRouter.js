import React from 'react'
import { Redirect, Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import MenuBar from '../containers/MenuBar'
import logo from '../assets/images/bomberbotLogo.png';
import TeacherProfile from '../containers/TeacherProfile';
import BuyLicenses from '../containers/BuyLicenses';
import HomePage from '../containers/HomePage';
// este archivo es el layout que va a seguir la aplicacion


const AppRouter = () => {

const handler = () => {
    // const url = (window.location.href + 'logout')
    const url = ('http://127.0.0.1:8000/logout')
    // console.log(url)
    window.open(url,"_self")
}

return(
// Aqui va el componente que hizo info / compontente/container FIJO ⚛️

<div className='parent-container'>
    <button onClick={handler}>Logout</button>
            <Router>
    <MenuBar/>
    <div className='right-container'>
        <div className='Logo-bomberbot'>
            <img src={logo} alt='Logo'></img>
        </div>
        {/* Aqui van todos los componentes que van a cambiar del layout */}
        <div>

                <Switch>
                    <Route exact path='/home' component={ HomePage } />
                    <Route exact path='/teacher_profile' component={ TeacherProfile } />
                    <Route exact path='/buy_licences' component={ BuyLicenses } />


                <Redirect to='/home' />
                </Switch>
        </div>
    </div>
            </Router>
</div>
)
}

export default AppRouter;