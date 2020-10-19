import {useState, useEffect} from 'react'

const useInitialState = (API) => {
    const [ school, setSchool ] = useState([])
    useEffect(() => {
        fetch(API)
            .then(response => response.json()) 
            .then(data => setSchool(data[0]))
    }, [API])
    return school
}

export default useInitialState