import { useState } from "react"
//initialstate es un objeto con propiedades: texto, selector, o campo del formulario
export const useForm = ( initialState = {} ) => {
    const [values, setValues] = useState(initialState);
    const reset = () => {
        setValues( initialState );
    }
    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [ target.name ]: target.value
        });
    }

    const handleInputChangeImg = ({ target }) => {
        // console.log(e.target.files[0])
        setValues({
            ...values,
            [ target.name ]: target.files[0]
        });
    }

    return [ values, handleInputChange, handleInputChangeImg, reset];
}