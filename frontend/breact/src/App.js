import React from 'react'
import TeachersList from '../src/components/TeachersList'
import useInitialState from './hooks/useInitialState.js'

const API = 'http://localhost:3000/initalState'


const App = () => {
  const teacher = useInitialState(API);
  console.log(teacher)
  return (
    <div>
      {
        teacher.teachers?.length > 0 &&
            <div>
            {
                teacher.teachers?.map(item => 
                <TeachersList key={item.id} {...item} />
            )}
            </div>
      }
    </div>
  )
}
export default App

