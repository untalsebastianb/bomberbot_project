import {useState, useEffect} from 'react'

const useInitialState = (API) => {
    const [ teachers, setTeachers ] = useState([])
    useEffect(() => {
        fetch(API)
            .then(response => response.json()) 
            .then(data => setTeachers(data))
    }, [API])
    return teachers
}

export default useInitialState