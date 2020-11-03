import { useState, useEffect } from 'react'


/**
 * Hook that set initial info to fill report component
 * return an object
 * @param   {string} API  URL to get data
 * @return  {obj}  Object containing the report information
 */


const useInitialState = (API) => {
    const [report, setReport] = useState([])
    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setReport(data))
    }, [API])
    return report
}

export default useInitialState