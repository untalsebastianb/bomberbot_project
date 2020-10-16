import React from 'react'
import Layout from '../components/Layout'
import HomePage from '../containers/HomePage'
import TeacherProfile from '../containers/TeacherProfile'
//import Comunication from '../containers/Comunications'
import '../assets/styles/App.scss'
// import BuyLicenses from '../containers/BuyLicenses'
import { Redirect, Route, Switch, BrowserRouter as Router } from 'react-router-dom'



const App = () => (
<>
<Router>
<Layout>  
    <Switch>
        <Route exact path='/home' component={ HomePage } />
        <Route exact path='/teacher_profile' component={ TeacherProfile } />
        <Redirect to='/home' />
        
    </Switch>
    {/*<HomePage />*/}
    {/* <TeacherProfile /> */}
    {/* <TeachersManager /> */}
    {/*<Comunication/>*/}
    {/* <BuyLicenses /> */}
</Layout>
</Router>
</>
)
export default App;