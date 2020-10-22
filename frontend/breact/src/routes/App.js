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
import General_to_print from '../reports/generalResportToPrint'
import Teacher_to_print from '../reports/teacherResportToPrint'
import TeacherProfile from '../containers/TeacherProfile'
import CreateTeacher from '../containers/CreateTeacher'

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
        <Route exact path='/teacher_profile/:id' component={ TeacherProfile } />
        <Route exact path='/general_report' component={ General_to_print } />
        <Route exact path='/teacher_report/:id' component={ Teacher_to_print } />
        <Route exact path='/create_teacher/:id' component={ CreateTeacher } />
        <Redirect to='/home' />
        
    </Switch>

</Layout>
</Router>
</>
)
export default App;
