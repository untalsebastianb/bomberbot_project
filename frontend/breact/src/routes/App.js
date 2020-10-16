import React from 'react'
import Layout from '../components/Layout'
import HomePage from '../containers/HomePage'
// import TeacherProfile from '../containers/TeacherProfile'
//import Comunication from '../containers/Comunications'
// import BuyLicenses from '../containers/BuyLicenses'
import { Redirect, Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import SchoolProfile from '../containers/SchoolProfile'
import TeacherManager from '../containers/TeachersManager'
import '../assets/styles/App.scss'
import Comunication from '../containers/Comunications'
import BuyLicenses from '../containers/BuyLicenses'


const App = () => (
<>
<Router>
<Layout>  
    <Switch>
        <Route exact path='/home' component={ HomePage } />
        <Route exact path='/teacher_manager' component={ TeacherManager } />
        <Route exact path='/school_profile' component={ SchoolProfile } />
        <Route exact path='/comunicatios' component={ Comunication } />
        <Route exact path='/buy_licences' component={ BuyLicenses } />
        
        <Redirect to='/home' />
        
    </Switch>

</Layout>
</Router>
</>
)
export default App;
