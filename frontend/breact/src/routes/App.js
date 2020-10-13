import React from 'react'
import Layout from '../components/Layout'
// import TeachersManager from '../containers/TeachersManager'
import '../assets/styles/App.scss'
import HomePage from '../containers/HomePage'


const App = () => (
<>
<Layout>
    <HomePage />
    {/* <TeachersManager /> */}
</Layout>
</>
)
export default App;