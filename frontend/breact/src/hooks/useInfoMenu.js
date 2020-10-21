import {useState, useEffect} from 'react'

const useInfoMenu = (API) => {
  const [school, setSchool] = useState([])
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setSchool(data[0]))
  }, [])
  return school
}

export default useInfoMenu