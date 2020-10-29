import React from 'react'
import '../assets/styles/components/Licenses.scss'
import { Alert } from '@material-ui/lab';


function showmessage(licenses){
    if(licenses == 'basic'){
        document.getElementById('message1').style.display = "block";
        document.getElementById('message2').style.display = "none";
    }
    if(licenses == 'annual'){
        document.getElementById('message2').style.display = "block";
        document.getElementById('message1').style.display = "none";
    }
    

}


function Licenses() {
    return (
        <div className="parent-licenses">
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
                    <button id='Button-buy' onClick={() => {showmessage("basic");}}>Buy</button>
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
                    <button id='Button-buy' onClick={() => {showmessage("annual");}}>Buy</button>
        </div>
        </div>
            <div id="message1" className="message"> 
            <Alert style={{fontSize: 15}} onClose={() => {document.getElementById('message1').style.display = "none";}}>You have bought a license Basic</Alert>
            </div>
            <div id="message2" className="message"> 
            <Alert style={{fontSize: 15}} onClose={() => {document.getElementById('message2').style.display = "none";}}>You have bought a license Annual+</Alert>
            </div>
      </div>  
    )
}

export default Licenses;