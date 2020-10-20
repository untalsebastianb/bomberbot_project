import {useState, useEffect} from 'react'

const useInitialState = (API) => {
    const [ report, setReport ] = useState([])
    useEffect(() => {
        fetch(API)
            .then(response => response.json()) 
            .then(data => setReport(data))
    }, [API])
    return report
}

export default useInitialState