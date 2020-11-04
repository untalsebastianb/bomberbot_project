import React from 'react'
import FormComunication from '../components/FormComunication'
import Typography from '@material-ui/core/Typography';

/**
 * Return Component to Send Email
 * 
 * @component
 * return (
 *  <div className='container-comunication' />
 * )
 */

function Comunication() {
    return (
        <div className="container-comunication">
            <Typography variant='h2'>
                Comunication
            </Typography>
            <hr className="Title" />
            <FormComunication />

        </div>
    )
}
export default Comunication;