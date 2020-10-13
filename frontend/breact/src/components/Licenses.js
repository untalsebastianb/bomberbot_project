import React from 'react'
import ButtonBuy from './ButtonBuy.js'
import '../assets/styles/components/Licenses.scss'

function Licenses() {
    return (
        <div id='licenses'>
            <div id='Basic-license'>
                <div id='header'>
                    <p id='title-license'>Basic</p>
                    <p id='subtitle-license'>Full access for 20 teachers</p>
                </div>
                <div id='description'>
                    <ul>
                        <li>Monitor your school</li>
                        <li>Create  teachers</li>
                        <li>update and delete techaers</li>
                        <li>Access to all lessons</li>
                        <li>get reports</li>
                    </ul>
                </div>
                <ButtonBuy />
            </div>
            <div id='annual-license'>
            <div id='header'>
                    <p id='title-license'>Annual +</p>
                    <p id='subtitle-license'>Full access for all teachers</p>
                </div>
                <div id='description'>
                    <ul>
                        <li>Monitor your school</li>
                        <li>Create  teachers</li>
                        <li>update and delete techaers</li>
                        <li>Access to all lessons</li>
                        <li>get reports</li>
                        <li>get certificates</li>
                        <li>24/7 technical support</li>
                        <li>Access to all lessons</li>
                    </ul>
                </div>
                <ButtonBuy />
            </div>
        </div>
    )
}

export default Licenses;