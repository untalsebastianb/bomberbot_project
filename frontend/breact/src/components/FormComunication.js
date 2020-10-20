import React from 'react'
import emailjs from 'emailjs-com';
import '../assets/styles/components/FormComunication.scss'


export default function ContactUs() {

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_i5whmbn', 'template_itn7q66', e.target, 'user_WLAva5REpynihKep6GzNN')
        .then((result) => {
            console.log(result.text);
            document.getElementById('text-response').innerHTML =("Message sent");
        }, (error) => {
            console.log(error.text);
            document.getElementById('text-response').innerHTML =("Message not sent");
        });
    }
    return(   
    <form onSubmit={sendEmail}>
       <div className="block-input">
            <div className="block-init">
                <input type="text" id ="Email" placeholder="Email" name="email"></input>
                <input type="text" id ="to-name" placeholder="To Name" name="to_name"></input>
            </div>
            <input type="text" placeholder="Subject" name="subject"></input>
            
        </div>
        <div className="block-message">
            <textarea id="story" name="message" rows="5" cols="33" placeholder="Your message"></textarea>
            <button type="submit">Send</button>
        </div>
        <div id="text-response" class="text-response"></div>
        
    </form>
    );
}
