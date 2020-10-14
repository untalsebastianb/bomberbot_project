import React from 'react'
import '../assets/styles/components/FormComunication.scss'

function FormComunication (){
    return(
        
    <form method="post">
       <div className="block-input">
            <input type="text" id="to" placeholder="To"></input>
            <input type="text" placeholder="Subject"></input>
        </div>
        <div className="block-message">
            <textarea id="story" name="story" rows="5" cols="33"></textarea>
            <button type="submit">Send</button>
        </div>
    </form>
    )
}
export default FormComunication;