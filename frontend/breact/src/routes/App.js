import React from 'react'
import Layout from '../components/Layout'
//import HomePage from '../containers/HomePage'
//import TeacherProfile from '../containers/TeacherProfile'
//import TeachersManager from '../containers/TeachersManager'
//import Comunication from '../containers/Comunications'
// import BuyLicenses from '../containers/BuyLicenses'
import SchoolProfile from '../containers/SchoolProfile'
import '../assets/styles/App.scss'


const App = () => (
<>
<Layout>
    {/*<HomePage />*/}
    {/* <TeacherProfile /> */}
    <SchoolProfile />
    {/* <TeachersManager /> */}
    {/*<Comunication/>*/}
    {/* <BuyLicenses /> */}
</Layout>
</>
)
export default App;
