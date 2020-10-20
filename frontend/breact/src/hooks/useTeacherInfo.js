import {useState, useEffect} from 'react'

const useTeacherInfo = (API) => {
  const [teacher, setTeacher] = useState([])
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setTeacher(data))
  }, [])
  return teacher
}

export default useTeacherInfo