import { Typography } from '@material-ui/core';
import React from 'react'
import '../assets/styles/components/BuyLicenses.scss'
import Licenses from '../components/Licenses'

/**
 * Return Component to Buy Licenses
 * 
 * @component
 * return (
 *  <div className='Container-licenses' />
 * )
 */
function BuyLicenses() {
    return (
        <div className='Container-licenses'>
            <Typography variant='h2'>
                Buy Licenses
            </Typography>
            <hr className="Title" />

            <Licenses />
        </div>
    )
}

export default BuyLicenses;