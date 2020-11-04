import { useState, useEffect } from 'react'

/**
 * Hook that set initial info to fill school component
 * return an object
 * @param   {string} API  URL to get data
 * @return  {obj}  Object containing the school information
 */


const useInitialState = (API) => {
    const [school, setSchool] = useState([])
    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setSchool(data[0]))
    }, [API])
    return school
}

export default useInitialState