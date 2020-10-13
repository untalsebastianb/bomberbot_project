import React from 'react'
import Layout from '../components/Layout'
import TeachersManager from '../containers/TeachersManager'
import TeacherProfile from '../containers/TeacherProfile'
import '../assets/styles/App.scss'


const App = () => (
<>
<Layout>
<TeacherProfile />
<TeachersManager />
</Layout>
</>
)
export default App