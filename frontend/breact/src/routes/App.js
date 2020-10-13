import React from 'react'
import Layout from '../components/Layout'
import HomePage from '../containers/HomePage'
//import Comunication from '../containers/Comunications'
// import TeachersManager from '../containers/TeachersManager'
import '../assets/styles/App.scss'
// import BuyLicenses from '../containers/BuyLicenses'

const App = () => (
<>
<Layout>    
    <HomePage />
    {/* <TeachersManager /> */}
    {/*<Comunication/>*/}
    {/* <BuyLicenses /> */}
</Layout>
</>
)
export default App;