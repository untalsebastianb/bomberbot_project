import React from 'react'
import Layout from '../components/Layout'
//import Comunication from '../containers/Comunications'
// import TeachersManager from '../containers/TeachersManager'
import '../assets/styles/App.scss'
import HomePage from '../containers/HomePage'



const App = () => (
<>
<Layout>    
    <HomePage />
    {/* <TeachersManager /> */}
    {/*<Comunication/>*/}
</Layout>
</>
)
export default App;