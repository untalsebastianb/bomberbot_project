import React from 'react'
import Layout from '../components/Layout'
//import TeachersManager from '../containers/TeachersManager'
import TeacherProfile from '../containers/TeacherProfile'
//import Comunication from '../containers/Comunications'
import '../assets/styles/App.scss'
//import HomePage from '../containers/HomePage'



const App = () => (
<>
<Layout>    
    {/*<HomePage />*/}
    <TeacherProfile />
    {/* <TeachersManager /> */}
    {/*<Comunication/>*/}
</Layout>
</>
)
export default App;