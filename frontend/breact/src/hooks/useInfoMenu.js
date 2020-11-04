import { useState, useEffect } from 'react'


/**
 * Hook that obtain info to fill menu component
 * return an object
 * @param   {obj} API  Url to get data from
 * @return  {obj}  Object containing all school information
 */


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