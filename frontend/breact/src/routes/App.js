import React from 'react'
import Layout from '../components/Layout'
import TeachersManager from '../containers/TeachersManager'
import '../assets/styles/App.scss'


const App = () => (
<>
<Layout>
  <div className='right-container'>
    <TeachersManager />
  </div>
</Layout>
</>
)
export default App