import { useState } from "react"


/**
 * Hook that handle the events of the form
 * return an object
 * @param   {obj} initialState  initial value
 * @return  {obj}  Object containing all form information
 */


export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);
    const reset = () => {
        setValues(initialState);
    }
    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    }

    const handleInputChangeImg = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.files[0]
        });
    }

    return [values, handleInputChange, handleInputChangeImg, reset];
}