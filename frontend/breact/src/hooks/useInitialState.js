import { useState, useEffect } from 'react'


/**
 * Hook that obtain info to fill Teachers component
 * return an object
 * @param   {obj} API  Url to get data from
 * @return  {obj}  Object containing all teacher information
 */


const useInitialState = (API) => {
    const [teachers, setTeachers] = useState([])
    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setTeachers(data))
    }, [API])
    return teachers
}

export default useInitialState