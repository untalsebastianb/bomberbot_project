import { useState, useEffect } from 'react'


/**
 * Hook that set initial info to fill Teacher report component
 * return an object
 * @param   {string} API  URL to get data
 * @return  {obj}  Object containing the report information
 */


const useInitialState = (API) => {
    const [TReport, setTReport] = useState([])
    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setTReport(data))
    }, [API])
    return TReport
}

export default useInitialState