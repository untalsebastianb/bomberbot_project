import { useState, useEffect } from 'react'


/**
 * Hook that obtain info to fill Teachers component
 * return an object
 * @param   {obj} API  Url to get data from
 * @return  {obj}  Object containing all teacher information
 */


const useTeacherInfo = (API) => {
  const [teacher, setTeacher] = useState([])
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setTeacher(data[0]))
  }, [])
  return teacher
}

export default useTeacherInfo