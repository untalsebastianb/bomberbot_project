import {useState, useEffect} from 'react'

const useInitialState = (API) => {
    const [ TReport, setTReport ] = useState([])
    useEffect(() => {
        fetch(API)
            .then(response => response.json()) 
            .then(data => setTReport(data))
    }, [API])
    return TReport
}

export default useInitialState