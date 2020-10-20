import React from 'react'
import FormComunication from '../components/FormComunication'
import Typography from '@material-ui/core/Typography';

function Comunication() {
    return (
        <div className="container-comunication">
            <Typography variant='h3'>
                Comunications
            </Typography>
            <hr className="Title"/>
            <FormComunication/>   
        </div>
    )}
export default Comunication;